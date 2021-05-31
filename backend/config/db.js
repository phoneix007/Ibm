const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
	connectionLimit: 50,
	host: process.env.MYSQL_ADDON_HOST,
	user: process.env.MYSQL_ADDON_USER,
	password: process.env.MYSQL_ADDON_PASSWORD,
	database: process.env.MYSQL_ADDON_DB  
}); 

module.exports = db;
