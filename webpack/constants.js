const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build/');
const HTML_DIR = path.join(__dirname, '..', 'public/');
const SRC_DIR = path.join(__dirname, '..', 'src/');

module.exports = {
  BUILD_DIR,
  HTML_DIR,
  SRC_DIR
};
