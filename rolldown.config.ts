import process from 'node:process';
import { defineConfig } from 'rolldown';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

if (!process.env.BROWSER) {
  throw new Error('BROWSER is missing, must specify using --environment flag.');
}

const outDir = `dist/${process.env.BROWSER}`;

export default defineConfig([
  {
    input: 'baseManifest.json',
    output: { dir: 'dist' },
    plugins: [
      copy({
        targets: [
          {
            src: 'baseManifest.json',
            dest: outDir,
            rename: 'manifest.json',
            transform: (contents) => {
              const manifest = JSON.parse(contents.toString());

              if (process.env.BROWSER === 'firefox') {
                delete manifest.background.service_worker;
              }
              else if (process.env.BROWSER === 'chrome') {
                delete manifest.background.scripts;
                delete manifest.browser_specific_settings;
              }

              return JSON.stringify(manifest, null, 2);
            },
          },
          {
            src: ['src/assets'],
            dest: outDir,
          },
        ],
      }),
      del({ targets: 'dist/baseManifest.js', hook: 'writeBundle' }),
    ],
  },
  {
    input: 'src/content.ts',
    output: {
      dir: outDir,
      minify: true,
    },
  },
  {
    input: 'src/background.ts',
    output: {
      dir: outDir,
      minify: true,
    },
  },
]);
