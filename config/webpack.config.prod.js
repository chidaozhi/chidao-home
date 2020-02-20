const path = require('path');
const paths = require('./paths.js');
const polyfill = require('babel-polyfill');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = paths.servedPath;

module.exports = {
    entry:[
        paths.appIndexJs
    ],
    output:{
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: publicPath,
    },
    resolve:{
        modules:['node_modules',paths.appNodeModules,path.join(__dirname, "src")],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],

    },
    module:{
        rules:[
            {

                oneOf: [

                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'media/[name].[hash:8].[ext]'
                        },
                    },

                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: paths.appSrc,
                        // exclude:paths.appImportLayer,
                        loader: require.resolve('babel-loader'),
                        // options: {
                        // babelrc: true,
                        // cacheDirectory: true,
                        // },

                    },

                    {
                        test: /\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {

                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9',
                                            ],
                                            flexbox: 'no-2009',
                                        }),
                                    ],
                                },
                            },
                        ],
                    },

                    {

                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: './pubilc/index.html',
            filename:'index.html',
            chunks:['main']
        })
    ],
    devServer:{
        hot:true,
        inline:true,
        disableHostCheck:true,
        host:'127.0.0.1',
        proxy:{
            "http://127.0.0.1:3000":{
                target:"http://47.104.23.245:80",
                changeOrigin: true,
                secure: false
            }
        }
    }
}