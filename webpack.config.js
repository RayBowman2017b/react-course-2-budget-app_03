
//  webpack.config.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\webpack.config.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\webpack.config.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_010_Redux\proj_02\Budget-app\webpack.config.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_009_React_Router\proj_02\Budget-app\webpack.config.js


//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_007_3PCmpn\proj_01\Indecision-app\webpack.config.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\sec006_webpack.config.js


//  copy  .\webpack.config.js  ..\..\..\webpack.config.js
//  copy  .\.babelrc  ..\..\..\.babelrc
//  yarn run webpack --watch

//  node  webpack.config.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_008_Styling_React\proj_01\Indecision-app\webpack.config.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_007_Using_a_Third-Party_Component\react-course-proj-01\Indecision-app-01\webpack.config.js


//  "K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_007_Using_a_Third-Party_Component\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_IndecisionApp.jsx"
//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_012_Testing_Your_Application\proj_02\Budget-app\webpack.config.js

//  const GC_active_app_folder = "SEC_006_Webpack";
//  const GC_active_app_folder = "SEC_007_3PCmpn";
//  const GC_active_app_folder = "SEC_008_Styling_React";
//  const GC_active_app_folder = "SEC_009_React_Router";
//  const GC_active_app_folder = "SEC_010_Redux";
//  const GC_active_app_folder = "SEC_011_React_with_Redux";
//  const GC_active_app_folder = "SEC_012_Testing_Your_Application";
const GC_active_app_folder = "a01_final_projects";
  //[ GC_active_app_folder ref1;]
  //[ GC_active_app_folder ref2;]
  //[ GC_active_app_folder ref3;]
  //[ GC_active_app_folder ref4;]
  //[ GC_active_app_folder ref5;]
  //[ GC_active_app_folder xxx]
//  const GC_active_app_file = "sec006c_app.jsx";
//  const GC_active_app_file = "sec007a_app.jsx";
//  const GC_active_app_file = "sec008a_app.jsx";
//  const GC_active_app_file = "sec009a_app.jsx";
//  const GC_active_app_file = "sec010a_app.jsx";
//  sec 10 L85
//  const GC_active_app_file = "sec010a_Redux_101.jsx";
//  sec 10 L88
//  sec010a_Redux_101
//  const GC_active_app_file = "sec010b_L88_destructuring.jsx";
//  sec 10 L90
//  const GC_active_app_file = "sec010a_Redux_101.jsx";
//  sec 10 L91
//  const GC_active_app_file = "sec010b_Redux_101.jsx";
//  const GC_active_app_file = "sec010b_xpr2_Redux_101.jsx";
//  const GC_active_app_file = "sec010b_xpr3_Redux_101.jsx";
//  const GC_active_app_file = "sec010c_L91_Redux_expensify.jsx";
//  const GC_active_app_file = "sec011a_app.jsx";
//  SEC_011 --- 100. The Higher Order Component 15:30
//  const GC_active_app_file = "sec011b_L100_hoc.jsx";
//  const GC_active_app_file = "sec011a_app.jsx";
  const GC_active_app_file = "sec012a_app.jsx";
    //[ GC_active_app_file ref1;]
    //[ GC_active_app_file ref2;]
    //[S07251664|A01_DIrectory_01.txt::GC_active_app_file drc1;]
    //[ GC_active_app_file xxx]

//    entry: GC_actual_source_JSX,
//    entry: GC_redux_playground_JSX,

//  sec010b_L88_destructuring.jsx
console.log (' ******** GC_active_app_folder is ->' + GC_active_app_folder);
console.log (' ******** GC_active_app_file is ->' + GC_active_app_file);

//  const GC_course_section_path =
//        "K:\\aaa_TransZ_DT201607\\Ralph\\Udemy\\C023_Complete_React_Web_Dev\\Sections\\";
        // "/aaa_TransZ_DT201607/Ralph/Udemy/C023_Complete_React_Web_Dev/Sections/"
  const GC_course_section_path =
//    [   "aaa_TransZ_DT201607", "Ralph", "Udemy", "C023_Complete_React_Web_Dev", "Sections"  ];
//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\webpack.config.js
        ["A01_Udemy", "C023_Complete_React_Web_Dev", "Sections"];
console.log (' ******** GC_course_section_path is ->', GC_course_section_path);


//const GC_active_project_path = "\\react-course-proj-01\\Indecision-app-01";
//const GC_active_project_path = "/react-course-proj-01/Indecision-app-01";
//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_007_3PCmpn\proj_01\Indecision-app\webpack.config.js
const GC_active_project_path =
//    [   "react-course-proj-01", "Indecision-app-01"   ];
//    [   "proj_01", "Indecision-app"   ];
//    [   "proj_02", "Budget-app"  ];
      [   "proj_02", "Budget-app", "zzz_playground" ];
      //  "K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_010_Redux\proj_02\Budget-app\zzz_playground"
console.log (' ******** GC_active_project_path is -> ', GC_active_project_path);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin')

const GC_mod_path = require ('path');
const GC_path_public = GC_mod_path.join (__dirname, 'public');
const GC_webpack = require ('webpack');


console.log (' --- path is ', __dirname);
console.log ( ' --- public path is ', GC_path_public);

const GC_active_path =
            GC_course_section_path
              + GC_active_app_folder
            //[ GC_active_app_folder ref1;^B]
              + GC_active_project_path;

//const GC_actual_path_public = GC_active_path + "\\public";
//const GC_actual_path_public = GC_active_path + "/public";
            // GC_course_section_path[3],
            // GC_course_section_path[4],

