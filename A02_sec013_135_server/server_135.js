
//  server_135.js

//  K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\
//  proj_02\Budget-app\A02_sec013_135_server\server_135.js

//  node A02_sec013_135_server\server_135.js

const GC_express = require('express');
const GC_app = GC_express();
const GC_path = require('path');
const GC_public_path = GC_path.join(__dirname, '..', 'public');
const GC_default_path = GC_path.join(GC_public_path, 'index.html');
const GC_port = 3000;

//  use the middleware GC_express.static(GC_public_path)
GC_app.use(GC_express.static(GC_public_path));

function unhandled_requests (req, res)
{
    res.sendFile(GC_default_path);
}

//  match all unmatched routes --- *
GC_app.get ('*', unhandled_requests);
//  path

function listen_handler ()
{
    console.log ('server is up');
}

GC_app.listen(GC_port, listen_handler);
