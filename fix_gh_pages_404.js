const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'education_project', 'frontend');

// 1. Revert vite.config.js base to / (some users prefer this even for repo sites if they don't use subfolders correctly)
// But let's stick to /education/ as it's the repository name.
const viteConfigPath = path.join(projectRoot, 'vite.config.js');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
if (viteConfig.includes("base: '/'")) {
    viteConfig = viteConfig.replace("base: '/'", "base: '/education/'");
} else if (!viteConfig.includes("base: '/education/'")) {
    viteConfig = viteConfig.replace(
        "plugins: [react()],",
        "plugins: [react()],\n  base: '/education/',"
    );
}
fs.writeFileSync(viteConfigPath, viteConfig);

// 2. Revert package.json homepage
const packageJsonPath = path.join(projectRoot, 'package.json');
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.homepage = "https://jitu0909.github.io/education/";
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 3. Update App.jsx for basename
const appJsxPath = path.join(projectRoot, 'src', 'App.jsx');
let appJsx = fs.readFileSync(appJsxPath, 'utf8');
if (appJsx.includes("<BrowserRouter>")) {
    appJsx = appJsx.replace(
        "<BrowserRouter>",
        "<BrowserRouter basename=\"/education\">"
    );
    fs.writeFileSync(appJsxPath, appJsx);
}
