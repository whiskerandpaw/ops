/** AUTOMATING THE STAGING BRANCH TO FOLLOW THE PRODUCTION BRANCH */
const targetPath = '/Users/dev/Documents/w+p/ops/scripts/test/staging';
const listenPath = '/Users/dev/Documents/w+p/ops/scripts/test/production/server-dist'
const fs = require('fs')
var process = require("child_process");
fs.watch(listenPath, {
  encoding: 'buffer'
}, (eventType, filename) => {
  console.log(`Change detected, event type: ${eventType} and file name: ${filename}`);
  if (eventType === 'rename') {
    console.log('Change occured, exec git pull');
      runtime();
  }
});
function runtime() {
  console.log(`Running process`);
  process.exec("git pull origin production", {
    cwd: targetPath
  }, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error pulling origin produciton: ${error}`);
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
  });
}