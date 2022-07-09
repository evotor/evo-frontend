const path = require('path');

const PROJECT_ROOT_PATH = path.join(__dirname, '../../');
const MONOCHROME_ICONS_SRC_PATH = path.join(PROJECT_ROOT_PATH, 'src/svg/monochrome-icons');
const ASSETS_SRC_PATH = path.join(PROJECT_ROOT_PATH, 'src/assets');
const DIST_PATH = path.join(PROJECT_ROOT_PATH, 'dist');

module.exports = {
    PROJECT_ROOT_PATH,
    MONOCHROME_ICONS_SRC_PATH,
    ASSETS_SRC_PATH,
    DIST_PATH,
};