const GC_actual_path_public =
  //[ GC_actual_path_public module.exports-ref1;]
  //[ GC_actual_path_public module.exports-ref2;]
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            GC_active_app_folder,
        //[ GC_active_app_folder ref2;^B]
            GC_active_project_path[0],
            GC_active_project_path[1],
            'public'
        );
console.log ( ' --- GC_actual_path_public is ', GC_actual_path_public);


//  entry point -> output

/*******************************************************************
const xxxGC_actual_source_JSX = './' + GC_active_app_folder
                                  + GC_active_project_path
                                  + '/src/'
                                  + GC_active_app_file;
 *******************************************************************/

const GC_actual_path_dist =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            GC_active_app_folder,
            GC_active_project_path[0],
            GC_active_project_path[1],
            'dist'
        );
console.log ( ' --- GC_actual_path_dist is ', GC_actual_path_dist);

const GC_actual_path_favicon =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            GC_active_app_folder,
            GC_active_project_path[0],
            GC_active_project_path[1],
            'public',
            'images'
            // 'favicon.png'
        );
console.log ( ' --- GC_actual_path_favicon is ', GC_actual_path_favicon);


            // GC_course_section_path[3],
            // GC_course_section_path[4],
const GC_actual_source_JSX =
  //[ GC_actual_source_JSX module.exports-ref1;]
  //[ GC_actual_source_JSX xxx]
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            //  "./",
            GC_active_app_folder,
        //[ GC_active_app_folder ref3;^B]
            GC_active_project_path[0],
            GC_active_project_path[1],
            'src',
            GC_active_app_file
        //[ GC_active_app_file ref1;^B]
        );

const GC_actual_path_styles =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            //  "./",
            GC_active_app_folder,
        //[ GC_active_app_folder ref4;^B]
            GC_active_project_path[0],
            GC_active_project_path[1],
            'src',
            'styles'
        );

const GC_actual_source_index =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            //  "./",
            GC_active_app_folder,
            GC_active_project_path[0],
            GC_active_project_path[1],
            'src',
            'index_02.html'
        );

function GF_copy_webpack_plugin ()
{
    // return new CopyWebpackPlugin (
    //     [ ...patterns ], options
    //     );
     //new CopyWebpackPlugin([{ from: path.join(__dirname, '../resources')}], { copyUnmodified: true }),

    return new CopyWebpackPlugin (
        [ { from: GC_actual_path_favicon }], { copyUnmodified: true }
        );
}

//=======================================================================

//  Maximilian Schwarzmuller lecture - 11:26 AM 9/22/2018
//  K:\A01_Udemy\Z01_General_Notes\webpack_01.txt
//  npm install --save-dev extract-text-webpack-plugin@next

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin ( {
    filename: 'main.css'
} );
//=======================================================================

//  sec 10 L85
            // GC_course_section_path[3],
            // GC_course_section_path[4],
const GC_redux_playground_JSX =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            //  "./",
            GC_active_app_folder,
        //[ GC_active_app_folder ref5;^B]
            GC_active_project_path[0],
            GC_active_project_path[1],
            GC_active_project_path[2],
            GC_active_app_file
        //[ GC_active_app_file ref2;^B]
        );

//    entry: './SEC_006_Webpack/react-course-proj-01/Indecision-app-01/src/sec006b_app.js',
//        path: GC_actual_path_public,


//  SEC_006 --- 54. Setting up Babel with Webpack 9:27

console.log ( ' --- GC_actual_source_JSX is ', GC_actual_source_JSX);
console.log ( ' --- GC_actual_source_JSX is ', GC_mod_path.parse (GC_actual_source_JSX) );


//  SEC_009 --- 77. React-Router 101 20:13
//    devServer:
//    {
//        contentBase: GC_actual_path_public,
//        historyApiFallback: true
//    }

//  SEC_006 --- 56. Source Maps with Webpack 5:16
//    devtool: 'cheap-module-eval-source-map'

//  GC_redux_playground_JSX
//    entry: GC_actual_source_JSX,
//    entry: GC_redux_playground_JSX,


//module.exports = {
function GC_build_config (env)  {

    const L_loader_with_source_map = (P_loader) =>
    {
        return ( { loader: P_loader, options: { sourceMap: true } } );
    }

    let L_config_obj = {

        entry: GC_actual_source_JSX,
        output:
        {
            //path: GC_actual_path_public,
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
              // {
              //   test: /\.s?css$/,

            // use :
            // [
            //     'style-loader',
            //     'css-loader',
            //     'sass-loader'
            // ]

//  Maximilian Schwarzmuller lecture - 11:26 AM 9/22/2018
//  K:\A01_Udemy\Z01_General_Notes\webpack_01.txt
              //   use: extractPlugin.extract ( {
              //       use: ['css-loader', 'sass-loader']
              //   } )
              // }

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
            //  https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
            // load `moment/locale/ja.js` and `moment/locale/it.js`
            new GC_webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

    //  Maximilian Schwarzmuller lecture - 11:26 AM 9/22/2018
    //  K:\A01_Udemy\Z01_General_Notes\webpack_01.txt
    //  extractPlugin
            new CleanWebpackPlugin('dist', {} ),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                inject: false,
                hash: true,
                //  template: './src/index_02.html',
                //  template: './src/index_02.html',
                template: GC_actual_source_index,
              //  filename: 'index_dist.html'
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
        L_config_obj.output.path = GC_actual_path_dist;
    }
    else
    if (env === 'development')
    {
        //L_config_obj.devtool = 'cheap-module-eval-source-map';
        L_config_obj.devtool = 'inline-source-map';
        L_config_obj.mode = "development";
        L_config_obj.output.path = GC_actual_path_public;

        L_config_obj.devServer = {
            //contentBase: GC_dist_path,
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
