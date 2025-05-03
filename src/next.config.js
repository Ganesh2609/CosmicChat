/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Enable static exports for GitHub Pages
    output: 'export',
    // Set the base path for GitHub Pages deployment
    // Replace 'cosmic-chat' with your repository name
    basePath: process.env.NODE_ENV === 'production' ? '/cosmic-chat' : '',
    // Disable image optimization for static exports
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig