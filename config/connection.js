var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'b641550f3136a7',
  password : 'd84c35aa',
  database : 'heroku_a7967f85d117dbb'
});

connection.connect(function(err, result) {
	if (err) throw err;
	console.log("Connected to Database as ID: " + connection.threadId);
});

connection.query("SELECT * FROM hamburger", function(err, result) {
	if (err) throw err;
	console.log(result);
});


module.exports = connection;