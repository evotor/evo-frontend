const fs = require('fs');
const {ASSETS_SRC_PATH, DIST_PATH} = require('./config');
const path = require('path');
const {assetRename} = require('./utils');

let assetFilesCounter = 0;

exports.generateAssets = () => {
    const timeStart = Date.now();

    const assetsDistPath = path.join(DIST_PATH, 'assets');

    // Add assets dist
    if (!fs.existsSync(path.join(assetsDistPath))) {
        fs.mkdirSync(path.join(assetsDistPath));
    }

    renameAndCopyAssets(ASSETS_SRC_PATH, assetsDistPath, 0);
    const endTime = Date.now() - timeStart;
    console.log("\x1b[32m", `Converted ${assetFilesCounter} assets in ${endTime} ms.`);
};

function renameAndCopyAssets(srcDir, distDir) {
    const srcDirChildren = fs.readdirSync(srcDir);

    if (!srcDirChildren || !srcDirChildren.length) {
        console.warn(` ${srcDir} is empty`);
        return;
    }

    srcDirChildren.forEach((child) => {
        const childPath = path.join(srcDir, child);
        const stat = fs.statSync(childPath);
        if (stat && stat.isDirectory()) {
            const childDirName = assetRename(child.toLowerCase());
            if (!fs.existsSync(path.join(distDir, childDirName))) {
                fs.mkdirSync(path.join(distDir, childDirName));
            }
            renameAndCopyAssets(childPath, path.join(distDir, childDirName));
        } else if (stat && stat.isFile()) {
            const assetContent = fs.readFileSync(path.join(srcDir, child));
            const assetName = assetRename(child.toLowerCase());
            fs.writeFileSync(path.join(distDir, assetName), assetContent);
            ++assetFilesCounter;
        }
    });
}
