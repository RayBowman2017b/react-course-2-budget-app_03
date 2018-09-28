
//  webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin')

const GC_mod_path = require ('path');
const GC_path_public = GC_mod_path.join (__dirname, 'public');
const GC_webpack = require ('webpack');


function GF_copy_webpack_plugin ()
{
    return new CopyWebpackPlugin (
        [ { from: GC_actual_path_favicon }], { copyUnmodified: true }
        );
}

function GC_build_config (env)  {

    const L_loader_with_source_map = (P_loader) =>
    {
        return ( { loader: P_loader, options: { sourceMap: true } } );
    }

    let L_config_obj = {

        entry: GC_actual_source_JSX,
        output:
        {
            filename: '[name].[chunkhash].js'
        },
        module:
        {
            rules :
            [
                {
                  loader: 'babel-loader',
                  test: /\.jsx$/,
                  exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use:
                    [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        L_loader_with_source_map('css-loader'),
                        L_loader_with_source_map('postcss-loader'),
                        L_loader_with_source_map('sass-loader')
                    ]
                },
                {
                   test: /\.(jpg|jpeg|gif|png|ico)$/,
                   exclude: /node_modules/,
                   loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
                }
            ]
        },
        plugins: [
            new GC_webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),
            new CleanWebpackPlugin('dist', {} ),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                template: GC_actual_source_index,
                filename: 'index.html'
            }),
            new WebpackMd5Hash(),
            GF_copy_webpack_plugin ()
        ]
    };


    console.log (`env --- ${env}`)

    if (env === 'production')
    {
        L_config_obj.devtool = 'source-map';
        L_config_obj.mode = "production";
        L_config_obj.output.path = GC_actual_path_dist;
    }
    else
    if (env === 'development')
    {
        L_config_obj.devtool = 'inline-source-map';
        L_config_obj.mode = "development";
        L_config_obj.output.path = GC_actual_path_public;

        L_config_obj.devServer = {
            contentBase: GC_actual_path_public,
            host: "0.0.0.0",
            port: 9900,
            historyApiFallback: true
        };
    }
    else
        console.log (`   *** BAD PARAMETER for env: ${env}`)

    return L_config_obj;
};


module.exports = GC_build_config;
