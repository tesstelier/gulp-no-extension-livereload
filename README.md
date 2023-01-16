# gulp-no-extension-livereload
A gulp task for LiveReload that works out of the box without needing to install any LiveReload browser extensions.

# Usage

1. Download this project to your local workspace, e.g. to `path/to/gulp-no-extension-livereload`
1. Run `npm install` for this project
1. Add the following to your project's `gulpfile.js`:

```javascript
const gulpNoExtensionLivereload = require('path/to/gulp-no-extension-livereload');

function run() {
    gulpNoExtensionLivereload({
        rootDir: 'your-dir/',
        watchGlob: 'your-dir/**/*'
    });
}

exports.default = run;
```

# Options

* `rootDir` (required): directory from which localhost serves index.html, e.g. `"static/"`
* `watchGlob` (required): files to watch for changes to trigger LiveReload, e.g. `"static/**/*"`
* `livereloadPort` (optional): port that LiveReload listens on, defaults to `35729`
* `localhostPort` (optional): port for local server, defaults to `8080`

# References
* https://rusingh.com/livereloading-in-gulp-without-a-browser-extension
