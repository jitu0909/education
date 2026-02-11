const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'temp_workspace_v6');
const targetPagesDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'pages');
const targetComponentsDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'components');

const filesToCopy = [
    { src: 'Home.jsx', dest: targetPagesDir },
    { src: 'Portfolio.jsx', dest: targetPagesDir },
    { src: 'Logo.jsx', dest: targetComponentsDir }
];

console.log('Deploying updated files...');

filesToCopy.forEach(file => {
    const sourcePath = path.join(sourceDir, file.src);
    const targetPath = path.join(file.dest, file.src);

    if (!fs.existsSync(file.dest)) {
        console.log(`Creating directory: ${file.dest}`);
        fs.mkdirSync(file.dest, { recursive: true });
    }

    if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copied ${file.src} to ${targetPath}`);
    } else {
        console.error(`❌ Source file not found: ${sourcePath}`);
    }
});

console.log('Deployment complete!');
