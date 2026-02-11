const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'education_project', 'frontend');

// 1. Revert vite.config.js base to repo name
const viteConfigPath = path.join(projectRoot, 'vite.config.js');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
viteConfig = viteConfig.replace(
    "base: '/',",
    "base: '/education/',"
);
fs.writeFileSync(viteConfigPath, viteConfig);
console.log('✅ Reverted vite.config.js base to /education/');

// 2. Revert package.json homepage
const packageJsonPath = path.join(projectRoot, 'package.json');
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.homepage = "https://jitu0909.github.io/education/";
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Reverted package.json homepage');

// 3. Update App.jsx for basename
const appJsxPath = path.join(projectRoot, 'src', 'App.jsx');
let appJsx = fs.readFileSync(appJsxPath, 'utf8');
if (appJsx.includes("<BrowserRouter>")) {
    appJsx = appJsx.replace(
        "<BrowserRouter>",
        "<BrowserRouter basename=\"/education\">"
    );
    fs.writeFileSync(appJsxPath, appJsx);
    console.log('✅ Added basename to App.jsx');
}

// 4. Remove CNAME (or keep it, but it won't matter if we don't use custom domain in GH settings)
// For now, let's remove it to avoid confusion
const cnamePath = path.join(projectRoot, 'public', 'CNAME');
if (fs.existsSync(cnamePath)) {
    fs.unlinkSync(cnamePath);
    console.log('✅ Removed CNAME file');
}
