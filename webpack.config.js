const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {

    entry: path.resolve(__dirname, 'src/scss/main.scss'),
    /*
    Will need multiple entry points for processing JS, even just for copying files as-is?
    Use index.html as entry to find both JS and CSS? Don't really want / need to import CSS to JS entry point.
    Right now main.js outputs with just Webpack boilerplate and a reference to the main.scss file.
    Webpack isn't really meant for building styles in parallel to JS modules, it supports requiring styles for particular components.
    So this project is not a great example of a case when Webpack is useful.

    entry: {
        main: ['src/main.js', 'src/scss/main.scss']
    },*/
    //entry: path.resolve(__dirname, 'src/js/main.js'),  // not needed, not using modules for JS

    output: {
        path: distPath,
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
            // currently spews images into dist/
            // TODO output to images directory
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
        }),
        // clean before emitting files into dist/
        // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
        new CleanWebpackPlugin([distPath], {beforeEmit: true})
    ]
};

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
