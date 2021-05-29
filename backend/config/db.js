const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
	connectionLimit: 50,
	host: "b2nygqlad3hcvrrx5o9q-mysql.services.clever-cloud.com",
	user: "uy8oj7c65lss8hw3",
	password:"ucs8ji3zv3zC9z4WBuYT",
	database:"b2nygqlad3hcvrrx5o9q"
});

module.exports = db;
