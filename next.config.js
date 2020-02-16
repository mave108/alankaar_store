const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withImages(withCSS(withSass({
    webpack(config, { dev }) {
        if (config.mode === 'production') {
            if (Array.isArray(config.optimization.minimizer)) {
                config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
            }
        }
        // config.module.rules.push({
        //     test: /\.svg$/,
        //     use: ['@svgr/webpack'],
        // });
        config.module.rules.push({
            test: /\.(svg|png|jpg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        })
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        });
        return config;
    },
})));
