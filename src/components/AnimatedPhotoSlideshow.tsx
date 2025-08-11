import React, { useState, useEffect } from 'react';
import { getGalleryImageUrl } from '../utils/imageHelpers';

const AnimatedPhotoSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Featured images for the slideshow
  const slideshowImages = [
    {
      src: getGalleryImageUrl('dsc05892', { width: 1200, height: 800 }),
      title: 'State-of-the-Art Training Facilities',
      description: 'Modern aviation training centers equipped with the latest technology'
    },
    {
      src: getGalleryImageUrl('dsc05924', { width: 1200, height: 800 }),
      title: 'Professional Cabin Crew Training',
      description: 'Comprehensive preparation for aviation service excellence'
    },
    {
      src: getGalleryImageUrl('dsc06071', { width: 1200, height: 800 }),
      title: 'Expert Instructors & Successful Students',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      src: getGalleryImageUrl('dsc05931', { width: 1200, height: 800 }),
      title: 'Emergency Safety Training',
      description: 'Critical fire safety and rescue operation procedures'
    },
    {
      src: getGalleryImageUrl('dsc09510', { width: 1200, height: 800 }),
      title: 'Water Survival Training',
      description: 'Essential water emergency and survival techniques'
    },
    {
      src: getGalleryImageUrl('dsc05670', { width: 1200, height: 800 }),
      title: 'Physical Fitness Programme',
      description: 'Aviation-specific fitness and conditioning training'
    }
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % slideshowImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <div className="mb-20">
      <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Training Excellence in Action
          </h2>
          <p className="text-gray-300">
            Discover our comprehensive aviation training programs through these highlights
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
          {slideshowImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
                }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {image.description}
                </p>
              </div>
            </div>
          ))}

          {/* Progress indicators */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-[#D4175C] scale-110'
                  : 'bg-white/50 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentImageIndex(
              currentImageIndex === 0 ? slideshowImages.length - 1 : currentImageIndex - 1
            )}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentImageIndex(
              (currentImageIndex + 1) % slideshowImages.length
            )}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-6">

        </div>
      </div>
    </div>
  );
};

export default AnimatedPhotoSlideshow;