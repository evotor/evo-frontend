const {generateIconsLibrary} = require("./internal/generate-icons-library");
const {removeDir, createDir} = require("./internal/utils");
const path = require("path");
const {DIST_PATH} = require("./internal/config");
const {generateAssets} = require("./internal/generate-assets");


// Remove dist folder
removeDir(path.join(DIST_PATH));

// Add dist folder
createDir(path.join(DIST_PATH));

// Generate icons
generateIconsLibrary();

// Generate assets
generateAssets();
