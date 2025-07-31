import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { handleRegister } from '../utils/whatsapp';
import { GalleryImage } from '../types/course';
import { getGalleryImageUrl, getImageUrl } from '../utils/imageHelpers';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'facilities',
      name: 'Training Facilities',
      icon: '🏫',
      description: 'State-of-the-art training centers and classrooms',
      coverImage: getGalleryImageUrl('dsc05892', { width: 600, height: 400 })
    },

    {
      id: 'cabin-crew',
      name: 'Cabin Crew Training',
      icon: '👨‍✈️',
      description: 'Comprehensive cabin crew preparation programs',
      coverImage: getGalleryImageUrl('dsc05924', { width: 600, height: 400 })
    },

    {
      id: 'team',
      name: 'Our Team & Students',
      icon: '👥',
      description: 'Meet our experienced instructors and successful students',
      coverImage: getGalleryImageUrl('dsc06071', { width: 600, height: 400 })
    },
    {
      id: 'events',
      name: 'Events & Ceremonies',
      icon: '🎓',
      description: 'Graduation ceremonies and special events',
      coverImage: getGalleryImageUrl('dsc09337', { width: 600, height: 400 })
    },
    {
      id: 'fire-safety',
      name: 'Fire Safety & Rescue Training',
      icon: '🚨',
      description: 'Emergency fire safety procedures and rescue operations',
      coverImage: getGalleryImageUrl('dsc05569', { width: 600, height: 400 })
    },
    {
      id: 'first-aid',
      name: 'Basic First Aid & CPR Training',
      icon: '🏥',
      description: 'Essential first aid skills and medical emergency response',
      coverImage: getGalleryImageUrl('dsc05657', { width: 600, height: 400 })
    },
    {
      id: 'grooming',
      name: 'Professional Grooming & Appearance Standards',
      icon: '👔',
      description: 'Aviation industry appearance standards and grooming',
      coverImage: getGalleryImageUrl('dsc05625', { width: 600, height: 400 })
    },
    {
      id: 'fitness',
      name: 'Physical Fitness Programme',
      icon: '💪',
      description: 'Aviation-specific fitness and conditioning program',
      coverImage: getGalleryImageUrl('dsc05670', { width: 600, height: 400 })
    },
    {
      id: 'water-survival',
      name: 'Water Survival Training',
      icon: '🌊',
      description: 'Emergency water survival techniques and procedures',
      coverImage: getGalleryImageUrl('dsc09510', { width: 600, height: 400 })
    }
  ];

  const galleryImages: GalleryImage[] = [
    // Training Facilities Category
    {
      src: getGalleryImageUrl('dsc05892', { width: 800, height: 600 }),
      title: 'Aviation Training Center',
      description: 'State-of-the-art training facilities with modern equipment',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06041', { width: 800, height: 600 }),
      title: 'Training Session',
      description: 'Hands-on learning experience in our classrooms',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05667', { width: 800, height: 600 }),
      title: 'Modern Training Facility',
      description: 'Our well-equipped training center',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09404', { width: 800, height: 600 }),
      title: 'Modern Training Facility',
      description: 'Our well-equipped training center',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09425', { width: 800, height: 600 }),
      title: 'Modern Training Facility',
      description: 'Our well-equipped training center',
      category: 'facilities',
      type: 'image'
    },

    // Cabin Crew Training Category
    {
      src: getGalleryImageUrl('dsc05924', { width: 800, height: 600 }),
      title: 'Cabin Crew Training',
      description: 'Professional cabin crew preparation and service training',
      category: 'cabin-crew',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09576', { width: 800, height: 600 }),
      title: 'Cabin Service Training',
      description: 'Real environment training for cabin crew',
      category: 'cabin-crew',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05529', { width: 800, height: 600 }),
      title: 'Cabin Crew Training',
      description: 'Professional cabin crew preparation and service training',
      category: 'cabin-crew',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05532', { width: 800, height: 600 }),
      title: 'Cabin Service Training',
      description: 'Real environment training for cabin crew',
      category: 'cabin-crew',
      type: 'image'
    },

    // Our Team & Students Category
    {
      src: getGalleryImageUrl('dsc06071', { width: 800, height: 600 }),
      title: 'DAMI Aviation Students',
      description: 'Our experienced instructors and aviation professionals',
      category: 'team',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09243', { width: 800, height: 600 }),
      title: 'DAMI Aviation',
      description: 'Our official aviation training',
      category: 'team',
      type: 'image'
    },

    // Events & Ceremonies Category
    {
      src: getGalleryImageUrl('dsc05958', { width: 800, height: 600 }),
      title: 'Graduation Ceremony',
      description: 'Celebrating our successful aviation graduates',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05959', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05960', { width: 800, height: 600 }),
      title: 'Graduation Ceremony',
      description: 'Celebrating our successful aviation graduates',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05965', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05970', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05971', { width: 800, height: 600 }),
      title: 'Graduation Ceremony',
      description: 'Celebrating our successful aviation graduates',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05974', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },

    // Fire Safety & Rescue Training Category
    {
      src: getGalleryImageUrl('dsc05931', { width: 800, height: 600 }),
      title: 'Fire Safety Training',
      description: 'Emergency fire safety procedures and rescue operations',
      category: 'fire-safety',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05926', { width: 800, height: 600 }),
      title: 'Emergency Rescue Training',
      description: 'Hands-on rescue training and emergency response',
      category: 'fire-safety',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05938', { width: 800, height: 600 }),
      title: 'Emergency Rescue Training',
      description: 'Hands-on rescue training and emergency response',
      category: 'fire-safety',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05572', { width: 800, height: 600 }),
      title: 'Emergency Rescue Training',
      description: 'Hands-on rescue training and emergency response',
      category: 'fire-safety',
      type: 'image'
    },

    // Basic First Aid & CPR Training Category
    {
      src: getGalleryImageUrl('dsc05657', { width: 800, height: 600 }),
      title: 'First Aid Training',
      description: 'Essential first aid skills and medical emergency response',
      category: 'first-aid',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09376', { width: 800, height: 600 }),
      title: 'CPR Training Session',
      description: 'Cardiopulmonary resuscitation training and certification',
      category: 'first-aid',
      type: 'image'
    },

    // Professional Grooming & Appearance Standards Category
    {
      src: getGalleryImageUrl('dsc05625', { width: 800, height: 600 }),
      title: 'Professional Grooming',
      description: 'Aviation industry appearance standards and grooming',
      category: 'grooming',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06046', { width: 800, height: 600 }),
      title: 'Uniform Standards',
      description: 'Professional uniform fitting and presentation',
      category: 'grooming',
      type: 'image'
    },

    // Physical Fitness Programme Category
    {
      src: getGalleryImageUrl('dsc05670', { width: 800, height: 600 }),
      title: 'Physical Fitness Training',
      description: 'Aviation-specific fitness and conditioning program',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09387', { width: 800, height: 600 }),
      title: 'Fitness Assessment',
      description: 'Physical fitness evaluation and training sessions',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09396', { width: 800, height: 600 }),
      title: 'Physical Fitness Training',
      description: 'Aviation-specific fitness and conditioning program',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09381', { width: 800, height: 600 }),
      title: 'Fitness Assessment',
      description: 'Physical fitness evaluation and training sessions',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09384', { width: 800, height: 600 }),
      title: 'Physical Fitness Training',
      description: 'Aviation-specific fitness and conditioning program',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09388', { width: 800, height: 600 }),
      title: 'Fitness Assessment',
      description: 'Physical fitness evaluation and training sessions',
      category: 'fitness',
      type: 'image'
    },

    // Water Survival Training Category
    {
      src: getGalleryImageUrl('dsc09510', { width: 800, height: 600 }),
      title: 'Water Survival Training',
      description: 'Emergency water survival techniques and procedures',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06178', { width: 800, height: 600 }),
      title: 'Ditching Procedures',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06190', { width: 800, height: 600 }),
      title: 'Water Emergency Training',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05847', { width: 800, height: 600 }),
      title: 'Water Survival Training',
      description: 'Emergency water survival techniques and procedures',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05861', { width: 800, height: 600 }),
      title: 'Ditching Procedures',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05883', { width: 800, height: 600 }),
      title: 'Water Safety Training',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05827', { width: 800, height: 600 }),
      title: 'Emergency Water Procedures',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    }
  ];

  // Filter images based on selected category
  const filteredImages = selectedCategory
    ? galleryImages.filter(image => image.category === selectedCategory)
    : [];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#0f2942] pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DAMI Aviation Gallery
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our world-class training facilities, aircraft, and the journey of our students
            as they transform into professional aviation experts.
          </p>
        </div>

        {/* Interactive Training Experience Video */}
        <div className="mb-20">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interactive Training Experience
              </h2>
              <p className="text-gray-300">
                Watch our comprehensive aviation training program in action
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube-nocookie.com/embed/jfv8eila56w?rel=0&modestbranding=1&controls=1&loop=1&playlist=jfv8eila56w&enablejsapi=1"
                title="DAMI Aviation Training Experience"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-300 text-center mt-4">
              Get an inside look at our world-class aviation training facilities and programs
            </p>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="mb-16">
          {!selectedCategory ? (
            // Category Cards View
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Explore Our Gallery Categories
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Click on any category below to view photos and videos from that section
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="group relative overflow-hidden rounded-xl bg-[#0a1929]/30 backdrop-blur-sm border border-white/10 hover:border-[#D4175C]/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B5054A]/20"
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedImage(null);
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.coverImage}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-white font-bold text-xl">{category.name}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-[#B5054A]/80 text-white px-3 py-1 rounded-full">
                          {galleryImages.filter(img => img.category === category.id).length} items
                        </span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#B5054A]/80 transition-colors duration-300">
                          <ChevronRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Selected Category Gallery View
            <>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedImage(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0a1929]/50 hover:bg-[#0a1929]/70 text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-[#D4175C]/50"
                >
                  <ChevronLeft size={20} />
                  <span>Back to Categories</span>
                </button>
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {categories.find(cat => cat.id === selectedCategory)?.icon} {categories.find(cat => cat.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {filteredImages.length} items in this category
                  </p>
                </div>
                <div className="w-32"></div> {/* Spacer for centering */}
              </div>

              {/* Images Grid for Selected Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-[#0a1929]/30 backdrop-blur-sm border border-white/10 hover:border-[#D4175C]/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B5054A]/20"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-[#B5054A]/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      {image.type === 'video' ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                    </div>
                    {image.type === 'video' && (
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        VIDEO
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📷</div>
                  <h3 className="text-xl font-semibold text-white mb-2">No images yet</h3>
                  <p className="text-gray-400">Images for this category will be added soon.</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Aviation Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful graduates who have launched their aviation careers with DAMI Aviation's comprehensive training programs.
            </p>
            <button onClick={handleRegister} className="px-8 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium text-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            <div className="bg-[#0a1929]/90 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === selectedImage ? 'bg-[#D4175C]' : 'bg-gray-500'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;