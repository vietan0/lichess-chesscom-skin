const meta = document.querySelector('[http-equiv="Content-Security-Policy"]');
const content = meta.getAttribute('content');
const regex = /connect-src/;
const connectSrc = content.match(regex)[0];
console.log(connectSrc);
const moddedSrc = `${connectSrc} ` + `http://images.chesscomfiles.com/chess-themes `;
console.log('moddedSrc', moddedSrc);
const moddedContent = content.replace(connectSrc, moddedSrc);
meta.setAttribute('content', moddedContent);

console.log('Meta tag modified');
browser.runtime.sendMessage('redirect-sound-fx-requests');
console.log('Sent message to background');
