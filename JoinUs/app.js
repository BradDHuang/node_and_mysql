var express = require('express');
 
var app = express();
 
var mysql = require('mysql');

var bodyParser  = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'happitt',
    database : 'join_us'
});

app.post('/register', function(req,res){
 var person = {
     email: req.body.email
 };
 
 connection.query('INSERT INTO users SET ?', person, function(err, result) {
 if (err) throw err;
 console.log(result);
//  res.render("registered!");
//  console.log("test for /register, email is " + req.body.email);
 res.redirect("/");
 });
});

app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var count = results[0].count;
//  var msg = "We have " + results[0].count + " users";
//  res.send(msg);

 res.render('home', {data: count});
//  res.render('home');
 
 });
});

// app.get("/", function(req, res){
//  res.send("HELLO FROM OUR WEB APP!");
// });
 
app.get("/joke", function(req, res){
 var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
 res.send(joke);
});

app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});

app.listen(8080, function () {
 console.log('App listening on port 8080!');
});