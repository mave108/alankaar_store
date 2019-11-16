module.exports = {
    plugins: {
        // 'postcss-import': {}, // css-loader handles @import no need for this plugin in webpack
        'postcss-cssnext': {
            warnForDuplicates: false
        },
    },
}