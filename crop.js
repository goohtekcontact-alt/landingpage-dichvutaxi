const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const iconPath = path.join(__dirname, 'src', 'app', 'icon.png');
const publicIconPath = path.join(__dirname, 'public', 'favicon.ico');
const appFaviconPath = path.join(__dirname, 'src', 'app', 'favicon.ico');

async function processImage() {
  try {
    console.log("Trimming icon...");
    await sharp(iconPath)
      .trim()
      .toFile(path.join(__dirname, 'src', 'app', 'icon-cropped.png'));
    
    // Replace the original icon.png with the cropped version
    fs.copyFileSync(path.join(__dirname, 'src', 'app', 'icon-cropped.png'), iconPath);
    console.log("Saved cropped icon over icon.png");

    // Also remove favicon.ico so Next.js favors icon.png
    if (fs.existsSync(publicIconPath)) {
        fs.unlinkSync(publicIconPath);
        console.log("Removed public/favicon.ico");
    }
    if (fs.existsSync(appFaviconPath)) {
        fs.unlinkSync(appFaviconPath);
        console.log("Removed src/app/favicon.ico");
    }

    console.log("Done.");
  } catch (err) {
    console.error("Error cropping image:", err);
  }
}

processImage();
