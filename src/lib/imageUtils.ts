import { useState } from "react";

/**
 * Converts original image URL to JPG preview
 * - Replaces 'originals' with 'previews' in path
 * - Converts any extension to .jpg
 *
 * @param originalImageUrl - Original image URL
 * @returns Preview image URL in JPG format
 *
 * @example
 * ```ts
 * const original = "https://bucket.s3.amazonaws.com/originals/product.webp";
 * const preview = getProductPreviewUrl(original);
 * // "https://bucket.s3.amazonaws.com/previews/product.jpg"
 * ```
 */
export function getProductPreviewUrl(originalImageUrl: string): string {
  if (!originalImageUrl) return originalImageUrl;

  let previewUrl = originalImageUrl.replace("originals", "previews");

  previewUrl = previewUrl.replace(/\.\w+$/, ".jpg");

  return previewUrl;
}

/**
 * Converts image URL to JPG version (without changing path)
 * Useful when you want to keep the path but ensure JPG extension
 *
 * @param imageUrl - Image URL
 * @returns Image URL with .jpg extension
 */
export function toJpgUrl(imageUrl: string): string {
  if (!imageUrl) return imageUrl;

  return imageUrl.replace(/\.\w+$/, ".jpg");
}

/**
 * Converts original image URL to JPG download
 * Keeps 'originals' path but ensures JPG extension
 *
 * @param originalImageUrl - Original image URL
 * @returns Original image URL with .jpg extension
 */
export function getProductDownloadUrl(originalImageUrl: string): string {
  if (!originalImageUrl) return originalImageUrl;

  return toJpgUrl(originalImageUrl);
}

/**
 * Hook to manage image loading error state
 * Useful for fallbacks when image fails to load
 */
export function useImageError() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);
  const resetImageError = () => setImageError(false);

  return {
    imageError,
    handleImageError,
    resetImageError,
  };
}
