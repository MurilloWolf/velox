import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://velox.run";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

const siteName = "VELOX Corridas";

const defaultOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName,
};

const defaultTwitter = {
  card: "summary_large_image" as const,
  creator: "@RunningVelox",
  site: "@RunningVelox",
};

const withUrl = (path = "/") => {
  try {
    return new URL(path, siteUrl).toString();
  } catch {
    return siteUrl;
  }
};

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  index?: boolean;
};

export const buildMetadata = (options: BuildMetadataOptions): Metadata => {
  const { title, description, path = "/", keywords, image, index = true } = options;

  const canonical = withUrl(path);
  const imageUrl = image ? withUrl(image) : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords,
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: canonical,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              secureUrl: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
              type: "image/png",
            },
          ]
        : undefined,
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    robots: index
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: false,
          nocache: true,
        },
  };
};

export const seo = {
  siteName,
  siteUrl,
  metadataBase: new URL(withUrl()),
};

