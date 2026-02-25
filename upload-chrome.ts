import child_process from 'node:child_process';
import { readFile } from 'node:fs/promises';
import process from 'node:process';
import { promisify } from 'node:util';
import dotenv from 'dotenv';
import { glob } from 'glob';

const exec = promisify(child_process.exec);
dotenv.config();

function parseArgs(args: Record<string, string | boolean | undefined>) {
  return Object.keys(args)
    .reduce((result, arg) => {
      const value = args[arg];

      if (typeof value === 'boolean') {
        return value ? `${result} ${arg}` : result;
      }

      return value ? `${result} ${arg} ${value}` : result;
    }, '')
    .trim();
}

async function uploadChrome() {
  const manifest = JSON.parse(
    await readFile('dist/chrome/manifest.json', 'utf-8'),
  );

  const zipFiles = await glob(
    `./web-ext-artifacts/chrome/**/*-${manifest.version}.zip`,
    {
      posix: true,
      dotRelative: true,
    },
  );

  if (zipFiles.length === 0) {
    throw new Error(
      `Can't find a .zip file with version ${manifest.version}. Check that pnpm zip:chrome has been run.`,
    );
  }

  if (zipFiles.length > 1) {
    throw new Error(
      `There are duplicates .zip files with version ${manifest.version}.`,
    );
  }

  const args = {
    '--source': zipFiles[0],
    '--extension-id': process.env.EXTENSION_ID,
    '--client-id': process.env.CLIENT_ID,
    '--client-secret': process.env.CLIENT_SECRET,
    '--refresh-token': process.env.REFRESH_TOKEN,
  };

  const command = `chrome-webstore-upload upload ${parseArgs(args)}`;
  const { stdout, stderr } = await exec(command);
  stdout && console.log('stdout:', stdout);
  stderr && console.error('stderr:', stderr);
}

uploadChrome();
