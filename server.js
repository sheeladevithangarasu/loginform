
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      //console.log( data );
      console.log("list user is called")
      res.end( data );
   });
})

app.get('/addUser', function (req, res) {
   fs.readFile( __dirname + "/" + "tharun.html", 'utf8', function (err, data) {
      
      //console.log( data );
      console.log("add user is called ,,,")
      res.end( data );
   });
})
app.get('/login', function(req,res) {
   fs.readFile(__dirname + "/" + "loginform.html", 'utf8', function (err,data) {
      console.log("home page is shown...")
      res.end( data );
   });
})


app.get('/test', function (req, res) {
   res.writeHead(200,{'Content-type':'text/plain'});
   res.write("Welcome to Thangarasu.. ha ha... eppudi. Tharun..");
   res.end("Thank you");
}).listen(8081);
