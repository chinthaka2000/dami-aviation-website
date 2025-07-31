import React from 'react';
import { getGalleryImageUrl, testCloudinaryImage } from '../utils/imageHelpers';

const CloudinaryTest: React.FC = () => {
  // Test different image formats
  const tests = [
    {
      title: 'Direct Public ID Test',
      url: testCloudinaryImage('DSC05926_lwgaop'),
      description: 'Using public ID with direct URL construction'
    },
    {
      title: 'Gallery Helper - Public ID',
      url: getGalleryImageUrl('dsc05926'),
      description: 'Using gallery helper with public ID (DSC05926_lwgaop)'
    },
    {
      title: 'Gallery Helper - Full URL',
      url: getGalleryImageUrl('dsc05529'),
      description: 'Using gallery helper with full Cloudinary URL'
    },
    {
      title: 'Gallery Helper - Full URL 2',
      url: getGalleryImageUrl('dsc05532'),
      description: 'Another full Cloudinary URL test'
    },
    {
      title: 'Direct Full URL Test',
      url: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1753771661/DSC05529_ad0bjp.jpg',
      description: 'Direct full URL without any processing'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Cloudinary Image Tests</h2>

      <div className="grid gap-8">
        {tests.map((test, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{test.description}</p>
            <p className="text-xs text-blue-600 mb-4 break-all">{test.url}</p>

            {test.url ? (
              <img
                src={test.url}
                alt={`Test image ${index + 1}`}
                className="max-w-md rounded-lg shadow-md"
                onError={(e) => {
                  console.error(`Image ${index + 1} failed to load:`, test.url);
                  e.currentTarget.style.border = '3px solid red';
                  e.currentTarget.style.background = '#ffebee';
                }}
                onLoad={() => console.log(`Image ${index + 1} loaded successfully:`, test.url)}
              />
            ) : (
              <div className="max-w-md h-48 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
                <p className="text-red-600">No URL generated</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Debug Information</h3>
        <div className="text-sm space-y-2">
          <p><strong>Cloud Name:</strong> dzz0qlqve</p>
          <p><strong>Expected URL Format:</strong> https://res.cloudinary.com/dzz0qlqve/image/upload/[transformations]/[public_id]</p>
          <p><strong>Check browser console for detailed logs</strong></p>
        </div>
      </div>
    </div>
  );
};

export default CloudinaryTest;