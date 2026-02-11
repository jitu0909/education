const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..', 'avicreations', 'frontend');

// 1. Update vite.config.js
const viteConfigPath = path.join(projectRoot, 'vite.config.js');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
if (!viteConfig.includes("base:")) {
    viteConfig = viteConfig.replace(
        "plugins: [react()],",
        "plugins: [react()],\n  base: '/avicreations/',"
    );
    fs.writeFileSync(viteConfigPath, viteConfig);
    console.log('✅ Updated vite.config.js');
}

// 2. Update package.json
const packageJsonPath = path.join(projectRoot, 'package.json');
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.homepage = "https://jitu0909.github.io/avicreations/";
packageJson.scripts.predeploy = "npm run build";
packageJson.scripts.deploy = "gh-pages -d dist";
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json');

// 3. Update App.jsx for basename
const appJsxPath = path.join(projectRoot, 'src', 'App.jsx');
let appJsx = fs.readFileSync(appJsxPath, 'utf8');
if (!appJsx.includes("basename=\"/avicreations/\"")) {
    appJsx = appJsx.replace(
        "<Router>",
        "<Router basename=\"/avicreations/\">"
    );
    fs.writeFileSync(appJsxPath, appJsx);
    console.log('✅ Updated App.jsx');
}
