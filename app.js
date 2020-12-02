/*
* Name: MEAN STACK Simplyblog2
* Description: Simple Blog App Built with MEAN Stack
* Author: Shrikumar Infotech
* Author URI: dev@shrikumarinfotech.com
* License: GPLv2 or later
* License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

'use strict';
// import and define express
const express = require('express');
const app = express();

// define port
const port = process.env.PORT || 3000;

// import mongoose and connect MongoDB
const mongoose = require('mongoose');
// import database config
const databaseConfig = require('./config');

// connect database
mongoose.connect(databaseConfig.databaseUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// setup template engine
app.set('view engine', 'ejs');

// setup static file directories
app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/node_modules'));

// load controllers
const apiController = require('./controllers/apiController');
const viewController = require('./controllers/viewController');

// app default screen
app.get('/', function(req, res){
    res.render('index');
});

// call controllers
apiController(app);
viewController(app);

// listen on port
app.listen(port, function(err){
    if(err) throw err;
    console.log(`Lisetening on port: ${port}`);
});