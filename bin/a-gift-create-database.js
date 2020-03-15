#!/usr/bin/env node
let mysql = require('mysql');
let con = mysql.createConnection({
	host: "localhost",
	user: "agift",
	password: "123456"
});
/**
con.connect(function(err){
	if (err) throw err;
	console.log("Connected");
	con.query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'dbname'",
		function(sqlErr, result){
			if (sqlErr) throw sqlErr;
			console.log(result)});
});
**/
con.connect(function(err){
	if (err){
		return console.error(err.message);
	}
	//Create database
	con.query("CREATE DATABASE agift", function(err, result){
		if (err){
			return console.error(err.message);
		}else{
			console.log("Database created");
		}

	});

	con.end(function(err){
		if (err){
			return console.err(err.message);
		}
		console.log("Closed connection");
	});
});
