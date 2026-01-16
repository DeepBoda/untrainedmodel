/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',

    images: {
        unoptimized: true, // Required for static export
        formats: ['image/webp', 'image/avif'], // Modern image formats
    },
    compress: true, // Enable gzip compression
    poweredByHeader: false, // Remove X-Powered-By header for security

    // Experimental optimizations
    experimental: {
        optimizeCss: true, // Optimize CSS delivery
        optimizePackageImports: ['lucide-react', 'framer-motion'], // Optimize large packages
    },
};

export default nextConfig;
