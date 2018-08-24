var express = require('express');
// npm install --save express-fileupload ենք անում, որ կարողանանք օգտագործել express-fileupload մոդուլը Ֆայլ ներբեռնելու համար
const fileUpload = require('express-fileupload');
var MongoClient = require('mongodb').MongoClient // npm install mongodb ենք անում, որ աշխատի սա
var dbUrl = 'mongodb://localhost:27017/AutoShop';
var dbName = 'AutoShop';
var collName = 'cars';
var app = express();
app.use(fileUpload());
var myCarsJson = require('./cars.json');
var fs = require('fs');
var http = require('http');

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})


// post request է ուղարկվել  file_uploadPage էջին
app.post('/file_uploadPage', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
// Փոփոխական, որը վերցնում է ուղարկված ֆայլը
    let SomeFile = req.files.inputfileName;

// Use the mv() method to place the file somewhere on your server
// Օգտագործում ենք mv() մեթոդը մեր upload արած ֆայլը սերվերում ինչ-որ տեղ տեղադրելու համար(FolderUploadFiles պապկայի մեջ)
    SomeFile.mv('../Cars/app/cars/carsImage/'+SomeFile.name, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('Ֆայլը գցել է carsImage պապկայի մեջ:Գնացեք կոֆե խմելու');
    });
})
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/api/car_list', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	console.log("Դուք GET request ուղարկեցիք /api/car_list ին");
	MongoClient.connect(dbUrl, function (err, client) {
  if (err) throw err

  var db = client.db(dbName)
  
  db.collection(collName).find().toArray(function (err, myCars) {
    if (err) throw err
	res.send(myCars);

	})	 
  });
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Բարև, աշխատող սերվեր http://%s:%s", host, port)
})
