const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function createRoundedFavicon() {
  try {
    // Create a canvas with the desired size
    const size = 64;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Load the image
    const image = await loadImage('./public/logo.jpg');
    
    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    
    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, size, size);
    
    // Add a border (optional)
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Convert the canvas to a PNG buffer
    const buffer = canvas.toBuffer('image/png');
    
    // Save the buffer to a file
    fs.writeFileSync('./public/favicon.png', buffer);
    
    console.log('Rounded favicon created successfully!');
  } catch (error) {
    console.error('Error creating rounded favicon:', error);
  }
}

createRoundedFavicon();
