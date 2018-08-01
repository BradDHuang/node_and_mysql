
const express = require('express');
const app = express();

const mysql =  require('mysql');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var connection =  mysql.createConnection({
  	host : 'localhost',
  	user : 'happitt',
//   	password: 'adminadmin',
	database: 'users'
});

// var strQuery = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now';
// var strQuery = 'SELECT COUNT(*) FROM users';
// var strQuery = 'INSERT INTO users (id, name, age, sex, title) VALUES (5, "5th One", 22, "male", "Student")';

// var user = {id: 6, name: "6th", age: 34, sex: "male", title: "RA"};
// Can be dynamic with using var.

// app.get("/app/users/getall", (req, res) => {
app.get("/api/users", (req, res) => {
    let q = 'SELECT * FROM users';
    connection.query(q, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

// app.get("/app/users/getone/:id", (req, res) => {
app.get("/api/users/:id", (req, res) => {
    console.log("Getting user with id " + req.params.id);
    // let id = req.body.id;
    // if (res.statusCode >= 100 && res.statusCode < 600){
    //     res.status(res.statusCode);
    // } else {
        // res.status(500);
    // }
    let id = req.params.id;
    
    let strQuery = `SELECT * FROM users WHERE id = ${id}`;
    connection.query(strQuery, function(err, row, fields) {
        if (err) throw err;
        res.send(row);
        // console.log(fields);
    });
});

// app.post("/app/users/insertone", (req, res) => {
app.post("/api/users", (req, res) => {
    let userone = {
        id: req.body.id,
		name: req.body.name,
		age: req.body.age,
		sex: req.body.sex,
		title: req.body.title,
		start_date: req.body.start_date 
    };
    connection.query('INSERT INTO users SET?', userone, function(err, rows) {
        if (err) throw err;
        // res.send('The users records are: ', rows);
        // res.redirect("/app/users/getall");
        res.redirect("/api/users");
    });
});

// app.delete("/app/users/deleteone/:id", (req, res) => {
app.delete("/api/users/:id", (req, res) => {
    console.log("Deleting user with id " + req.params.id);
    // if (res.statusCode >= 100 && res.statusCode < 600){
    //     res.status(res.statusCode);
    // } else {
    //     res.status(500);
    // }
    
    // let id = req.body.id;
    // console.log(req.params.id);
    let id = req.params.id;
    // let strQuery = `DELETE * FROM users WHERE id = ${id}`;
    
    let strQuery = `DELETE FROM users WHERE id = ${id}`;
    
    connection.query(strQuery, function(err, rows, fields) {
        if (err) throw err;
        // res.redirect("/app/users/getall");
        res.redirect("/api/users");
        // console.log(fields);
    });
});

app.get("/", (req, res) => {
    res.send("This is the homepage.");
});

app.listen(8080, function () {
	console.log('App listening on port 8080!');
});


