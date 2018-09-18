
//  sec009a_app.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_009_React_Router\proj-02\Budget-app\src\sec009a_app.jsx

//  ================================================================
//  ================================================================


//  ----------------------------------------------------------------

console.log (" sec009a_app.jsx is running!");

//#########################################################

//  SEC_006 --- 55. One Component per File 18:12

import React from 'react';
import ReactDOM from 'react-dom';


//  SEC_009 --- 79. Linking Between Routes 14:08
//  IMPORT Link, NavLink
//  SEC_009 --- 78. Setting up a 404 5:58
//  IMPORT Switch
//  SEC_009 --- 77. React-Router 101 20:13

//  BrowserRouter will be used only once
//  Route will be used for each path
import SFC_app_router from './sec009a_routers/sec009a_app_router.jsx';


//  SEC_008 --- 66. Reset That $#!* 4:58

import 'normalize.css/normalize.css';

//  SEC_008 --- 64. Setting up Webpack with SCSS 13:16

import './styles/styles.scss';

//#########################################################
//#########################################################

//  SEC_004 --- 27. Nesting Components 5:43

const GC_appRoot_01 = document.getElementById('sec008_app_01');

ReactDOM.render
      //  (GC_routes,
      (<SFC_app_router />,
       GC_appRoot_01);

//#########################################################
//#########################################################

/**********************************************

const GC_appRoot_02 = document.getElementById('sec004_app_02');

//  SEC_005 --- 41. Default Prop Values 9:49

ReactDOM.render (<Cls_Counter count={33}/>, GC_appRoot_02);
  ReactDOM.render (<Cls_Counter />, GC_appRoot_02);

 **********************************************/

//=========================================================

//#########################################################
//#########################################################


//#########################################################

//  SEC_007 --- 60. Passing Children to Component 6:25

/**********************************************

const GC_SFC_layout_01 = (P_props) =>
{
     return (
<div>
  <p>header</p>
  {P_props.content}
  <p>footer</p>
</div>
            );
}
 **********************************************/

//#########################################################

//  SEC_007 --- 60. Passing Children to Component 6:25

/**********************************************

const GC_SFC_layout_02 = (P_props) =>
{
     return (
<div>
  <p>header</p>
  {P_props.children}
  <p>footer</p>
</div>
            );
}
 **********************************************/

//#########################################################

//  SEC_007 --- 60. Passing Children to Component 6:25

/**********************************************

const GC_template = (
<div>
  <h1>Page Title</h1>
  <p>This is my page</p>
</div>
 );
 **********************************************/

//#########################################################
//#########################################################

/**********************************************

const GC_sec007_app_01 = document.getElementById('sec007_app_01');

//  SEC_007 --- 60. Passing Children to Component 6:25

  ReactDOM.render
        (<GC_SFC_layout_01 content={GC_template}/>,
         GC_sec007_app_01);
 **********************************************/

//#########################################################

/**********************************************

const GC_sec007_app_02 = document.getElementById('sec007_app_02');

//  SEC_007 --- 60. Passing Children to Component 6:25

ReactDOM.render
      (
        (<GC_SFC_layout_02>
<div>
  <h1>Page Title</h1>
  <p>This is my page</p>
</div>
         </GC_SFC_layout_02>),
       GC_sec007_app_02);
 **********************************************/

//#########################################################

//#########################################################
//#########################################################
