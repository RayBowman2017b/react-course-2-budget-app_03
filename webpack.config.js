
//  webpack.config.js

  const GC_active_app_file = "sec012a_app.jsx";

console.log (' ******** GC_active_app_file is ->' + GC_active_app_file);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const GC_mod_path = require ('path');
const GC_path_public = GC_mod_path.join (__dirname, 'public');
const GC_path_dist = GC_mod_path.join (__dirname, 'dist');
const GC_webpack = require ('webpack');


console.log (' --- path is ', __dirname);
console.log ( ' --- public path is ', GC_path_public);


const GC_actual_path_public = () =>
{
    return GC_path_public;
}

console.log ( ' --- GC_actual_path_public() is ', GC_actual_path_public());


const GC_actual_path_dist = () =>
{
    return GC_path_dist;
}
console.log ( ' --- GC_actual_path_dist () is ', GC_actual_path_dist());

const GC_actual_path_favicon = GC_mod_path.join (__dirname, 'public','images');
console.log ( ' --- GC_actual_path_favicon is ', GC_actual_path_favicon);

const GC_actual_path_styles = GC_mod_path.join (__dirname, 'src', 'styles');

const GC_actual_source_JSX = GC_mod_path.join (__dirname, 'src', GC_active_app_file);
const GC_actual_source_index = GC_mod_path.join (__dirname, 'src', 'index_02.html');

function GF_copy_webpack_plugin ()
{
    return new CopyWebpackPlugin (
        [ { from: GC_actual_path_favicon }], { copyUnmodified: true }
        );
}

//=======================================================================

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin ( {
    filename: 'main.css'
} );
//=======================================================================


console.log ( ' --- GC_actual_source_JSX is ', GC_actual_source_JSX);
console.log ( ' --- GC_actual_source_JSX is ', GC_mod_path.parse (GC_actual_source_JSX) );


function GC_build_config (env)  {

    const L_loader_with_source_map = (P_loader) =>
    {
        return ( { loader: P_loader, options: { sourceMap: true } } );
    }

    let L_config_obj = {

        entry: GC_actual_source_JSX,
        // entry:
        // {
        //     app: [ GC_actual_source_JSX ],
        //     // vendor: [
        //     //     //'react', 'lodash', 'moment'
        //     //     'moment'
        //     // ],
        // },
        output:
        {
            //path: GC_actual_path_public(),
            //  filename: 'bundle.js'
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
          optimization: {
            // minimizer: [new UglifyJsPlugin()]
          },
          plugins: [

            //  https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
            // load `moment/locale/ja.js` and `moment/locale/it.js`
            new GC_webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

            // Ignore all locale files of moment.js
            new GC_webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

            new CleanWebpackPlugin(GC_actual_path_dist (), {} ),
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

//    mode: "development",
//    mode: "production",
//    mode: "none",

    if (env === 'production')
    {
        L_config_obj.devtool = 'source-map';
        L_config_obj.mode = "production";
        L_config_obj.output.path = GC_actual_path_dist ();

        L_config_obj.optimization.splitChunks =
        {
              // include all types of chunks
            chunks: 'all'
        }

 //  https://www.npmjs.com/package/webpack-bundle-analyzer

        // USE THIS to generate HTML representation in browser.
        //L_config_obj.plugins.push(new BundleAnalyzerPlugin());

        // USE THIS to generate JSON file.
        L_config_obj.plugins.push(new BundleAnalyzerPlugin(
        {
            analyzerMode: "disabled",
            generateStatsFile: true,
            statsFilename: "BundleAnalyzer_01.json",
            defaultSizes: "parsed"
        }
            ) );
    }
    else
    if (env === 'development')
    {
        //L_config_obj.devtool = 'cheap-module-eval-source-map';
        L_config_obj.devtool = 'inline-source-map';
        L_config_obj.mode = "development";
        L_config_obj.output.path = GC_actual_path_public();
        //L_config_obj.output.path = GC_actual_path_dist();

        L_config_obj.devServer = {
            //contentBase: GC_dist_path,
            contentBase: GC_actual_path_public(),
            host: "0.0.0.0",
            port: 9900,
            historyApiFallback: true,

            //  THIS DID NOT WORK - test data did not load
            //  https://stackoverflow.com/questions/47477255/webpack-dev-server-failed-to-load-resource
            //publicPath: "/dist/"
            //publicPath: GC_actual_path_dist() + "/"
            //publicPath: GC_actual_path_public() + "/"
        };
    }
    else
        console.log (`   *** BAD PARAMETER for env: ${env}`)

    return L_config_obj;
};


module.exports = GC_build_config;
