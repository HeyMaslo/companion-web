const withSass = require('@zeit/next-sass')

module.exports = withSass({ dynamicAssetPrefix = false, ...nextConfig } = {
    webpack(config, options) {
        const { isServer } = options;
        config.module.rules.push({
            test: /\.(mp3)$/,
            exclude: nextConfig.exclude,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: `${isServer ? "../" : ""}_next/static/audio`,
                        outputPath: `${isServer ? "../" : ""}static/audio`,
                        esModule: nextConfig.esModule || false
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.(png|jpg|gif|webp|svg|ico|svgb)$/,
            exclude: config.exclude,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: `${isServer ? "../" : ""}_next/static/img`,
                        outputPath: `${isServer ? "../" : ""}static/img`,
                        esModule: nextConfig.esModule || false
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.glsl$/,
            use: [
                {
                    loader: 'raw-loader',
                    options: {
                        esModule: nextConfig.esModule || false
                    }
                }
            ]
        });

        return config;
    },
    env: {
        STORY_MAPR_API_URL: 'https://beta.storymapr.com',
        DTR_ID: '5fd2da87c860c2582a1e483c',
    }
});