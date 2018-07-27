
var con = require("./connection.js");



var orm = {

    selectAll: function (tableInput, cb) {
        con.query("SELECT * FROM " +tableInput+";", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (tab, vals,cb) {
        con.query("INSERT INTO "+tab+ "(burger_name) VALUES(' "+vals+"');" ,function (err, results) {
            if (err) throw err;
            console.log('changed ' + results.changedRows + ' rows');
            cb(results);
        })

    },

    updateOne: function (tab, val, cb) {
        con.query("UPDATE "+tab+" SET devoured=true WHERE id = "+val+ " ;", function(err, result){
            if(err)throw err;
            cb(result);
        });
    }
    
};


module.exports = orm;
