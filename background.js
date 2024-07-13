console.log('background script say heyo');

browser.runtime.onMessage.addListener((message) => {
  if (message === 'redirect-sound-fx-requests') {
    browser.webRequest.onBeforeRequest.addListener(
      async (requestDetails) => {
        if (requestDetails.url.includes('Move')) {
          return {
            redirectUrl: 'http://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-self.mp3',
          };
        }

        if (requestDetails.url.includes('Capture')) {
          return {
            redirectUrl: 'http://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/capture.mp3',
          };
        }

        if (requestDetails.url.includes('Check')) {
          return {
            redirectUrl: 'http://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-check.mp3',
          };
        }

        if (requestDetails.url.includes('GenericNotify')) {
          return {
            redirectUrl: 'http://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/notify.mp3',
          };
        }

        if (requestDetails.url.includes('LowTime')) {
          return {
            redirectUrl: 'http://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/tenseconds.mp3',
          };
        }
        // 'Defeat'
      },
      {
        urls: [
          '*://lichess1.org/assets/______1/sound/standard/*.mp3',
        ],
      },
      ['blocking'],
    );

    console.log('Redirect listeners added');
  }
});
