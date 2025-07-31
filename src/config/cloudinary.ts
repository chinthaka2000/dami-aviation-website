// Cloudinary configuration
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dzz0qlqve',
  secure: true
};

// Helper function to generate optimized image URLs
export const getOptimizedImageUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
    crop?: string;
  } = {}
) => {
  const {
    width = 800,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill'
  } = options;

  let transformation = `q_${quality},f_${format}`;

  if (width) transformation += `,w_${width}`;
  if (height) transformation += `,h_${height},c_${crop}`;

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformation}/${publicId}`;
};

// Helper function to use full Cloudinary URLs with additional transformations
export const getTransformedCloudinaryUrl = (
  fullUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
    crop?: string;
  } = {}
) => {
  const {
    width,
    height,
    quality,
    format,
    crop = 'fill'
  } = options;

  // If no transformations requested, return original URL
  if (!width && !height && !quality && !format) {
    return fullUrl;
  }

  // Extract the base URL and add transformations
  const urlParts = fullUrl.split('/upload/');
  if (urlParts.length !== 2) return fullUrl;

  let transformation = '';
  const transformations = [];

  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`, `c_${crop}`);

  if (transformations.length > 0) {
    transformation = transformations.join(',') + '/';
  }

  return `${urlParts[0]}/upload/${transformation}${urlParts[1]}`;
};

// Predefined image configurations for common use cases
export const imageConfigs = {
  hero: { width: 1920, height: 1080, quality: '80' },
  thumbnail: { width: 300, height: 200, quality: '70' },
  gallery: { width: 800, height: 600, quality: '75' },
  avatar: { width: 150, height: 150, crop: 'thumb' },
  card: { width: 400, height: 250, quality: '75' }
};