import browser, { DeclarativeNetRequest } from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
  const soundFilenameMap = {
    Move: 'move-self',
    Capture: 'capture',
    Check: 'move-check',
    Checkmate: 'move-check',
    GenericNotify: 'game-start',
    LowTime: 'tenseconds',
    Victory: 'game-end',
    Defeat: 'game-end',
  };

  const rules = Object.entries(soundFilenameMap).map(
    ([key, value], i) =>
      ({
        id: i + 1,
        priority: 1,
        condition: {
          urlFilter: `||lichess1.org/assets/*/${key}.*.mp3`,
        },
        action: {
          type: 'redirect',
          redirect: {
            extensionPath: `/assets/sound/${value}.mp3`,
          },
        },
      }) as DeclarativeNetRequest.Rule,
  );

  browser.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map((_, i) => i + 1),
    addRules: rules,
  });
});
