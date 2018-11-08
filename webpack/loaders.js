const config = require('./config.js')
  const modules = config.modules

const plugins = require('./plugins');

/*———————————————————————————————————*\
    $ JS
\*———————————————————————————————————*/
const JSLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};


/*———————————————————————————————————*\
    $ SCSS
\*———————————————————————————————————*/
// DEV
const CSSLoaderDev = {
  test: /\.(css|scss)$/,
  use: plugins.ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: modules.dev.sourceMap,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: modules.dev.sourceMap,
          ident: 'postcss',
          plugins: (loader) => [
            (modules.dev.minifyCss) 
              ? require('cssnano')()
              : require('postcss-import'), // postcss-import for fix empty else     

            (modules.dev.autoprefixer)
              ? require('autoprefixer')(modules.autoprefixBrowser)
              : require('postcss-import'), // postcss-import for fix empty else            
          ],
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: modules.dev.sourceMap,
        }
      }
    ]
  })
};

// PROD
const CSSLoaderProd = {
  test: /\.(css|scss)$/,
  use: plugins.ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: modules.prod.sourceMap,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: modules.prod.sourceMap,
          ident: 'postcss',
          plugins: (loader) => [
            (modules.prod.minifyCss) 
              ? require('cssnano')()
              : require('postcss-import'), // postcss-import for fix empty else     

            (modules.prod.autoprefixer)
              ? require('autoprefixer')(modules.autoprefixBrowser)
              : require('postcss-import'), // postcss-import for fix empty else            
          ],
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: modules.prod.sourceMap,
        }
      }
    ]
  })
};






/*———————————————————————————————————*\
    $ EXPORTS
\*———————————————————————————————————*/
module.exports = {
  JSLoader: JSLoader,
  CSSLoaderDev: CSSLoaderDev,
  CSSLoaderProd: CSSLoaderProd
};