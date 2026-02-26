import process from 'node:process';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export default {
  artifactsDir: '../../web-ext-artifacts',
  run: {
    startUrl: ['lichess.org/fsZPze1jz8a5'],
    firefoxProfile: 'ext-dev',
    chromiumProfile: process.env.CHROMIUM_PROFILE,
  },
  sign: {
    channel: 'listed',
    apiKey: process.env.WEB_EXT_API_KEY,
    apiSecret: process.env.WEB_EXT_API_SECRET,
  },
};
