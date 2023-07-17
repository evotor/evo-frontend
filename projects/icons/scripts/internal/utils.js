const fs = require("fs");
const path = require("path");
const rmdir = require("rimraf");

exports.removeSvgTags = (content) => {
    const str = content.toString();
    const svgExp = /(<svg\s.*>)|(<\/svg>)|\n/g;
    return str.replace(svgExp, '').trim();
};

exports.removeHtmlAttributes = (str, attrNames) => {
    let result = str;
    attrNames.forEach(attr => {
        const exp = new RegExp(`${attr}="[^\"]*"\\s?`, 'gm');
        result = result.replace(exp, '');
    });
    return result;
};

exports.getCamelCaseString = (str) => {
    return str
        .replace(/[\s-_]+/, ' ')
        .replace(/^\w|[A-Z]|\b\w/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase())
        .replace(/\s+/g, '');
};

exports.checkCyrillicChars = (str) => {
    if (/[а-яА-ЯЁё]/.test(str)) {
        throw new Error(`❌ String "${str}" contains wrong characters!`);
    }
}

exports.removeDir = (pathString) => {
    if (fs.existsSync(path.join(pathString))) {
        rmdir.sync(path.join(pathString));
        console.log('\x1b[32m', `Folder ${pathString} is removed`);
    }
}

exports.createDir = (pathString) => {
    fs.mkdirSync(pathString);
    console.log('\x1b[32m', `Folder ${pathString} is created`);
}

exports.removeSvgMask = (content) => {
    // Regexing
    const shapeRegex = /<.*id="path-1".*>/
    const defsRegex = /<defs((.|\n)*)<\/defs>/
    const gRegex = /<g((.|\n)*)<\/g>\n/
    if (!content.match(shapeRegex)) {
        return content;
    }
    const path = content.match(shapeRegex)[0]
    const defs = content.match(defsRegex)[0]
    const g = content.match(gRegex)[0]

    let result = content;

    // Removing unwanted content
    result = result.replace(g, '');
    result = result.replace(defs, path);

    return result;
}

function removePropRec(value, propName) {
    if (Array.isArray(value)) {
        return value.map((v) => removePropRec(v, propName));
    }
    if (value !== null && value !== undefined && typeof value === 'object') {
        return Object.keys(value).reduce((acc, key) => {
            if (key === propName) {
                return acc;
            }
            acc[key] = removePropRec(value[key], propName);
            return acc;
        }, {});
    }
    return value;
}

exports.removePropRec = removePropRec;
