# tiny-image-compression-tool

A lightweight Node.js library for compressing images using Sharp and imagemin.

## Installation

You can install `tiny-image-compression-tool` via npm:

```bash
npm install tiny-image-compression-tool
```

## Usage

```javascript
const { compressImages } = require('tiny-image-compression-tool');

// Path to the images you want to compress
const imagesPath = './images/*.{jpg,png}';
// Directory to save the compressed images
const outputDirectory = './compressed';

// Compress images with default width (800px)
compressImages(imagesPath, outputDirectory)
  .then(() => console.log('Images compressed successfully'))
  .catch((error) => console.error('Error compressing images:', error));

// You can also specify a custom width for resizing the images
const customWidth = 600;
compressImages(imagesPath, outputDirectory, customWidth)
  .then(() => console.log('Images compressed successfully with custom width'))
  .catch((error) => console.error('Error compressing images:', error));
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
