/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/webp'],
    },
    compress: true, // Enable gzip compression
    poweredByHeader: false, // Remove X-Powered-By header for security
    swcMinify: true, // Use SWC for faster minification

    // Experimental optimizations
    experimental: {
        optimizeCss: true, // Optimize CSS delivery
    },
};

export default nextConfig;
