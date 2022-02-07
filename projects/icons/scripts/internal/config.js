const path = require('path');

const PROJECT_ROOT_PATH = path.join(__dirname, '../../');
const SRC_PATH = path.join(PROJECT_ROOT_PATH, 'src/svg/monochrome-icons');
const DIST_PATH = path.join(PROJECT_ROOT_PATH, 'generated');

module.exports = {
    PROJECT_ROOT_PATH,
    SRC_PATH,
    DIST_PATH,
};
