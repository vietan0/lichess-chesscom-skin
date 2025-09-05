import { readFile, writeFile } from 'node:fs/promises';

async function version() {
  const packageJson = JSON.parse(await readFile('package.json', 'utf-8'));
  const newVer = packageJson.version;
  const manifest = JSON.parse(await readFile('manifest.json', 'utf-8'));
  manifest.version = newVer;

  try {
    await writeFile('manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
  }
  catch (err) {
    console.log(err);
  }
}

version();
