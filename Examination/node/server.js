var express = require('express');
var app = express();
// const fileUpload = require('express-fileupload');  // npm install --save express-fileupload ենք անում, որ կարողանանք օգտագործել express-fileupload մոդուլը Ֆայլ ներբեռնելու համար
// app.use(fileUpload());
var MongoClient = require('mongodb').MongoClient // npm install mongodb ենք անում
var ObjectId = require('mongodb').ObjectId; //  for working { _id: ObjectId(carId)}
var dbUrl = 'mongodb://localhost:27017/myWeb';
var dbName = 'myWeb';
var collName = 'users';
var fs = require('fs');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));   // app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded
var cors = require('cors');
app.use(cors());
app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index.html`));

var multer = require('multer');
//app.use(express.static(__dirname +'/public'))
app.use(multer({dest:__dirname+'/images/'}).any());

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a GET request for the /list_user page.
app.get('/api/user_list', function (req, res) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("Դուք GET request ուղարկեցիք /api/car_list ին");
    MongoClient.connect(dbUrl,{ useNewUrlParser: true },function (err, client) {
        if (err) throw err

        var db = client.db(dbName)
        db.collection(collName).find().toArray(function (err, myCars) {
            if (err) throw err
            res.send(myCars);
        });
    });
})

app.post('/one_user_view', function (req, res) {
    var ObjectId = require('mongodb').ObjectId;
    var carId = req.body.id;
   console.log(req.body.id);
    MongoClient.connect(dbUrl,{ useNewUrlParser: true }, function (err, client) {
        if (err) throw err
        var db = client.db(dbName)

        db.collection(collName).findOne({ _id: ObjectId(carId) }, function (err, info) {
            if (err) throw err
            console.log("info model is "+info);
            res.send(info);
        });
    });

})

    app.post('/create_user', function (req, res) {
         console.log(req.files[0]);
         console.log(typeof(req.files[0]));
        // console.log(req.files + typeof(req.files));
         //console.log("req.body.name is" + req.body.name);
        var errors ={};
        success = true;

        if(req.body.name === undefined) {

            errors.nameError = "Name is empty";
            success = false;
        }
           if(req.body.lastname === undefined) {

             errors.lastnameError = "Lastname is empty";
            success = false;
            }
          if(req.body.email === undefined) {

             errors.emailError = "Email is empty";
             success = false;
            }
        if(req.files[0] === undefined) {

            errors.imageError = "Image is empty";
            success = false;
        }
              res.send(errors);
              res.end()
         if (success==true){
           // console.log("dgfjjhgdss");
            MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
                if (err) throw err

                var db = client.db(dbName)
                var myobj = {name: req.body.name,
                    lastname: req.body.lastname,
                    email:req.body.email,
                    img : req.files
                };
                db.collection(collName).insertOne(myobj, function(err, res) {
                    if (err) throw err
                    console.log("1 document inserted");
                    client.close();
                });
            });
        }



    })

app.post('/update_user', function (req, res) {
   // console.log(req.body.hinId);
   // console.log(req.files + typeof(req.files));
    var errors ={};
    success = true;

    if(req.body.name === undefined) {

        errors.nameError = "Name is empty";
        success = false;
    }
    if(req.body.lastname === undefined) {

        errors.lastnameError = "Lastname is empty";
        success = false;
    }
    if(req.body.email === undefined) {

        errors.emailError = "Email is empty";
        success = false;
    }
    if(req.files[0] === undefined) {

        errors.imageError = "Image is empty";
        success = false;
    }
    res.send(errors);
    res.end();
    if (success==true) {
        MongoClient.connect(dbUrl, {useNewUrlParser: true}, function (err, client) {
            if (err) return console.log(err);
            const db = client.db(dbName);
            const col = db.collection(collName);
            db.collection(collName).update(
                {_id: ObjectId(req.body.hinId)},              // критерий выборки
                {
                    name: req.body.name,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    img: req.files
                },     // параметр обновления
                {                           // доп. опции обновления
                    returnOriginal: false
                },
                function (err, result) {

                    console.log("1 document updated");
                    client.close();
                }
            );
        });
    }

})


app.post('/delete_user', function (req, res) {
    var id = req.body.id;

    MongoClient.connect(dbUrl, { useNewUrlParser: true },function (err, client) {
        if (err) throw err

        var db = client.db(dbName)
        var myquery = { _id: ObjectId(id) };
        db.collection(collName).deleteOne(myquery, function(err,objRes) {
            if (err) throw err
            console.log("1 document deleted");
            client.close();
        });
    });

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Բարև, աշխատող սերվեր http://%s:%s", host, port)
})

