const path = require('path');

/*———————————————————————————————————*\
    $ PATHS
\*———————————————————————————————————*/
let paths = {
  /*———————————————*\
      $ SOURCES
  \*———————————————*/
  srcPath: 'resources/assets/',
  src: {
    js: {
      folderName: 'js',    // resources/assets/js
      fileName: 'main.js', // resources/assets/js/main.js
    },
    css: {
      folderName: 'sass',    // resources/assets/sass
      fileName: 'main.scss', // resources/assets/sass/main.scss
    }
  },
  /*—————————————*\
      $ DIST
  \*—————————————*/
  distPath: 'dist/',
  dist: {
    js: {
      folderName: 'js/foo/faa', // dist/js/foo/faa
      fileName: '[name].js',    // dist/js/foo/faa/[name].js
    },
    css: {
      folderName: 'css',      // dist/css
      fileName: '[name].css', // dist/css/[name].css
    }
  }
}

/*———————————————————————————————————*\
    $ MODULES
\*———————————————————————————————————*/
const modules = {
  // Development
  dev: {
    sourceMap:    true,
    minifyJs:     false,
    minifyCss:    false,
    autoprefixer: true
  },
  // Production
  prod: {
    sourceMap:    false,
    minifyJs:     true,
    minifyCss:    true,
    autoprefixer: true
  },
  autoprefixBrowser: {
    browsers: ['last 2 versions', '> 5%']
  }
}


/*———————————————————————————————————*\
    $ Don't touch (path manipulation)
\*———————————————————————————————————*/
if (paths.dist.js.folderName === '') {
  paths.dist.css.folderName = paths.distPath + paths.dist.css.folderName 
} else {
  let moveBack = ''
  jsFolderDepth = paths.dist.js.folderName.split("/").length -1;
  
  for(i = 0; i < jsFolderDepth; i++) {
    moveBack = moveBack + '../'
  }

  paths.dist.css.folderName = moveBack + paths.dist.css.folderName 
}

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
