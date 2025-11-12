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
export async function downloadGoogleDriveFile(
  fileId: string,
  fileName?: string
) {
  try {
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

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
