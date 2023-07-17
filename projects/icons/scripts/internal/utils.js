const fs = require('fs');
const path = require('path');
const rmdir = require('rimraf');

exports.removeSvgTags = (content) => {
    const str = content.toString();
    const svgExp = /(<svg\s.*>)|(<\/svg>)|\n/g;
    return str.replace(svgExp, '').trim();
};

exports.removeHtmlAttributes = (str, attrNames) => {
    let result = str;
    attrNames.forEach((attr) => {
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
};

exports.removeDir = (pathString) => {
    if (fs.existsSync(path.join(pathString))) {
        rmdir.sync(path.join(pathString));
        console.log('\x1b[32m', `Folder ${pathString} is removed`);
    }
};

exports.createDir = (pathString) => {
    fs.mkdirSync(pathString);
    console.log('\x1b[32m', `Folder ${pathString} is created`);
};

exports.assetRename = (name) => {
    const dictionary = {
        Ё: 'YO',
        Й: 'I',
        Ц: 'TS',
        У: 'U',
        К: 'K',
        Е: 'E',
        Н: 'N',
        Г: 'G',
        Ш: 'SH',
        Щ: 'SCH',
        З: 'Z',
        Х: 'H',
        Ъ: '',
        ё: 'yo',
        й: 'i',
        ц: 'ts',
        у: 'u',
        к: 'k',
        е: 'e',
        н: 'n',
        г: 'g',
        ш: 'sh',
        щ: 'sch',
        з: 'z',
        х: 'h',
        ъ: '',
        Ф: 'F',
        Ы: 'I',
        В: 'V',
        А: 'a',
        П: 'P',
        Р: 'R',
        О: 'O',
        Л: 'L',
        Д: 'D',
        Ж: 'ZH',
        Э: 'E',
        ф: 'f',
        ы: 'i',
        в: 'v',
        а: 'a',
        п: 'p',
        р: 'r',
        о: 'o',
        л: 'l',
        д: 'd',
        ж: 'zh',
        э: 'e',
        Я: 'Ya',
        Ч: 'CH',
        С: 'S',
        М: 'M',
        И: 'I',
        Т: 'T',
        Ь: '',
        Б: 'B',
        Ю: 'YU',
        я: 'ya',
        ч: 'ch',
        с: 's',
        м: 'm',
        и: 'i',
        т: 't',
        ь: '',
        б: 'b',
        ю: 'yu',
        ' ': '-',
        '_': '-',
    };

    return name
        .split('')
        .map((char) => dictionary[char] !== undefined ? dictionary[char] : char)
        .join('');
};
