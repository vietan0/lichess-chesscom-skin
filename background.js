// redirect sound file requests
browser.webRequest.onBeforeRequest.addListener(
  (req) => {
    let redirectUrl = '';

    if (req.url.includes('Move')) {
      redirectUrl = browser.runtime.getURL('/sound/move-self.mp3');
    }

    if (req.url.includes('Capture')) {
      redirectUrl = browser.runtime.getURL('/sound/capture.mp3');
    }

    if (req.url.includes('Check')) {
      redirectUrl = browser.runtime.getURL('/sound/move-check.mp3');
    }

    if (req.url.includes('GenericNotify')) {
      redirectUrl = browser.runtime.getURL('/sound/game-start.mp3');
    }

    if (req.url.includes('LowTime')) {
      redirectUrl = browser.runtime.getURL('/sound/tenseconds.mp3');
    }

    if (req.url.includes('Victory')) {
      redirectUrl = browser.runtime.getURL('/sound/game-end.mp3');
    }

    if (req.url.includes('Defeat')) {
      redirectUrl = browser.runtime.getURL('/sound/game-end.mp3');
    }

    return { redirectUrl };
  },
  {
    urls: [
      '*://lichess1.org/assets/______1/sound/*/*.mp3',
    ],
  },
  ['blocking'],
);

// redirect board svg request
browser.webRequest.onBeforeRequest.addListener(
  () => ({ redirectUrl: browser.runtime.getURL('/board.svg') }),
  {
    urls: [
      'https://lichess1.org/assets/images/board/svg/green.svg',
    ],
  },
  ['blocking'],
);
