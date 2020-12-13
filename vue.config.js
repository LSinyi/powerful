const proxy = require('./proxy');

module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
    publicPath: './',
    outputDir: '../web/about_sinyi',
    productionSourceMap: false,
    devServer: {
        port: 4000,
        proxy,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    css: {
        extract: false
    }
};
