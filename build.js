const { exec } = require('child_process');
const fs = require('fs-extra');

exec('npx tailwindcss build dist/input.css -o dist/output.css', (err, stdout, stderr) => {
  if (err) {
    console.error('Error building TailwindCSS:', err);
    return;
  }
  console.log('TailwindCSS built successfully');
});

fs.copySync('src', 'dist');
console.log('Source folder copied to dist');

console.log('Build process completed');
