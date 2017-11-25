var faker = require('faker');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'happitt',
    database : 'join_us'
});


var data = [];
for(var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
        ]);
}


var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function (error, results) {
  if (error) throw error;
  console.log(results);
});

connection.end();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// var q = 'SELECT COUNT(*) AS total FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// console.log(faker.internet.email());

// console.log(faker.date.past());

// console.log(faker.address.city());

// function generateAddress(){
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }
// generateAddress();

// Root User: happitt