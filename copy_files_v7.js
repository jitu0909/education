const fs = require('fs');
const path = require('path');

// Source directory (where we edited files)
const sourceDir = path.join(__dirname, 'temp_workspace_v6');

// Target directory (where the real app is)
// We are in 'education-1', so we go up one level to 'education' then into 'avicreations'
const targetDir = path.join(__dirname, '..', 'avicreations', 'frontend', 'src', 'pages');

const filesToCopy = [
    { src: 'Home.jsx', dest: 'Home.jsx' },
    { src: 'Portfolio.jsx', dest: 'Portfolio.jsx' },
    { src: 'Contact.jsx', dest: 'Contact.jsx' }
];

console.log(`Deploying files from ${sourceDir} to ${targetDir}...`);

if (!fs.existsSync(targetDir)) {
    console.error(`Target directory does not exist: ${targetDir}`);
    process.exit(1);
}

filesToCopy.forEach(file => {
    const sourcePath = path.join(sourceDir, file.src);
    const targetPath = path.join(targetDir, file.dest);

    try {
        if (fs.existsSync(sourcePath)) {
            const content = fs.readFileSync(sourcePath, 'utf8');
            fs.writeFileSync(targetPath, content, 'utf8');
            console.log(`✅ Copied ${file.src} to ${targetPath}`);
        } else {
            console.error(`❌ Source file not found: ${sourcePath}`);
        }
    } catch (error) {
        console.error(`❌ Error copying ${file.src}:`, error.message);
    }
});

console.log('Deployment complete!');
