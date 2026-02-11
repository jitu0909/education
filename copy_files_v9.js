const fs = require('fs');
const path = require('path');

const filesToCopy = [
    { src: 'Home.jsx', dest: 'Home.jsx' }
];

const sourceDir = path.join(__dirname, 'temp_workspace_v6');
const targetDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'pages');

console.log(`Deploying files from ${sourceDir} to ${targetDir}...`);

if (!fs.existsSync(targetDir)) {
    console.error(`Target directory does not exist: ${targetDir}`);
    process.exit(1);
}

filesToCopy.forEach(file => {
    const srcPath = path.join(sourceDir, file.src);
    const destPath = path.join(targetDir, file.dest);

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Copied ${file.src} to ${destPath}`);
    } else {
        console.error(`❌ Source file not found: ${srcPath}`);
    }
});

console.log('Deployment complete!');
