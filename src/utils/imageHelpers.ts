import { getOptimizedImageUrl, getTransformedCloudinaryUrl } from '../config/cloudinary';
import { images } from '../data/images';

// Helper to get Cloudinary URL for gallery images
export const getGalleryImageUrl = (imageKey: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
}) => {
  const imageValue = images.gallery[imageKey as keyof typeof images.gallery];
  if (!imageValue) {
    console.warn(`Image key "${imageKey}" not found in gallery`);
    return '';
  }

  // Check if it's a full URL or just a public ID
  if (imageValue.startsWith('https://')) {
    // It's a full Cloudinary URL, use the transformation function
    return getTransformedCloudinaryUrl(imageValue, {
      width: options?.width || 800,
      height: options?.height || 600,
      quality: options?.quality || '75'
    });
  } else {
    // It's a public ID, use the optimization function
    return getOptimizedImageUrl(imageValue, {
      width: options?.width || 800,
      height: options?.height || 600,
      quality: options?.quality || '75'
    });
  }
};

// Helper to get any image URL from the images config
export const getImageUrl = (imagePath: string, options?: {
  width?: number;
  height?: number;
  quality?: string;
}) => {
  // Navigate through nested object structure
  const pathParts = imagePath.split('.');
  let imageId: any = images;

  for (const part of pathParts) {
    imageId = imageId[part];
    if (!imageId) {
      console.warn(`Image path "${imagePath}" not found`);
      return '';
    }
  }

  return getOptimizedImageUrl(imageId, {
    width: options?.width || 800,
    height: options?.height || 600,
    quality: options?.quality || '75'
  });
};

// Test function to verify your Cloudinary setup
export const testCloudinaryImage = (publicId: string) => {
  const testUrl = `https://res.cloudinary.com/dzz0qlqve/image/upload/c_scale,w_400,q_auto,f_auto/${publicId}`;
  console.log('Test URL:', testUrl);
  return testUrl;
};