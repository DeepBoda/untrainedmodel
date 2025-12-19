import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

// Images to optimize
const imagesToOptimize = [
    { input: 'logo.png', output: 'logo-optimized.png', quality: 80, resize: { width: 400 } },
    { input: 'icon.png', output: 'icon-optimized.png', quality: 85 },
    { input: 'og-image.png', output: 'og-image-optimized.png', quality: 85 },
];

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    for (const img of imagesToOptimize) {
        const inputPath = path.join(publicDir, img.input);
        const outputPath = path.join(publicDir, img.output);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${img.input} - file not found`);
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);
            const inputSizeKB = (inputStats.size / 1024).toFixed(2);

            let pipeline = sharp(inputPath);

            // Resize if specified
            if (img.resize) {
                pipeline = pipeline.resize(img.resize);
            }

            // Convert to WebP with quality setting
            await pipeline
                .webp({ quality: img.quality || 80 })
                .toFile(outputPath.replace('.png', '.webp'));

            // Also create optimized PNG
            await sharp(inputPath)
                .resize(img.resize)
                .png({ quality: img.quality || 80, compressionLevel: 9 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSizeKB = (outputStats.size / 1024).toFixed(2);
            const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ ${img.input}`);
            console.log(`   Original: ${inputSizeKB} KB`);
            console.log(`   Optimized: ${outputSizeKB} KB`);
            console.log(`   Savings: ${savings}%\n`);
        } catch (error) {
            console.error(`❌ Error optimizing ${img.input}:`, error.message);
        }
    }

    // Optimize blog images (SVGs don't need optimization, but PNGs do)
    const blogImagesPath = path.join(imagesDir, 'blog');
    if (fs.existsSync(blogImagesPath)) {
        const blogImages = fs.readdirSync(blogImagesPath).filter(f => f.endsWith('.png'));

        for (const img of blogImages) {
            const inputPath = path.join(blogImagesPath, img);
            const outputPath = path.join(blogImagesPath, img.replace('.png', '-optimized.webp'));

            try {
                await sharp(inputPath)
                    .webp({ quality: 85 })
                    .toFile(outputPath);

                const inputStats = fs.statSync(inputPath);
                const outputStats = fs.statSync(outputPath);
                const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

                console.log(`✅ blog/${img} → WebP (${savings}% smaller)`);
            } catch (error) {
                console.error(`❌ Error optimizing blog/${img}:`, error.message);
            }
        }
    }

    console.log('\n🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
