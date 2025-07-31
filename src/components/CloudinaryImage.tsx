import React from 'react';
import { getOptimizedImageUrl, imageConfigs } from '../config/cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  preset?: keyof typeof imageConfigs;
  width?: number;
  height?: number;
  quality?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  publicId,
  alt,
  preset,
  width,
  height,
  quality,
  className = '',
  loading = 'lazy'
}) => {
  // Use preset config or custom dimensions
  const config = preset ? imageConfigs[preset] : { width, height, quality };

  const imageUrl = getOptimizedImageUrl(publicId, config);

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      loading={loading}
      width={config.width}
      height={config.height}
    />
  );
};

export default CloudinaryImage;