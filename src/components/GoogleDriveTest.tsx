import React from 'react';
import { getImageSrc } from '../utils/googleImages';

/**
 * Quick test component to verify your specific Google Drive links
 */
const GoogleDriveTest: React.FC = () => {
  const testLinks = [
    {
      id: '1IUJj7o2G0WQumDZOLhipTNN6NPs5t-kL',
      name: 'Facilities Cover',
      originalLink: 'https://drive.google.com/file/d/1IUJj7o2G0WQumDZOLhipTNN6NPs5t-kL/view?usp=drive_link'
    },
    {
      id: '1zTSDD-Cl_MbSY9Pm7LVH4i1fPz4RgQXo',
      name: 'Cabin Crew Cover',
      originalLink: 'https://drive.google.com/file/d/1zTSDD-Cl_MbSY9Pm7LVH4i1fPz4RgQXo/view?usp=drive_link'
    },
    {
      id: '1meCEHERPpwVNMoqXRvCkA18ObxrnKETH',
      name: 'Aviation Training Center',
      originalLink: 'https://drive.google.com/file/d/1meCEHERPpwVNMoqXRvCkA18ObxrnKETH/view?usp=drive_link'
    },
    {
      id: '1QLZMpzYiT9rQQHA_sKtzawKmyFliwHXA',
      name: 'Training Session',
      originalLink: 'https://drive.google.com/file/d/1QLZMpzYiT9rQQHA_sKtzawKmyFliwHXA/view?usp=drive_link'
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Google Drive Links Test</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testLinks.map((link) => {
            const convertedUrl = getImageSrc('', link.originalLink);

            return (
              <div key={link.id} className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-lg mb-2">{link.name}</h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Original Link:</p>
                    <p className="text-xs text-gray-500 break-all">{link.originalLink}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-600">Converted URL:</p>
                    <p className="text-xs text-blue-600 break-all">{convertedUrl}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-600">Image Preview:</p>
                    <div className="border border-gray-300 rounded p-2 bg-gray-50 h-48 flex items-center justify-center">
                      <img
                        src={convertedUrl}
                        alt={link.name}
                        className="max-w-full max-h-full object-contain"
                        onLoad={() => console.log(`✅ ${link.name} loaded successfully`)}
                        onError={(e) => {
                          console.error(`❌ ${link.name} failed to load:`, convertedUrl);
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-red-500 text-center">
                              <p>❌ Failed to load</p>
                              <p class="text-xs">Check sharing permissions</p>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={link.originalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Open Original
                    </a>
                    <a
                      href={convertedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Open Converted
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-800 mb-2">Troubleshooting Tips:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Make sure files are set to "Anyone with the link can view"</li>
            <li>• Verify files are actual images (JPG, PNG, GIF, etc.)</li>
            <li>• Try opening the "Converted URL" directly in a new tab</li>
            <li>• Check browser console for error messages</li>
            <li>• Some corporate networks block Google Drive content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoogleDriveTest;