const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };
require.extensions['.png'] = () => { return; }; require.extensions['.jpg'] = () => { return; };

module.exports = {


    // https://stackoverflow.com/a/42815934/3538313

    /*
    entry: {
        main: ['.src/webpack_stub.js', '.src/scss/main.scss']
    },*/
    //entry: path.resolve(__dirname, 'src/js/main.js'),  // not needed, not using modules for JS

    // TODO fix url(...) breaking main.scss compilation
    // https://github.com/webpack-contrib/sass-loader#problems-with-url
    entry: path.resolve(__dirname, 'src/scss/main.scss'),

    // https://stackoverflow.com/q/29760894/3538313
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,  // put styles into an actual file
                "css-loader", // translates CSS into CommonJS
                "sass-loader",  // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
};
