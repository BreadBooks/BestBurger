var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port:%s", PORT);
});

// var connectionString = "postgres://*USERNAME*:*PASSWORD*@*HOST*:*PORT*/*DATABASE*"

// var pg = require('pg');
// pg.connect(connectionString, function(err, client, done) {
//    client.query('SELECT * FROM burgers', function(err, result) {
//       done();
//       if(err) return console.error(err);
//       console.log(result.rows);
//    });
// });