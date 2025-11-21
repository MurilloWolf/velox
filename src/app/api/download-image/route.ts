import { NextRequest, NextResponse } from "next/server";

const sanitizeFilename = (filename: string) => {
  const fallback = "download";
  if (!filename) return `${fallback}.png`;

  return filename.replace(/[^a-zA-Z0-9._-]/g, "_");
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get("url");
  const filenameParam = searchParams.get("filename") ?? "download.png";

  if (!urlParam) {
    return NextResponse.json(
      {
        success: false,
        message: "url parameter is required",
      },
      { status: 400 }
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(urlParam);
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid url parameter",
      },
      { status: 400 }
    );
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return NextResponse.json(
      {
        success: false,
        message: "Only HTTP/HTTPS protocols are supported",
      },
      { status: 400 }
    );
  }

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(parsedUrl.toString(), {
      cache: "no-store",
    });
  } catch (error) {
    console.error("[Download image] Failed to fetch upstream image:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to download image",
      },
      { status: 502 }
    );
  }

  if (!upstreamResponse.ok || !upstreamResponse.body) {
    return NextResponse.json(
      {
        success: false,
        message: "Image unavailable",
      },
      { status: upstreamResponse.status },
    );
  }

  const headers = new Headers();
  const contentType = upstreamResponse.headers.get("content-type");
  const contentLength = upstreamResponse.headers.get("content-length");

  if (contentType) {
    headers.set("Content-Type", contentType);
  }

  if (contentLength) {
    headers.set("Content-Length", contentLength);
  }

  headers.set(
    "Content-Disposition",
    `attachment; filename="${sanitizeFilename(filenameParam)}"`
  );

  return new NextResponse(upstreamResponse.body, {
    status: 200,
    headers,
  });
}

