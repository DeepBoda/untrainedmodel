import bundleAnalyzer from '@next/bundle-analyzer';

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

    // Experimental optimizations
    experimental: {
        optimizeCss: true, // Optimize CSS delivery
    },
};

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
