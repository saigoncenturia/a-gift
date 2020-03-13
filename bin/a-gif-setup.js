#!/usr/bin/env node
const mysql = require('mysql');
const con = mysql.createConnection({
	host: "localhost"});
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
con.connect((err) => {
	if (err) throw err;
	console.log("Connected");
	//Create database
	con.query("CREATE DATABASE 'agift' IF NOT EXIST",
		function(sqlErr, result){
			if (sqlErr) throw sqlErr;
			console.log(result);});
});
