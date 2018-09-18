@rem zjtest.bat

set jest_config=/aaa_TransZ_DT201607/Ralph/Udemy/C023_Complete_React_Web_Dev/Sections/jest.config.json
set test_app=/aaa_TransZ_DT201607/Ralph/Udemy/C023_Complete_React_Web_Dev/Sections/SEC_012_Testing_Your_Application/proj_02/Budget-app

yarn run jest  %test_app% --config=%jest_config%  --watch
