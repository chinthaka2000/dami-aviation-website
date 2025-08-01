import React from 'react';
import CloudinaryImage from './CloudinaryImage';
import { imageUrls, getImageUrl } from '../data/images';

const ExampleUsage: React.FC = () => {
  return (
    <div>
      {/* Hero image with preset */}
      <CloudinaryImage
        publicId={imageUrls.aviationHero}
        alt="DAMI Aviation Training"
        preset="hero"
        className="w-full h-screen object-cover"
      />

      {/* Custom sized image */}
      <CloudinaryImage
        publicId={imageUrls.logo}
        alt="DAMI Aviation Logo"
        width={200}
        height={100}
        quality="90"
        className="mx-auto"
      />

      {/* Gallery grid */}
      <div className="grid grid-cols-3 gap-4">
        {Object.values(imageUrls.fallback).map((imageUrl, index) => (
          <CloudinaryImage
            key={index}
            publicId={imageUrl}
            alt={`Gallery image ${index + 1}`}
            preset="gallery"
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Responsive image with different sizes */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`https://res.cloudinary.com/dzz0qlqve/image/upload/w_800,q_auto,f_auto/v1753771758/aboutus_imt9ah.jpg`}
        />
        <CloudinaryImage
          publicId={imageUrls.aboutUs}
          alt="About DAMI Aviation"
          width={400}
          className="w-full"
        />
      </picture>
    </div>
  );
};

export default ExampleUsage;