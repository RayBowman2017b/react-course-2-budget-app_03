@rem zbbl.bat
@rem babel src/sec003_app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
@rem babel src/sec004_app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
@rem babel src/sec005_app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
@rem  babel src/sec006_app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
@rem  BAD \aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\node_modules\babel-cli\bin\babel.js src/sec006_app.jsx --out-file=public/scripts/app.js --presets=env,react --watch

@rem 
@rem  WORKS - need to define build_app_006 in scripts of package.json
@rem yarn run build_app_006
@rem 

@rem Running with local package

@rem set app_JSX=SEC_006_Webpack/react-course-proj-01/Indecision-app-01/src/sec006_app.jsx                         
set BBL_app_JSX=SEC_006_Webpack/react-course-proj-01/Indecision-app-01/src/sec006b_app.jsx
set BBL_app_outfile=--out-file=SEC_006_Webpack/react-course-proj-01/Indecision-app-01/public/scripts/app.js
@rem  --presets=env,react --watch
yarn run babel %BBL_app_JSX%  %BBL_app_outfile%  --presets=env,react --watch
