#!/usr/bin/env node
const mysql = require('mysql');
const con = mysql.createConnection({
	host: "localhost"});
con.connect(function(err){
	if (err) throw err;
	console.log('Connected');
});
