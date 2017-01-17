
var logger = require('./logger');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var prop = require('./properties.js');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(clientErrorHandler);
app.set('views', __dirname + '/views');  
app.set('view engine', 'ejs'); 
//app.use(app.router);


 
//Mobile  without auth
app.post('/logs/:appid', logger.addLog);
////Administration with auth
app.get('/logs/:appid/:id', logger.findByIdDetail);
app.get('/logsexport/:appid/:id', logger.findByIdDetailExport);
app.get('/logs/:appid', logger.findAll);
app.get('/logsexport/:appid', logger.findAllExport);
app.get('/mobiles', logger.findAllCollections);
app.get('/logs/:appid/:id/delete', logger.deleteLog);
app.get('/logout', logger.logout);
 
console.log("------------------".yellow);
app.listen(prop.portWeb);
console.log('Listening on port '.yellow+prop.portWeb.red);

