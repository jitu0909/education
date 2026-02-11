const fs = require('fs');
const path = require('path');

const filesToCopy = [
    { src: 'Home.jsx', dest: 'Home.jsx' },
    { src: 'Portfolio.jsx', dest: 'Portfolio.jsx' }
];

const sourceDir = path.join(__dirname, 'temp_workspace_v6');
const targetDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'pages');

console.log(`Deploying files from ${sourceDir} to ${targetDir}...`);

if (!fs.existsSync(targetDir)) {
    console.error(`Target directory does not exist: ${targetDir}`);
    process.exit(1);
}

filesToCopy.forEach(file => {
    const sourcePath = path.join(sourceDir, file.src);
    const targetPath = path.join(targetDir, file.dest);

    if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copied ${file.src} to ${targetPath}`);
    } else {
        console.error(`❌ Source file not found: ${sourcePath}`);
    }
});

console.log('Deployment complete!');
