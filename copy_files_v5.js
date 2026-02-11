const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'temp_workspace_v5');
const targetDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'pages');

const filesToCopy = [
    { src: 'Home.jsx', dest: 'Home.jsx' },
    { src: 'Portfolio.jsx', dest: 'Portfolio.jsx' }
];

console.log(`Starting file copy operation...`);
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
            const content = fs.readFileSync(srcPath, 'utf8');
            fs.writeFileSync(destPath, content, 'utf8');
            console.log(`Successfully copied ${file.src} to ${file.dest}`);
        } else {
            console.error(`Source file not found: ${srcPath}`);
        }
    } catch (error) {
        console.error(`Error copying ${file.src}: ${error.message}`);
    }
});

console.log('File copy operation completed.');
