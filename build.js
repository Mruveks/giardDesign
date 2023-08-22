const { exec } = require('child_process');

exec('npx tailwindcss build src/input.css -o dist/output.css', (err, stdout, stderr) => {
  if (err) {
    console.error('Error building TailwindCSS:', err);
    return;
  }
  console.log('TailwindCSS built successfully');
});
