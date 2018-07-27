

var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database: "burger_db"
});

connection.connect(function(err){
    if(err){
        console.error("Error connecting: "+ err.stack);
        return;
    }
    console.log("connected as id:" + connection.threadId);
});

module.exports = connection;