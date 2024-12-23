// PostCSS configruation
module.exports = (cfg) => {

    const devMode = (cfg.env === 'development');

    return {

        map: devMode ? 'inline' : null,
        plugins: [
            require('postcss-import')(),
            require('autoprefixer')(),
            devMode ? null : require('cssnano')()
        ]

    };

};