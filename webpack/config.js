const path = require('path');

/*———————————————————————————————————*\
    $ PATHS
\*———————————————————————————————————*/
let paths = {
  // SOURCES
  srcPath: 'resources/assets/',
  src: {
    js: {
      folderName: 'js',
      fileName: 'main.js',
    },
    css: {
      folderName: 'sass',
      fileName: 'main.scss',
    }
  },
  // DIST
  distPath: 'dist/',
  dist: {
    js: {
      folderName: 'js',
      fileName: '[name].js',
    },
    css: {
      folderName: 'css',
      fileName: '[name].css',
    }
  }
}

/*———————————————————————————————————*\
    $ MODULES
\*———————————————————————————————————*/
const modules = {
  // Development
  dev: {
    sourceMap: true,
  },
  // Production
  prod: {
    sourceMap: false,
  }
}


/*———————————————————————————————————*\
    $ Don't touch (path manipulation)
\*———————————————————————————————————*/
paths.src.js.fullPath   = paths.srcPath + paths.src.js.folderName    + '/' + paths.src.js.fileName
paths.src.css.fullPath  = paths.srcPath + paths.src.css.folderName   + '/' + paths.src.css.fileName
paths.dist.js.fullPath  = paths.distPath + paths.dist.js.folderName  + '/' + paths.dist.js.fileName
paths.dist.css.fullPath = paths.distPath + paths.dist.css.folderName + '/' + paths.dist.css.fileName

paths.src.js.absolutePath   = path.resolve(__dirname, '../' + paths.src.js.fullPath  )
paths.src.css.absolutePath  = path.resolve(__dirname, '../' + paths.src.css.fullPath )
paths.dist.js.absolutePath  = path.resolve(__dirname, '../' + paths.dist.js.fullPath )
paths.dist.css.absolutePath = path.resolve(__dirname, '../' + paths.dist.css.fullPath)

paths.src.js.absoluteFolderPath   = path.resolve(__dirname, '../' + paths.srcPath  + paths.src.js.folderName  )
paths.src.css.absoluteFolderPath  = path.resolve(__dirname, '../' + paths.srcPath  + paths.src.css.folderName )
paths.dist.js.absoluteFolderPath  = path.resolve(__dirname, '../' + paths.distPath + paths.dist.js.folderName )
paths.dist.css.absoluteFolderPath = path.resolve(__dirname, '../' + paths.distPath + paths.dist.css.folderName)



/*———————————————————————————————————*\
    $ EXPORTS
\*———————————————————————————————————*/
module.exports = {
  paths: paths,
  modules: modules
}