const config = require('./config.js')
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
  }
};


module.exports = (env, argv) => {
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  webpackConfig.plugins = [
    plugins.ExtractTextPlugin
  ]
  /*———————————————————————————————————*\
      $ MODULES
  \*———————————————————————————————————*/
  webpackConfig.module = {
    rules: [
      loaders.JSLoader,
    ]
  }




  /*———————————————————————————————————*\
      $ DEVELOPMENT
  \*———————————————————————————————————*/
  if (argv.mode === 'development') {
    if (modules.dev.sourceMap) {
      webpackConfig.devtool = 'source-map';
    }
    webpackConfig.optimization = {
      minimize: modules.dev.minifyJs
    }
    /*———————————————————————————————————*\
        $ MODULES
    \*———————————————————————————————————*/
    webpackConfig.module = {
      rules: [
        loaders.CSSLoaderDev
      ]
    }
  }

  /*———————————————————————————————————*\
      $ PRODUCTION
  \*———————————————————————————————————*/
  if (argv.mode === 'production') {
    if (modules.prod.sourceMap) {
      webpackConfig.devtool = 'source-map';
    }
    webpackConfig.optimization = {
      minimize: modules.prod.minifyJs
    }
    /*———————————————————————————————————*\
        $ MODULES
    \*———————————————————————————————————*/
    webpackConfig.module = {
      rules: [
        loaders.CSSLoaderProd
      ]
    }
  }

  // console.log(webpackConfig);
  return webpackConfig
};
