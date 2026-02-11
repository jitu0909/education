const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..', 'avicreations', 'frontend');

// 1. Update index.css with responsive styles
const indexCssPath = path.join(projectRoot, 'src', 'index.css');
let indexCss = fs.readFileSync(indexCssPath, 'utf8');

const responsiveStyles = `
/* Responsive Adjustments */
@media (max-width: 768px) {
  .display-1 {
    font-size: 3.2rem !important;
  }
  .display-3 {
    font-size: 2.5rem !important;
  }
  .hero-section {
    height: 85vh !important;
  }
  .hero-section p.lead {
    font-size: 1.1rem !important;
    max-width: 90% !important;
  }
  .navbar-brand svg {
    width: 140px !important;
  }
  .letter-spacing-18 {
    letter-spacing: 8px !important;
  }
}

@media (max-width: 480px) {
  .display-1 {
    font-size: 2.8rem !important;
  }
  .display-3 {
    font-size: 2rem !important;
  }
  .hero-section {
    height: 75vh !important;
  }
  .btn-lg {
    padding: 12px 25px !important;
    font-size: 0.9rem !important;
  }
}

.transition-all {
  transition: all 0.5s ease;
}
`;

if (!indexCss.includes("/* Responsive Adjustments */")) {
    indexCss += responsiveStyles;
    fs.writeFileSync(indexCssPath, indexCss);
    console.log('✅ Updated index.css with responsiveness');
}

// 2. Update Home.jsx to ensure responsive font classes
const homeJsxPath = path.join(projectRoot, 'src', 'pages', 'Home.jsx');
let homeJsx = fs.readFileSync(homeJsxPath, 'utf8');

// Ensure the tagline in hero is also responsive
if (homeJsx.includes("letter-spacing-18")) {
    // Already has it, just making sure the CSS handles it
}

// 3. Update Navigation.jsx for better mobile experience
const navJsxPath = path.join(projectRoot, 'src', 'components', 'Navigation.jsx');
let navJsx = fs.readFileSync(navJsxPath, 'utf8');

// Add mobile menu closing logic when link is clicked
if (!navJsx.includes("const [expanded, setExpanded] = useState(false);")) {
    navJsx = navJsx.replace(
        "const [scrolled, setScrolled] = useState(false);",
        "const [scrolled, setScrolled] = useState(false);\n  const [expanded, setExpanded] = useState(false);"
    );
    navJsx = navJsx.replace(
        "<Navbar",
        "<Navbar expanded={expanded} onToggle={(val) => setExpanded(val)}"
    );
    navJsx = navJsx.replace(
        "onClick={() => setFilter(cat)}", // This is from Portfolio, let's be careful
        "onClick={() => setExpanded(false)}"
    );
    // Actually let's use a safer replace for Nav.Link clicks
    navJsx = navJsx.replace(
        "as={Link}",
        "as={Link} onClick={() => setExpanded(false)}"
    );
    // But it's in a loop, so let's do it for the whole loop
    navJsx = navJsx.replace(
        "key={item}",
        "key={item} onClick={() => setExpanded(false)}"
    );
    
    fs.writeFileSync(navJsxPath, navJsx);
    console.log('✅ Updated Navigation.jsx for mobile');
}
