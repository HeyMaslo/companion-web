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
        DTR_ID: '6018462d51bc6f2386497f5b',
        API_KEY: "AIzaSyDQQ2tD2xfigMFsR33Sa3wrUuua_UfJDGI",
        AUTHDOMAIN: "maslo-377f0.firebaseapp.com",
        BASEURL: "https://maslo-377f0.firebaseio.com",
        PROJECT_ID: "maslo-377f0",
        STORAGEBUCKET: "maslo-377f0.appspot.com",
        MESSAGING_SENDER_ID: "778596067777",
        APP_ID: "1:778596067777:web:3256b22df641ab822ba740",
        MEASUREMENT_ID: ""
    }
});