const fs = require("fs");
const path = require("path");
const {MONOCHROME_ICONS_SRC_PATH, DIST_PATH} = require("./config");
const {
    removeDir,
    createDir,
    checkCyrillicChars,
    getCamelCaseString,
    removeSvgTags,
    removeHtmlAttributes
} = require("./utils.js");

const fileSuffixToClean = /(_24px)?\.svg/;
const attrsToClean = ["fill"];
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
    const uniqueIconNames = [];
    const srcDirList = fs.readdirSync(MONOCHROME_ICONS_SRC_PATH);

    if (!srcDirList || !srcDirList.length) {
        console.warn("Source folder is empty");
        return;
    }

    // Library file content
    let categoryImportsStr = "";
    const categoriesList = [];

    // Library directory
    const libraryDirectoryName = "lib";
    const libraryPath = path.join(DIST_PATH, libraryDirectoryName);
    if (!fs.existsSync(libraryPath)) {
        fs.mkdirSync(libraryPath);
    }

    // Types directory
    const typesDirectoryName = "types";
    const typesPath = path.join(DIST_PATH, typesDirectoryName);
    if (!fs.existsSync(typesPath)) {
        fs.mkdirSync(typesPath);
    }

    srcDirList.forEach((childDir) => {
        checkCyrillicChars(childDir);

        const stat = fs.statSync(path.join(MONOCHROME_ICONS_SRC_PATH, childDir));

        if (stat.isDirectory()) {
            const icons = fs.readdirSync(path.join(MONOCHROME_ICONS_SRC_PATH, childDir));

            // If directory empty
            if (!icons && !icons.length) {
                return;
            }

            // Camel-case 'someCategoryName'
            const categoryVarName = getCamelCaseString(childDir.toLowerCase().replace(/-|_|\s/ig, " ") + "Icons");

            // Kebab-case 'some-category-name'
            const categoryPath = childDir.toLowerCase().replace(/_|\s/ig, "-");

            const xmlOptions = {
                ignoreAttributes: false,
                preserveOrder: true
            };

            // Add category directory
            if (!fs.existsSync(path.join(libraryPath, categoryPath))) {
                fs.mkdirSync(path.join(libraryPath, categoryPath));
            }

            // Add to Library
            categoryImportsStr += `import { ${categoryVarName} } from './${categoryPath}';\n`;
            categoriesList.push(categoryVarName);

            // Category file content
            let iconsExport = "";
            let categoryContent = `export const ${categoryVarName} = {\n  name: '${categoryPath}',\n  shapes: {\n`;
            icons.forEach((icon, i) => {
                if (/^\..+/.test(icon)) {
                    return;
                }

                checkCyrillicChars(icon);

                const rawIconContent = fs.readFileSync(path.join(MONOCHROME_ICONS_SRC_PATH, childDir, icon));

                // Camel-case 'iconName'
                const iconVarName = getCamelCaseString("icon " + icon.toLowerCase().replace(fileSuffixToClean, "").replace(/-|_|\s/, " "));

                // Kebab-case 'icon-name'
                const iconName = icon.toLowerCase().replace(fileSuffixToClean, "").replace(/_|\s/ig, "-");

                let svgContent = removeSvgTags(rawIconContent);
                svgContent = removeHtmlAttributes(svgContent, attrsToClean);

                iconsExport += `export const ${iconVarName} = '${svgContent}';` + (i !== (icons.length - 1) ? "\n" : "");
                categoryContent += `    '${iconName}': ${iconVarName},\n`;

                // Store icon name
                uniqueIconNames.push(iconName);

                ++iconsCount;
            });
            categoryContent += "  }\n};\n";

            // Write to index.ts
            fs.writeFileSync(path.join(libraryPath, categoryPath, "index.ts"), `${iconsExport}\n${categoryContent}`);
        }

    });

    // Write to root index.ts
    fs.writeFileSync(path.join(DIST_PATH, "index.ts"), `export * from './public-api';`);

    // Write ng-packagr entry point
    fs.writeFileSync(path.join(libraryPath, "package.json"), packageJsonContent);
    fs.writeFileSync(path.join(libraryPath, "index.ts"), `${categoryImportsStr}
export const icons = [${categoriesList.join(",")}];
export {${categoriesList.join(",")}};    
    `);

    // Write icon shapes type
    fs.writeFileSync(path.join(typesPath, "evo-icon-shape.ts"), `export type EvoIconShape = '${uniqueIconNames.join("' | '")}';`);
    fs.writeFileSync(path.join(typesPath, "index.ts"), `export {EvoIconShape} from './evo-icon-shape';`);


    // Write to public-api.ts
    fs.writeFileSync(path.join(DIST_PATH, "public-api.ts"), `
export * from './${libraryDirectoryName}/';
export * from './${typesDirectoryName}/';
`);

    // Write ng-packagr entry point
    fs.writeFileSync(path.join(DIST_PATH, "package.json"), packageJsonContent);

    const endTime = Date.now() - timeStart;
    console.log("\x1b[32m", `Converted ${iconsCount} icons in ${endTime} ms.`);
};
