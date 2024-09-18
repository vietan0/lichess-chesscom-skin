import process from 'node:process';
import { execSync } from 'node:child_process';
import dotenv from 'dotenv';

dotenv.config();

function run(command) {
  return execSync(`npx ${command}`, { stdio: 'inherit' });
}

function parseArgs(args) {
  return Object.keys(args).reduce(
    (result, arg) => `${result} ${arg} ${args[arg]}`
    , '',
  );
}

const args = {
  '--channel': 'listed',
  '--amo-metadata': 'metadata.json',
  '--api-key': process.env.WEB_EXT_API_KEY,
  '--api-secret': process.env.WEB_EXT_API_SECRET,
};

const command = `web-ext sign ${parseArgs(args)}`;
run(command);
