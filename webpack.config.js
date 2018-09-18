
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

const GC_mod_path = require ('path');
const GC_path_public = GC_mod_path.join (__dirname, 'public');

console.log (' --- path is ', __dirname);
console.log ( ' --- public path is ', GC_path_public);

const GC_active_path =
            GC_course_section_path
              + GC_active_app_folder
              + GC_active_project_path;

//const GC_actual_path_public = GC_active_path + "\\public";
//const GC_actual_path_public = GC_active_path + "/public";
            // GC_course_section_path[3],
            // GC_course_section_path[4],

const GC_actual_path_public =
    GC_mod_path.join
        (
            'K:/',
            GC_course_section_path[0],
            GC_course_section_path[1],
            GC_course_section_path[2],
            GC_active_app_folder,
            GC_active_project_path[0],
            GC_active_project_path[1],
            'public'
        );
console.log ( ' --- GC_actual_path_public is ', GC_actual_path_public);


//  entry point -> output

const xxxGC_actual_source_JSX = './' + GC_active_app_folder
                                  + GC_active_project_path
                                  + '/src/'
                                  + GC_active_app_file;

            // GC_course_section_path[3],
            // GC_course_section_path[4],
const GC_actual_source_JSX =
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
            GC_active_app_file
        );

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
            GC_active_project_path[0],
            GC_active_project_path[1],
            GC_active_project_path[2],
            GC_active_app_file
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

module.exports =
{
    entry: GC_actual_source_JSX,
    output:
    {
        path: GC_actual_path_public,
        filename: 'bundle.js'
    },
    mode: 'development',
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
            use :
            [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
          }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:
    {
        contentBase: GC_actual_path_public,
        historyApiFallback: true
    }
};
  