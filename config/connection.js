var mysql = require("mysql");
const connection = require("../../UTA-AUS-FSF-PT-07-2020-U-C-MW/13-MVC/02-Homework/Main/BurgerSolution/config/connection.js");
// const { connect } = require("../controllers/burgersController.js");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "beep",
    database: "burgers_db"
  });
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "beep",
//   database: "burgers_db"
// });

// let connection;
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL); 
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "beep", 
//     database: "burgers_db"
//   });
// };


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

connection.connect();
module.exports = connection;