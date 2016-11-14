'use strict';

const readline = require('readline');
const konamiKeys = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let konamiIndex = 0;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    return process.exit();
  }

  if (key.name === konamiKeys[konamiIndex++]) {
    if (konamiIndex === konamiKeys.length) {
      console.log('UNLOCKED');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

console.log('Press any key ... ');
