const path = require('path');
const paths = require('./config/paths.js');
const polyfill = require('babel-polyfill');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = '/';

module.exports = {
    entry:
        paths.appIndexJs
    ,
    output:{
        filename: 'static/js/main.js',
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
                        name: 'static/media/[name].[hash:8].[ext]'
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
                            MiniCssExtractPlugin.loader,
                            "css-loader",
                        // require.resolve('style-loader'),
                        // {
                        //     loader: require.resolve('css-loader'),
                        //     options: {
                        //     importLoaders: 1,
                        //     },
                        // },
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
                        name: 'static/media/[name].[hash:8].[ext]',
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
            filename:'static/index.html',
            chunks:['main']
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].css",
            chunkFilename: "[id].css"
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