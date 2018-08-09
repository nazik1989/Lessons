var http = require('http');


http.createServer(function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);

  res.writeHead(200, {
 'Content-Type': 'application/json',
 'X-Powered-By': 'bacon'
});
var responseBody = 
[{ "_id" : "ac3", "name" : "AC3 Phone", "brand" : "ACME", "type" : "phone", "price" : 200, "warranty_years" : 1, "available" : true ,"image":"products/productsInage/AC3.jpg"},
{ "_id" : "ac7", "name" : "AC7 Phone", "brand" : "ACME", "type" : "phone", "price" : 320, "warranty_years" : 1, "available" : false,"image":"products/productsInage/AC7.jpg" },
{ "image":"products/productsInage/AC3SeriesCharger.jpg","_id" : { "$oid" : "507d95d5719dbef170f15bf9" }, "name" : "AC3 Series Charger", "type" : [ "accessory", "charger" ], "price" : 19, "warranty_years" : 0.25, "for" : [ "ac3", "ac7", "ac9" ] },
{ "_id" : { "$oid" : "507d95d5719dbef170f15bfa" }, "name" : "AC3 Case Green", "type" : [ "accessory", "case" ], "color" : "green","image":"products/productsInage/CaseGreen.jpg", "price" : 12, "warranty_years" : 0 },
{ "_id" : { "$oid" : "507d95d5719dbef170f15bfc" }, "name" : "AC3 Case Black", "type" : [ "accessory", "case" ], "color" : "black", "image":"products/productsInage/CaseBlack.jpg","price" : 12.5, "warranty_years" : 0.25, "available" : false, "for" : "ac3" },
{ "_id" : { "$oid" : "507d95d5719dbef170f15bfd" }, "name" : "AC3 Case Red", "type" : [ "accessory", "case" ], "color" : "red", "image":"products/productsInage/CaseRed.jpg","price" : 12, "warranty_years" : 0.25, "available" : true, "for" : "ac3" },
{ "_id" : { "$oid" : "507d95d5719dbef170f15bfb" }, "name" : "Phone Extended Warranty","image":"products/productsInage/WarrantyExtended.jpg", "type" : "warranty", "price" : 38, "warranty_years" : 2, "for" : [ "ac3", "ac7", "ac9", "qp7", "qp8", "qp9" ] },

{ "_id" : { "$oid" : "507d95d5719dbef170f15bfe" }, "name" : "Phone Service Basic Plan","image":"products/productsInage/PhoneServiceBasicPlan.png", "type" : "service", "monthly_price" : 40, "limits" : { "voice" : { "units" : "minutes", "n" : 400, "over_rate" : 0.05 }, "data" : { "units" : "gigabytes", "n" : 20, "over_rate" : 1 }, "sms" : { "units" : "texts sent", "n" : 100, "over_rate" : 0.001 } }, "term_years" : 2 },
{ "_id" : { "$oid" : "507d95d5719dbef170f15bff" }, "name" : "Phone Service Core Plan", "image":"products/productsInage/PhoneServiceCorePlan.png","type" : "service", "monthly_price" : 60, "limits" : { "voice" : { "units" : "minutes", "n" : 1000, "over_rate" : 0.05 }, "data" : { "n" : "unlimited", "over_rate" : 0 }, "sms" : { "n" : "unlimited", "over_rate" : 0 } }, "term_years" : 1 },
{ "_id" : { "$oid" : "507d95d5719dbef170f15c00" }, "name" : "Phone Service Family Plan","image":"products/productsInage/PhoneServiceFamilyPlan.png", "type" : "service", "monthly_price" : 90, "limits" : { "voice" : { "units" : "minutes", "n" : 1200, "over_rate" : 0.05 }, "data" : { "n" : "unlimited", "over_rate" : 0 }, "sms" : { "n" : "unlimited", "over_rate" : 0 } }, "sales_tax" : true, "term_years" : 2 },
{ "_id" : { "$oid" : "507d95d5719dbef170f15c01" }, "name" : "Cable TV Basic Service Package","image":"products/productsInage/CableTVBasicServicePackage.jpg", "type" : "tv", "monthly_price" : 50, "term_years" : 2, "cancel_penalty" : 25, "sales_tax" : true, "additional_tarriffs" : [ { "kind" : "federal tarriff", "amount" : { "percent_of_service" : 0.06 } }, { "kind" : "misc tarriff", "amount" : 2.25 } ] }];
   res.write(JSON.stringify(responseBody));
   res.end();

}).listen(8000);
