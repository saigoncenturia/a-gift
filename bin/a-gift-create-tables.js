#!/usr/bin/env node
let mysql = require('mysql');
let con = mysql.createConnection({
	host: "localhost",
	user: "agift",
	password: "123456",
	database: "agift"
});

con.connect(function(err){
	if (err){
		return console.error(err.message);
	}
	console.log("Connected!");
	//Create table `results`
	let createTableResults = `CREATE TABLE IF NOT EXISTS results(
					id int primary key auto_increment,
					pro char(10) not null,
					g8 char(6) not null,
					g7 char(6) not null,
					g6 char(20) not null,
					g5 char(6) not null,
					g4 char(50) not null,
					g3 char(12) not null,
					g2 char(6) not null,
					g1 char(6) not null,
					gdb char(6) not null,
					zon char(1) not null,
					wen date not null)`;
	con.query(createTableResults, function(err, results, fields){
		if (err){
			return console.err(err.message);
		}
	});
	con.end(function(err){
		if (err){
			return console.err(err.message);
		}
		console.log("Closed connection");
	});
});
