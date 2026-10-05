import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distLibDir = path.resolve(__dirname, '../dist/lib');

const baseStyles = `@import url('https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Orbitron:wght@400;500;600;700;800;900&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Space+Grotesk:wght@400;500;700;800&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
}

button {
  font-family: inherit;
}

code {
  font-family: 'JetBrains Mono', monospace;
}
`;

if (!fs.existsSync(distLibDir)) {
  fs.mkdirSync(distLibDir, { recursive: true });
}
fs.writeFileSync(path.join(distLibDir, 'style.css'), baseStyles, 'utf-8');
console.log('Successfully generated dist/lib/style.css');
