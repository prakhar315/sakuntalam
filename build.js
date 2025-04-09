const fs = require('fs');
const path = require('path');

// Ensure build directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Copy _redirects file to build directory
const redirectsSource = path.join(__dirname, 'public', '_redirects');
const redirectsDestination = path.join(buildDir, '_redirects');

if (fs.existsSync(redirectsSource)) {
  fs.copyFileSync(redirectsSource, redirectsDestination);
  console.log('_redirects file copied to build directory');
}

// Ensure index.html exists in build directory
const indexHtmlPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  // If build process hasn't completed, create a placeholder
  const placeholderHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sakuntalam - Outdoor Advertising Solutions</title>
</head>
<body>
  <div id="root"></div>
  <script>
    // Redirect to the build process if this placeholder is shown
    window.location.reload();
  </script>
</body>
</html>
  `;
  fs.writeFileSync(indexHtmlPath, placeholderHtml);
  console.log('Placeholder index.html created in build directory');
}

console.log('Build preparation completed successfully');
