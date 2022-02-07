const fs = require('fs');
const path = require('path');
const {SRC_PATH, DIST_PATH} = require('./config');
const {
    removePropRec,
    removeDir,
    createDir,
    checkCyrillicChars,
    getCamelCaseString,
    removeSvgTags,
    removeSvgMask,
    removeHtmlAttributes
} = require("./utils.js");

const { XMLParser, XMLBuilder} = require("fast-xml-parser");

const fileSuffixToClean = /(_24px)?\.svg/;
const attrsToClean = ['fill'];
const packageJsonContent = `{
    "ngPackage": {
        "lib": {
            "entryFile": "index.ts"
        }
    }
}`;

exports.generateIconsLibrary = () => {
    const timeStart = Date.now();
    let iconsCount = 0;

    // Object with unique icons names
    const uniqueIconNames = {};
    const srcDirList = fs.readdirSync(SRC_PATH);

    if (!srcDirList || !srcDirList.length) {
        console.warn('Source folder is empty');
        return;
    }

    // Remove dist folder
    removeDir(path.join(DIST_PATH));

    // Add dist folder
    createDir(path.join(DIST_PATH));

    // Library file content
    let libraryContents = '';
    const categoriesList = [];

    srcDirList.forEach((childDir) => {
        checkCyrillicChars(childDir);

        const stat = fs.statSync(path.join(SRC_PATH, childDir));

        if (stat.isDirectory()) {
            const icons = fs.readdirSync(path.join(SRC_PATH, childDir));

            // If directory empty
            if (!icons && !icons.length) {
                return;
            }

            // Camel-case 'someCategoryName'
            const categoryVarName = getCamelCaseString(childDir.toLowerCase().replace(/-|_|\s/, ' ') + 'Icons');

            // Kebab-case 'some-category-name'
            const categoryName = childDir.toLowerCase().replace(/_|\s/, '-');

            const xmlOptions = {
                ignoreAttributes: false,
                preserveOrder: true
            };
            const parser = new XMLParser({
                ...xmlOptions,
                unpairedTags: [
                    'circle', 'ellipse', 'image', 'line', 'mesh', 'path', 'polygon', 'polyline', 'rect', 'text',
                ]
            });
            const builder = new XMLBuilder({
                ...xmlOptions,
                suppressEmptyNode: true
            });

            // Add category directory
            if (!fs.existsSync(path.join(DIST_PATH, categoryName))) {
                fs.mkdirSync(path.join(DIST_PATH, categoryName));
            }

            // Add to Library
            libraryContents += `import { ${categoryVarName} } from './${categoryName}';\n`;
            categoriesList.push(categoryVarName);

            // Category file content
            let iconsExport = '';
            let categoryContent = `export const ${categoryVarName} = {\n  name: '${categoryName}',\n  shapes: {\n`;
            icons.forEach((icon, i) => {
                if (/^\..+/.test(icon)) {
                    return;
                }

                checkCyrillicChars(icon);

                const rawIconContent = fs.readFileSync(path.join(SRC_PATH, childDir, icon));

                // Camel-case 'iconName'
                const iconVarName = getCamelCaseString('icon ' + icon.toLowerCase().replace(fileSuffixToClean, '').replace(/-|_|\s/, ' '));

                // Kebab-case 'icon-name'
                const iconName = categoryName + '/' + icon.toLowerCase().replace(fileSuffixToClean, '').replace(/_|\s/, '-');

                // Throw Error if icon has same name
                if (uniqueIconNames[iconName]) {
                    throw new Error(`Icon with name ${iconName} in category ${categoryName} already exists in ${uniqueIconNames[iconName]}, icon name must be unique!`);
                }

                let svgContent = removeSvgTags(rawIconContent);
                svgContent = removeHtmlAttributes(svgContent, attrsToClean);

                // const iconObject = parser.parse(rawIconContent);
                // let cleanedIconObject = removePropRec(iconObject, '@_fill');
                // console.log();
                // console.log(iconObject);
                // console.log();
                // console.log(cleanedIconObject);
                // console.log();
                // console.log(builder.build(cleanedIconObject));
                // console.log();
                //
                // // check parser and builder work correctly
                // if (rawIconContent.toString().replace(/\s*\n\r?\s*/gi, '') !== builder.build(iconObject)) {
                //     console.error(`❌ xml-fast-parser needs correction: parsed version of ${iconName} doesn't match the original`);
                //     throw new Error();
                // }
                // let svgContent = rawIconContent;
                // throw new Error(`${iconName}`);

                iconsExport += `export const ${iconVarName} = '${svgContent}';` + (i !== (icons.length - 1) ? '\n' : '');
                categoryContent += `    '${iconName}': ${iconVarName},\n`;

                // Store icon name
                uniqueIconNames[iconName] = categoryName;

                ++iconsCount;
            });
            categoryContent += '  }\n};\n';

            // Write to category.ts
            fs.writeFileSync(path.join(DIST_PATH, categoryName, 'index.ts'), `${iconsExport}\n${categoryContent}`);

            // Write ng-packagr entry point
            fs.writeFileSync(path.join(DIST_PATH, categoryName, 'package.json'), packageJsonContent);

        }

        // Write public-api.ts
        fs.writeFileSync(path.join(DIST_PATH, 'public-api.ts'), `export * from './index';`);
    });

    // Write to icons.ts
    libraryContents += `\nexport const icons = [${categoriesList.join(',')}];\n`;
    fs.writeFileSync(path.join(DIST_PATH, 'index.ts'), libraryContents);

    // Write ng-packagr entry point
    fs.writeFileSync(path.join(DIST_PATH, 'package.json'), packageJsonContent);

    const endTime = Date.now() - timeStart;
    console.log('\x1b[32m', `Converted ${iconsCount} icons in ${endTime} ms.`);
};
