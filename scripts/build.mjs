import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { build } from 'esbuild';

const output = new URL('../dist/', import.meta.url);

await rm(output, { recursive: true, force: true });
await mkdir(new URL('vendor/', output), { recursive: true });

await Promise.all([
  ...['index.html', 'app.js', 'styles.css'].map(file =>
    copyFile(new URL(`../${file}`, import.meta.url), new URL(file, output))
  ),
  cp(new URL('../assets/', import.meta.url), new URL('assets/', output), { recursive: true }),
  copyFile(new URL('../vendor/leaflet.css', import.meta.url), new URL('vendor/leaflet.css', output)),
  copyFile(new URL('../node_modules/falling-leaves/LICENSE', import.meta.url), new URL('vendor/falling-leaves-LICENSE.txt', output))
]);

await build({
  entryPoints: [new URL('../src/hero-leaves.js', import.meta.url).pathname],
  outfile: new URL('vendor/hero-leaves.js', output).pathname,
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020'
});
