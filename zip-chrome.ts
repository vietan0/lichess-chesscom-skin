import { readFile } from 'node:fs/promises';
import AdmZip from 'adm-zip';

async function zipChrome() {
  const zip = new AdmZip();
  zip.addLocalFolder('dist/chrome');

  zip.getEntries().forEach((entry) => {
    if (entry.entryName.endsWith('.js.map')) {
      zip.deleteFile(entry);
    }
  });

  const manifest = JSON.parse(await readFile('dist/chrome/manifest.json', 'utf-8'));
  const destination = `./web-ext-artifacts/chrome/chrome-${manifest.name.replaceAll(' ', '_').toLowerCase()}-${manifest.version}.zip`;
  zip.writeZip(destination);
}

zipChrome();
