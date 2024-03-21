const glob = require('glob');
const sharp = require('sharp');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

/**
 * Compresses images found in the specified path using Sharp and imagemin.
 * @param {string} imagesPath - Path to the images you want to compress.
 * @param {string} outputDirectory - Directory to save the compressed images.
 * @param {number} targetWidth - Target width for resizing the images (optional).
 * @returns {Promise<void>} A Promise that resolves when all images are compressed.
 */
async function compressImages(imagesPath, outputDirectory, targetWidth = 800) {
  try {
    const files = glob.sync(imagesPath);
    await Promise.all(files.map(async (file) => {
      const buffer = await sharp(file)
        .resize({ width: targetWidth }) // Resize to the specified width, keeping aspect ratio
        .toBuffer();

      const compressed = await imagemin.buffer(buffer, {
        plugins: [
          imageminMozjpeg({ quality: 75 }),
          imageminPngquant({ quality: [0.6, 0.8] })
        ]
      });

      await sharp(compressed).toFile(`${outputDirectory}/${file}`);
      console.log(`Compressed and saved: ${file}`);
    }));
  } catch (error) {
    console.error(`Error compressing images: ${error}`);
  }
}

module.exports = { compressImages };
