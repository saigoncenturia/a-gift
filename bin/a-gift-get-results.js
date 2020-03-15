#!/usr/bin/env node
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.minhngoc.net.vn/tra-cuu-ket-qua-xo-so-tinh.html?tinh=1&ngay=14&thang=3&nam=2020';
const mysql = require('mysql');
var  con = mysql.createConnection({
	host: 'localhost',
	user: 'agift',
	password: '123456',
	database: 'agift'});

rp(url)
	.then(function(html){
		const gdb = $('.giaidb', html).text().trim();
		const g1 = $('.giai1', html).text().trim();
		const g2 = $('.giai2', html).text().trim();
		const g3 = $('.giai3', html).text().trim();
		const g4 = $('.giai4', html).text().trim();
		const g5 = $('.giai5', html).text().trim();
		const g6 = $('.giai6', html).text().trim();
		const g7 = $('.giai7', html).text().trim();
		const g8 = $('.giai8', html).text().trim();
		var values = ["1","1",new Date(2020,3,14),g8,g7,g6,g5,g4,g3,g2,g1,gdb];
		con.connect(function(err){
			if (err){
				return console.error(error.message);
			}
			console.log(values);

			var sqlInsert = `INSERT INTO results(pro,zon,wen,g8,g7,g6,g5,g4,g3,g2,g1,gdb) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`;
			con.query(sqlInsert, values, function(err, results, fields){
				if (err){
					return console.error(err.message);
				}
				console.log(results.insertId);
			});

			con.end();
		});
	})
	.catch(function(err){
		return console.error(err.message);
	});

