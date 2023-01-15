const connect = require('connect');
const connectLivereload = require('connect-livereload');
const gulpLivereload = require('gulp-livereload');
const { watch } = require('gulp');
const serveStatic = require('serve-static');

const defaultOptions = {
    livereloadPort: 35729,
    localhostPort: 8080
};

function initServer(config) {
    connect()
        .use(connectLivereload({ port: config.livereloadPort }))
        .use(serveStatic(config.rootDir))
        .listen(config.localhostPort);
}

function livereload(config) {
    gulpLivereload.listen({ port: config.livereloadPort });

    const watcher = watch(config.watchGlob);
    watcher.on('change', function onChange(path) {
        gulpLivereload.changed(path); // Simply calling gulpLivereload() doesn't work
    });
    /* Alternatively (con: reloads whole page regardless of which file changed):
    watch(config.watchGlob, function onChange(cb) {
        gulpLivereload.reload(); // Simply calling gulpLivereload() doesn't work
        cb();
    });
    */
}

function run(options) {
    const config = Object.assign(
        Object.assign({}, defaultOptions),
        options
    );
    initServer(config);
    livereload(config);
}

module.exports = run;
