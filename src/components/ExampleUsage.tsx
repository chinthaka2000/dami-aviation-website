import React from 'react';
import CloudinaryImage from './CloudinaryImage';
import { images, getGalleryImages } from '../data/images';

const ExampleUsage: React.FC = () => {
  return (
    <div>
      {/* Hero image with preset */}
      <CloudinaryImage
        publicId={images.aviationHero}
        alt="DAMI Aviation Training"
        preset="hero"
        className="w-full h-screen object-cover"
      />

      {/* Custom sized image */}
      <CloudinaryImage
        publicId={images.logo}
        alt="DAMI Aviation Logo"
        width={200}
        height={100}
        quality="90"
        className="mx-auto"
      />

      {/* Gallery grid */}
      <div className="grid grid-cols-3 gap-4">
        {getGalleryImages().map((imageId, index) => (
          <CloudinaryImage
            key={index}
            publicId={imageId}
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
          srcSet={`https://res.cloudinary.com/your-cloud-name/image/upload/w_800,q_auto,f_auto/${images.aboutUs}`}
        />
        <CloudinaryImage
          publicId={images.aboutUs}
          alt="About DAMI Aviation"
          width={400}
          className="w-full"
        />
      </picture>
    </div>
  );
};

export default ExampleUsage;