const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// hack to get loaders to ignore these extensions?
//require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };
// doesn't seem to do anything
//require.extensions['.png'] = () => { return; }; require.extensions['.jpg'] = () => { return; };

module.exports = {

    /*
    SASS -> CSS pipeline notes.

    Need to handle calls to `url` (https://developer.mozilla.org/en-US/docs/Web/CSS/url) function in CSS that reference local files,
    loaders want to know what to do with those file dependencies.
    scss -> css pipeline seems to be finding image files via `url(...)` values in CSS and treating them like an import statement.
    This is probably what we want, so we can decide what to do about those files that will be needed in our `dist`.
    https://github.com/webpack-contrib/sass-loader#problems-with-url
    https://github.com/postcss/postcss-loader/issues/160#issuecomment-271082726

    Options:
    - Encode image as Data URI:
        https://github.com/webpack-contrib/url-loader
    - Copy file to output directory:
        https://github.com/webpack-contrib/file-loader
    - Disable url handling:
          { loader: 'css-loader', options: { url: false } } // disable webpack url() handling

    Start with file-loader for now, url-loader can use file-loader as a fallback for files that exceed its byte limit anyhow
    https://github.com/webpack-contrib/url-loader#limit
    https://github.com/webpack-contrib/url-loader#fallback
    > If the file is greater than the limit,
    > file-loader is used by default and all query parameters are passed to it.
    > Using an alternative to file-loader is enabled via the fallback option.

    */
    entry: path.resolve(__dirname, 'src/scss/main.scss'),
    /*
    Will need multiple entry points for processing JS, even just for copying files as-is?
    Use index.html as entry to find both JS and CSS? Don't really want / need to import CSS to JS entry point.
    entry: {
        main: ['src/main.js', 'src/scss/main.scss']
    },*/
    //entry: path.resolve(__dirname, 'src/js/main.js'),  // not needed, not using modules for JS

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

            /*
            test: /\.(png|jpeg|ttf|...)$/,
            use: [
             { loader: 'url-loader', options: { limit: 8192 } }
             // limit => file.size =< 8192 bytes ? DataURI : File
            ]
            */
            // currently spews images into dist/ with mangled names. Need to output to images directory and preserve filenames
            {
                test: /\.(png|jpg|jpeg|svg)$/,  // whatever image formats are being used
                use: [
                    {
                        loader: 'file-loader',
                        //options: {},
                    },
                ],
            },
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
