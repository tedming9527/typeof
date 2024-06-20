const fs = require('fs');
const path = require('path');

const ignoreFields = ['scripts', 'devDependencies', 'config'];


let packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));

packageJson.main = packageJson.main.replace('./dist/', './');
packageJson.module = packageJson.module.replace('./dist/', './');
packageJson.types = packageJson.types.replace('./dist/', './');
packageJson['exports']['.']['import']= packageJson['exports']['.']['import'].replace('./dist/', './');
packageJson['exports']['.']['require']= packageJson['exports']['.']['require'].replace('./dist/', './');

const tempDir = path.resolve(__dirname, 'temp-publish');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

ignoreFields.forEach(field => {
  delete packageJson[field];
})

fs.writeFileSync(path.join(__dirname, 'temp-publish', 'package.json'), JSON.stringify(packageJson, null, 2));
