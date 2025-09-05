import process from 'node:process';
import dotenv from 'dotenv';

dotenv.config();

export default {
  run: {
    startUrl: ['lichess.org/fsZPze1jz8a5'],
    firefoxProfile: 'ext-dev',
  },
  sign: {
    channel: 'listed',
    apiKey: process.env.WEB_EXT_API_KEY,
    apiSecret: process.env.WEB_EXT_API_SECRET,
  },
};
