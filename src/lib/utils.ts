import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Downloads a file from Google Drive using the file ID
 * @param fileId - The Google Drive file ID
 * @param fileName - The name for the downloaded file (optional)
 */
type GoogleDriveFileType =
  | "drive"
  | "presentation"
  | "document"
  | "spreadsheet";

type DownloadGoogleDriveFileOptions = {
  fileType?: GoogleDriveFileType;
  exportFormat?: string;
};

function getGoogleDriveDownloadUrl(
  fileId: string,
  options?: DownloadGoogleDriveFileOptions
) {
  const fileType = options?.fileType ?? "drive";
  const format = options?.exportFormat;

  switch (fileType) {
    case "presentation": {
      return `https://docs.google.com/presentation/d/${fileId}/export/${
        format ?? "pdf"
      }`;
    }
    case "document": {
      return `https://docs.google.com/document/d/${fileId}/export?format=${
        format ?? "pdf"
      }`;
    }
    case "spreadsheet": {
      return `https://docs.google.com/spreadsheets/d/${fileId}/export?format=${
        format ?? "xlsx"
      }`;
    }
    default: {
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
  }
}

export async function downloadGoogleDriveFile(
  fileId: string,
  fileName?: string,
  options?: DownloadGoogleDriveFileOptions
) {
  try {
    const url = getGoogleDriveDownloadUrl(fileId, options);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName || "download";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return true;
  } catch (error) {
    console.error("Error downloading file:", error);
    return false;
  }
}
