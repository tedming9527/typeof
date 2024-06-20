const fs = require('fs-extra');
const path = require('path');
const {execSync}  = require('child_process');

const tempDir = path.resolve(__dirname, 'temp-publish');
if (fs.existsSync(tempDir)) {
  fs.rmdirSync(tempDir);
}
fs.mkdirSync(tempDir);

fs.copySync(path.resolve(__dirname, 'dist'), tempDir);
fs.copySync(path.resolve(__dirname, 'src'), tempDir);
fs.copySync(path.resolve(__dirname, 'CHANGELOG.md'), tempDir);

require('./prepare-clean-package.json.cjs');

process.chdir(tempDir);

execSync('npm publish', { stdio: 'inherit'});

process.chdir(__dirname);
// fs.removeSync(tempDir);


