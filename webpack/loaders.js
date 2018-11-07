const config = require('./compile.config')
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
const CSSLoader = {
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
            require('autoprefixer')({ browsers: ['last 2 versions', '> 5%'] }),
            require('cssnano')(     { preset: 'default' }),
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






/*———————————————————————————————————*\
    $ EXPORTS
\*———————————————————————————————————*/
module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader
};