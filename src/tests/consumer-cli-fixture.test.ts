import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

/**
 * Consumer Fixture Test:
 * Simulates an external developer project that installs and uses the Design Style Library CLI
 * independently of the website or dev source files.
 */
describe('Consumer CLI Fixture Test Suite', () => {
  const rootDir = path.resolve(__dirname, '../..');
  const cliPath = path.resolve(rootDir, 'bin/design-engine.js');
  const fixtureDir = path.resolve(rootDir, 'scratch/consumer-fixture-project');

  beforeAll(() => {
    // 1. Ensure the production library bundle is built
    expect(fs.existsSync(path.resolve(rootDir, 'dist/lib/index.js'))).toBe(true);

    // 2. Setup isolated consumer project directory
    if (fs.existsSync(fixtureDir)) {
      fs.rmSync(fixtureDir, { recursive: true, force: true });
    }
    fs.mkdirSync(fixtureDir, { recursive: true });

    // 3. Create consumer's plain, unstyled HTML file
    const consumerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Consumer Project</title>
</head>
<body>
  <main>
    <header>
      <nav>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <p>Independent Practice</p>
      <h1>Natural Simplicity & Structure</h1>
      <p>A tranquil digital studio designing timeless interfaces.</p>
      <button>Explore Archive</button>
    </header>
    <section>
      <h2>Selected Projects</h2>
      <article>
        <h3>Ceramic Vessel</h3>
        <p>Tactile pottery catalog and stoneware gallery.</p>
        <button>View Piece</button>
      </article>
      <article>
        <h3>Washi Journal</h3>
        <p>Handmade paper publication and meditative essays.</p>
        <button>Read Journal</button>
      </article>
    </section>
    <form>
      <label>Email Address</label>
      <input type="email" placeholder="tea@ceremony.jp" />
      <button type="submit">Subscribe</button>
    </form>
    <footer>
      <p>&copy; 2026 Studio Zen. All rights reserved.</p>
    </footer>
  </main>
</body>
</html>`;

    fs.writeFileSync(path.resolve(fixtureDir, 'index.html'), consumerHtml, 'utf8');
  });

  afterAll(() => {
    // Cleanup consumer fixture directory
    if (fs.existsSync(fixtureDir)) {
      fs.rmSync(fixtureDir, { recursive: true, force: true });
    }
  });

  it('Step 1: Consumer runs "design-library list" to discover available languages', () => {
    const output = execSync(`node "${cliPath}" list`, {
      cwd: fixtureDir,
      encoding: 'utf8',
    });

    expect(output).toContain('Available Design Languages');
    expect(output).toContain('wabi-sabi');
    expect(output).toContain('brutalism');
    expect(output).toContain('minimalism');
    expect(output).toContain('bauhaus');
    expect(output).toContain('Wabi-Sabi: Warm washi paper canvas');
  });

  it('Step 2: Consumer runs "design-library info wabi-sabi" to inspect tokens and usage', () => {
    const output = execSync(`node "${cliPath}" info wabi-sabi`, {
      cwd: fixtureDir,
      encoding: 'utf8',
    });

    expect(output).toContain('STYLE: Wabi-Sabi (wabi-sabi)');
    expect(output).toContain('Background:  #f7f4ee');
    expect(output).toContain('Primary:     #4d7c0f');
    expect(output).toContain('Text:        #292524');
    expect(output).toContain('Cormorant Garamond');
    expect(output).toContain('<div class="style-wabi-sabi">');
  });

  it('Step 3: Consumer runs "design-library init" to create project stylesheet', () => {
    const output = execSync(`node "${cliPath}" init`, {
      cwd: fixtureDir,
      encoding: 'utf8',
    });

    expect(output).toContain('Successfully generated design-library.css');
    const generatedCssPath = path.resolve(fixtureDir, 'design-library.css');
    expect(fs.existsSync(generatedCssPath)).toBe(true);

    const cssContent = fs.readFileSync(generatedCssPath, 'utf8');
    expect(cssContent).toContain('.style-wabi-sabi');
    expect(cssContent).toContain('.style-brutalism');
    expect(cssContent).toContain('#f7f4ee');
  });

  it('Step 4: Consumer runs "design-library export-css wabi-sabi -o wabi-sabi.css" to export dedicated CSS', () => {
    const output = execSync(`node "${cliPath}" export-css wabi-sabi -o wabi-sabi.css`, {
      cwd: fixtureDir,
      encoding: 'utf8',
    });

    expect(output).toContain('Successfully exported CSS to wabi-sabi.css');
    const cssPath = path.resolve(fixtureDir, 'wabi-sabi.css');
    expect(fs.existsSync(cssPath)).toBe(true);

    const exportedCss = fs.readFileSync(cssPath, 'utf8');
    expect(exportedCss).toContain('.style-wabi-sabi');
    expect(exportedCss).toContain('#f7f4ee');
  });

  it('Step 5: Consumer runs "design-library apply index.html --style wabi-sabi --standalone -o transformed.html"', () => {
    execSync(`node "${cliPath}" apply index.html --style wabi-sabi --standalone -o transformed.html`, {
      cwd: fixtureDir,
      encoding: 'utf8',
    });

    const transformedPath = path.resolve(fixtureDir, 'transformed.html');
    expect(fs.existsSync(transformedPath)).toBe(true);

    const transformedHtml = fs.readFileSync(transformedPath, 'utf8');
    // Verifies standalone HTML document structure
    expect(transformedHtml).toContain('<!DOCTYPE html>');
    expect(transformedHtml).toContain('<title>Wabi-Sabi — Design Style Library</title>');
    expect(transformedHtml).toContain('class="style-wabi-sabi"');
    // Verifies consumer source elements remain preserved
    expect(transformedHtml).toContain('Natural Simplicity & Structure');
    expect(transformedHtml).toContain('Ceramic Vessel');
    expect(transformedHtml).toContain('Washi Journal');
    expect(transformedHtml).toContain('tea@ceremony.jp');
  });

  it('Step 6: Consumer runs "design-library apply index.html --style brutalism" to stdin/stdout pipe', () => {
    const inputHtml = fs.readFileSync(path.resolve(fixtureDir, 'index.html'), 'utf8');
    const pipedOutput = execSync(`node "${cliPath}" apply --style brutalism`, {
      cwd: fixtureDir,
      input: inputHtml,
      encoding: 'utf8',
    });

    expect(pipedOutput).toContain('class="style-brutalism"');
    expect(pipedOutput).toContain('Natural Simplicity & Structure');
  });
});
