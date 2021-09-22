// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    // parser: require('postcss-scss'),
    // plugins: [
    //         require("postcss-import"),
    //         require("postcss-url"),
    //         require("tailwindcss"),
    //         require("autoprefixer"),
    //     ]
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "tailwindcss": "./tailwind.js",
        // "tailwindcss": "./tailwind.config.js",
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {}
    }
};