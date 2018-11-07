const config = require('./compile.config');
const paths = config.paths

const _ExtractTextPlugin = require('extract-text-webpack-plugin');

/*———————————————————————————————————*\
    $ SCSS (ExtractTextPlugin)
\*———————————————————————————————————*/
const ExtractTextPlugin = new _ExtractTextPlugin({
  filename: '../' + paths.dist.css.folderName + '/' + paths.dist.css.fileName
});

module.exports = {
  ExtractTextPlugin: ExtractTextPlugin
};