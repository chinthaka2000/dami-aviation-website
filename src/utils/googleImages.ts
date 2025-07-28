/**
 * Utility functions for handling Google Drive and Google Photos images
 */

/**
 * Convert Google Drive sharing link to direct image URL
 * @param shareLink - Google Drive sharing link (various formats supported)
 * @returns Direct image URL for embedding
 */
export const convertGoogleDriveLink = (shareLink: string): string => {
  // Handle different Google Drive link formats
  let fileId = '';

  // Format 1: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Format 2: https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
  // Format 3: https://drive.google.com/open?id=FILE_ID
  // Format 4: https://drive.google.com/uc?id=FILE_ID

  const patterns = [
    /\/file\/d\/([a-zA-Z0-9-_]+)/,  // Standard sharing link
    /[?&]id=([a-zA-Z0-9-_]+)/,      // Open or uc link
    /\/d\/([a-zA-Z0-9-_]+)/         // Alternative format
  ];

  for (const pattern of patterns) {
    const match = shareLink.match(pattern);
    if (match) {
      fileId = match[1];
      break;
    }
  }

  if (fileId) {
    // Convert to direct view URL
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  // If no file ID found, return original link
  console.warn('Could not extract file ID from Google Drive link:', shareLink);
  return shareLink;
};

/**
 * Convert Google Photos sharing link to direct image URL
 * @param shareLink - Google Photos sharing link
 * @returns Direct image URL for embedding
 */
export const convertGooglePhotosLink = (shareLink: string): string => {
  // Google Photos links need special handling
  if (shareLink.includes('photos.google.com') || shareLink.includes('photos.app.goo.gl')) {
    // For Google Photos, we typically need to append =w2048-h1536 for high quality
    return shareLink.includes('=') ? shareLink : `${shareLink}=w2048-h1536`;
  }
  return shareLink;
};

/**
 * Get the appropriate image source URL (local or Google)
 * @param localSrc - Local image path
 * @param googleLink - Google Drive/Photos link (optional)
 * @returns The URL to use for the image
 */
export const getImageSrc = (localSrc: string, googleLink?: string): string => {
  if (googleLink && googleLink.trim() !== '' && !googleLink.includes('YOUR_')) {
    if (googleLink.includes('drive.google.com')) {
      const convertedLink = convertGoogleDriveLink(googleLink);
      console.log('Converting Google Drive link:', googleLink, '→', convertedLink);
      return convertedLink;
    } else if (googleLink.includes('photos.google.com') || googleLink.includes('photos.app.goo.gl')) {
      return convertGooglePhotosLink(googleLink);
    }
    return googleLink; // Return as-is for other Google services
  }

  // Return placeholder or local image if no valid Google link
  if (localSrc && localSrc.trim() !== '') {
    return localSrc;
  }

  // Return a placeholder image if no valid source
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+';
};

/**
 * Check if an image source is from Google services
 * @param src - Image source URL
 * @returns True if the source is from Google services
 */
export const isGoogleImage = (src: string): boolean => {
  return src.includes('drive.google.com') ||
    src.includes('photos.google.com') ||
    src.includes('photos.app.goo.gl') ||
    src.includes('googleusercontent.com');
};