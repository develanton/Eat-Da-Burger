
//Dependencies
// ===================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride =require("method-override");
var exphbs = require("express-handlebars");

// Set up the Express app
//====================================
var app = express();
var PORT = process.env.PORT || 8080;

// parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// parse application /JSON
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

//===================================

app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Routes to require
//===================================

var routes = require("./controllers/burgers_controller.js");

app.use(routes); 

app.listen(PORT, function(){
    console.log ("Run app at:" +" http://localhost:"+ PORT);
});

