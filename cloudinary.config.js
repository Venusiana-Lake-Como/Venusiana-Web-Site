/**
 * Cloudinary Configuration for Venusiana Boutique Website
 * 
 * This configuration file provides the necessary settings for Cloudinary
 * image optimization services when used with deployment platforms.
 */

// Basic Cloudinary configuration
const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'venusiana-boutique',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  secure: true
};

// Export configuration for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cloudinaryConfig;
}

// Export for browser environments
if (typeof window !== 'undefined') {
  window.cloudinaryConfig = cloudinaryConfig;
}