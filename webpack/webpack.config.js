const config = require('./compile.config')
  const paths = config.paths
  const modules = config.modules

const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackConfig = module.exports = {
  /*———————————————————————————————————*\
      $ SRC
  \*———————————————————————————————————*/
  entry: [
    paths.src.js.absolutePath,
    paths.src.css.absolutePath
  ],
  /*———————————————————————————————————*\
      $ DIST
  \*———————————————————————————————————*/
  output: {
    path: paths.dist.js.absoluteFolderPath,
    filename: paths.dist.js.fileName
  },
  /*———————————————————————————————————*\
      $ MODULES
  \*———————————————————————————————————*/
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader
    ]
  },
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: [
    plugins.ExtractTextPlugin,
  ],
};


module.exports = (env, argv) => {
  /*———————————————————————————————————*\
      $ DEVELOPMENT
  \*———————————————————————————————————*/
  if (argv.mode === 'development') {
    webpackConfig.devtool = 'source-map';
  }

  /*———————————————————————————————————*\
      $ PRODUCTION
  \*———————————————————————————————————*/
  if (argv.mode === 'production') {
    //...
  }

  return webpackConfig
};