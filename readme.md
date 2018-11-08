# Getting started
/!\ Ne fonctionne qu'avec **1 fichier js et css bundle**. Si vous voulez avoir **plusieurs fichiers js / css en sortie**, il faudra bidouiller la partie **entry** du fichier `webpack/webpack.config.js`


## Install & config
``` js
npm i
```

## Commands
``` js
npm i         // Install dependencies
npm run watch // compile dev mode + watch 
npm run build // compile dev mode
npm run prod  // compile prod mode
```
# Architecture
``` js
webpack/config.js         // Configuration for path and activate module
webpack/loaders.js        // webpack loaders
webpack/plugins.js        // webpack plugins
webpack/webpack.config.js // webpack configuration
```

# Compile

!! **EVERYTHINGS IS CONFIGURABLE** !! See more in `webpack/config.js`
## Development
- JS
  - Babel
- SCSS
  - SCSS => CSS
  - Autoprefix
  - Source-map
## Production
- JS
  - Babel
  - Minify
- SCSS
  - SCSS => CSS
  - Autoprefix
  - Source-map
  - Minify