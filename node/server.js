var express = require('express');
// npm install --save express-fileupload ենք անում, որ կարողանանք օգտագործել express-fileupload մոդուլը Ֆայլ ներբեռնելու համար
const fileUpload = require('express-fileupload');
var MongoClient = require('mongodb').MongoClient // npm install mongodb ենք անում, որ աշխատի սա
var app = express();
app.use(fileUpload());
var myCars = require('./cars.json');
//var oneCarPage = require('./oneCar');

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


/*app.get('/toursall', function(req, res) {

    res.json(tours);
});*/

// This responds a GET request for the /list_user page.
app.get('/api/car_list', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	console.log("Դուք GET request ուղարկեցիք /api/car_list ին");
	 res.send(myCars);
	 
	 app.get('/myCars/:id?', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
   responseOneCar = req.params.id !== undefined ?
       myCars.filter(     function(obj)   {return obj.id== req.params.id} )
       : myCars;
  // res.send(responseOneCar);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>'+ 'Car id - ' +responseOneCar[0].id+'</h1>'+
              '<h2>'+ 'Make - ' +responseOneCar[0].make+'</h2>'+
			  '<h2>'+ 'Model - ' +responseOneCar[0].model+'</h3>'+
			  '<h2>'+ 'Year - ' +responseOneCar[0].year+'</h4>'+
			  '<h2>'+ 'Price - ' +responseOneCar[0].price+'</h5>'+
			  '<h2>'+ 'Useway - ' +responseOneCar[0].useWay+'</h6>'+
			  '<h2>'+ 'Body - ' +responseOneCar[0].body+'</h6>'+
			  '<h2>'+ 'Condition - ' +responseOneCar[0].condition+'</h6>'+
			  '<h2>'+ 'Trnmission - ' +responseOneCar[0].transmission+'</h6>'+
			  '<h2>'+ 'Description - ' +responseOneCar[0].description+'</h6>'+
			  "<img src= '"+responseOneCar[0].image+"'>");
	 
    res.end();    
});
})

// This responds a GET request for the /carOnclick page.
app.get('/carOnclickNode', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	console.log("Got a GET request for /carOnclick");
MongoClient.connect('mongodb://localhost:27017/AutoShop', function (err, client) {
  if (err) throw err

  var db = client.db('AutoShop')
  
  db.collection('cars').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result);
	res.send(result);
		})
	})
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
