const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };
// doesn't seem to do anything
//require.extensions['.png'] = () => { return; }; require.extensions['.jpg'] = () => { return; };

module.exports = {


    // https://stackoverflow.com/a/42815934/3538313

    /*
    entry: {
        main: ['.src/webpack_stub.js', '.src/scss/main.scss']
    },*/
    //entry: path.resolve(__dirname, 'src/js/main.js'),  // not needed, not using modules for JS

    /*
    TODO fix url(...) breaking main.scss compilation
    Why does Webpack / some loader think it needs to to something with image URLs?
    How does it even know what they are?
    https://developer.mozilla.org/en-US/docs/Web/CSS/url

    https://github.com/postcss/postcss-loader/issues/160#issuecomment-271082726

    https://github.com/webpack-contrib/sass-loader#problems-with-url
    https://github.com/webpack-contrib/url-loader
    https://github.com/webpack-contrib/file-loader
    */
    entry: path.resolve(__dirname, 'src/scss/main.scss'),

    // https://stackoverflow.com/q/29760894/3538313
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,  // put styles into an actual file
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader",  // compiles Sass to CSS, using Node Sass by default
                ]
            },
            // TODO use url-loader or file-loader to handle image files that scss -> css pipeline is finding via `url(...)` values
            //{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: { loader: 'url-loader?limit=100000' } }
        ]
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
