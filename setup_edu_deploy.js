const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'education_project', 'frontend');

// 1. Update vite.config.js
const viteConfigPath = path.join(projectRoot, 'vite.config.js');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
// For default GitHub Pages URL, base is '/repo-name/'
viteConfig = viteConfig.replace(
    /base: '.*'/,
    "base: '/education/'"
);
fs.writeFileSync(viteConfigPath, viteConfig);
console.log('✅ Updated vite.config.js');

// 2. Update package.json
const packageJsonPath = path.join(projectRoot, 'package.json');
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.homepage = "https://jitu0909.github.io/education/";
packageJson.scripts.predeploy = "npm run build";
packageJson.scripts.deploy = "gh-pages -d dist";
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json');

// 3. Remove CNAME file if it exists
const publicPath = path.join(projectRoot, 'public');
const cnamePath = path.join(publicPath, 'CNAME');
if (fs.existsSync(cnamePath)) {
    fs.unlinkSync(cnamePath);
    console.log('✅ Removed CNAME file');
}
