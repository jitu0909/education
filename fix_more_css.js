const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..', 'avicreations', 'frontend');

// 1. Update index.css with more responsive styles
const indexCssPath = path.join(projectRoot, 'src', 'index.css');
let indexCss = fs.readFileSync(indexCssPath, 'utf8');

if (indexCss.includes(".display-1 {")) {
    indexCss = indexCss.replace(
        ".display-3 {",
        ".display-4 {\n    font-size: 2rem !important;\n  }\n  .display-3 {"
    );
    fs.writeFileSync(indexCssPath, indexCss);
    console.log('✅ Updated index.css with display-4 responsiveness');
}
