var mysql = require("mysql");

// const { connect } = require("../controllers/burgersController.js");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}


connection.connect();
module.exports = connection;