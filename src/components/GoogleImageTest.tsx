import React, { useState } from 'react';
import { getImageSrc } from '../utils/googleImages';

/**
 * Test component to verify Google Drive image links
 * Use this to test your Google Drive links before adding them to the gallery
 */
const GoogleImageTest: React.FC = () => {
  const [testLink, setTestLink] = useState('');
  const [convertedUrl, setConvertedUrl] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const testGoogleLink = () => {
    const converted = getImageSrc('', testLink);
    setConvertedUrl(converted);
    setImageLoaded(false);
    setImageError(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Google Drive Image Tester</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Paste your Google Drive sharing link:
          </label>
          <input
            type="text"
            value={testLink}
            onChange={(e) => setTestLink(e.target.value)}
            placeholder="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={testGoogleLink}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Test Link
        </button>

        {convertedUrl && (
          <div className="space-y-2">
            <div>
              <strong>Converted URL:</strong>
              <div className="text-sm text-gray-600 break-all bg-gray-100 p-2 rounded">
                {convertedUrl}
              </div>
            </div>

            <div>
              <strong>Image Preview:</strong>
              <div className="border border-gray-300 rounded p-4 bg-gray-50">
                <img
                  src={convertedUrl}
                  alt="Test image"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className="max-w-full h-auto max-h-64 mx-auto"
                />

                {imageLoaded && (
                  <div className="text-green-600 text-sm mt-2">
                    ✅ Image loaded successfully!
                  </div>
                )}

                {imageError && (
                  <div className="text-red-600 text-sm mt-2">
                    ❌ Failed to load image. Check the sharing permissions.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <h3 className="font-semibold mb-2">How to get a working Google Drive link:</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Upload your image to Google Drive</li>
          <li>Right-click the file → "Get link"</li>
          <li>Change access to "Anyone with the link"</li>
          <li>Copy the link and paste it above</li>
        </ol>
      </div>
    </div>
  );
};

export default GoogleImageTest;