const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'temp_workspace_v6');
// Correct target path relative to this script: ../avicreations/frontend/src/pages
const targetDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'pages');

const filesToCopy = [
    { src: 'Home.jsx', dest: 'Home.jsx' },
    { src: 'Portfolio.jsx', dest: 'Portfolio.jsx' }
];

console.log('Starting file copy operation...');
console.log(`Source: ${sourceDir}`);
console.log(`Target: ${targetDir}`);

if (!fs.existsSync(targetDir)) {
    console.error(`Target directory does not exist: ${targetDir}`);
    process.exit(1);
}

filesToCopy.forEach(file => {
    const srcPath = path.join(sourceDir, file.src);
    const destPath = path.join(targetDir, file.dest);

    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Successfully copied ${file.src} to ${file.dest}`);
        } else {
            console.error(`Source file not found: ${srcPath}`);
        }
    } catch (err) {
        console.error(`Error copying ${file.src}: ${err.message}`);
    }
});

console.log('File copy operation completed.');
