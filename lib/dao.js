/**
 * Created with JetBrains WebStorm.
 * User: hyl
 * Date: 12-4-26
 * Time: 上午10:35
 * To change this template use File | Settings | File Templates.
 */
var mongodb = require("mongodb"),
    util = require('util'),
    Server = mongodb.Server,
    Db = mongodb.Db;
var server = new Server('localhost', 27017, {auto_reconnect:true});

db_connector = new Db("pinyin", server);
exports.insert = function (obj, callback) {
    db_connector.open(function (err, db) {
        err || db.collection('opts', function (err, col) {
            err || col.insert(obj, function (err, result) {
                if (!err) {
                    console.log('insert data success .... data:[  ' + util.inspect(obj) + '  ]');
                    callback();
                }
                db_connector.close();
            })
        })

    });
};

exports.findPy = function (obj,callback) {
    db_connector.close();
    db_connector.open(function (err, db) {
        err || db.collection('py', function (err, col) {
            err || col.find(obj,{limit:10}).toArray(function (err, result) {
                if (!err) {
                    callback(result);
                }
            })
        })

    });
}

exports.find = function (callback) {
    db_connector.open(function (err, db) {
        err || db.collection('opts', function (err, col) {
            err || col.find().toArray(function (err, result) {
                if (!err) {
                    callback(result);
                }
                db_connector.close();
            })
        })

    });
}