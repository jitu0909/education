const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'education_project', 'frontend');

// 1. Update vite.config.js
const viteConfigPath = path.join(projectRoot, 'vite.config.js');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
// For custom domains, base is usually '/'
if (!viteConfig.includes("base:")) {
    viteConfig = viteConfig.replace(
        "plugins: [react()],",
        "plugins: [react()],\n  base: '/',"
    );
    fs.writeFileSync(viteConfigPath, viteConfig);
    console.log('✅ Updated vite.config.js');
}

// 2. Update package.json
const packageJsonPath = path.join(projectRoot, 'package.json');
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.homepage = "https://shreevallabh.github.in/";
packageJson.scripts.predeploy = "npm run build";
packageJson.scripts.deploy = "gh-pages -d dist";
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json');

// 3. Create CNAME file in public folder
const publicPath = path.join(projectRoot, 'public');
if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
}
const cnamePath = path.join(publicPath, 'CNAME');
fs.writeFileSync(cnamePath, 'shreevallabh.github.in');
console.log('✅ Created CNAME file');
