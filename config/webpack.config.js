const path = require('path');

let config = {
  // SOURCES
  src: {
    js:  {
      folderPath: 'resources/assets/js',
      fileName: 'main.js',
    },
    css: {
      folderPath: 'resources/assets/sass',
      fileName: 'main.scss',
    }
  },
  // DIST
  dist: {
    js:  {
      folderPath: 'dist/js',
      fileName: 'bundle.js',
    },
    css: {
      folderPath: 'dist/css',
      fileName: 'bundle.css',
    }
  }
}

const modules = {
  // Development mode
  dev: {
    sourceMap: true,
  },
  // Production mode
  prod: {
    sourceMap: true,
  }
}

config.src.js.fullPath   = path.resolve(__dirname, config.src.js.folderPath)   + '/' + config.src.js.fileName
config.src.css.fullPath  = path.resolve(__dirname, config.src.css.folderPath)  + '/' + config.src.css.fileName
config.dist.js.fullPath  = path.resolve(__dirname, config.dist.js.folderPath)  + '/' + config.dist.js.fileName
config.dist.css.fullPath = path.resolve(__dirname, config.dist.css.folderPath) + '/' + config.dist.css.fileName

console.log(config);
console.log(modules);


module.exports = {
  entry: config.src.js.fullPath,
  output: {
    path: config.dist.js.folderPath,
    filename: config.dist.js.fileName
  }
};


console.log(module.exports);