/*
============================================
; Title:  Exercise 6.3
; Author: Professor Krasso, Jared Brown 
; Date:   April 1,  2018
; Description: A short exercise in connecting 
; to a mongo database.
;===========================================
*/

var mongoose = require("mongoose");
var mongoDB = "mongodb://emsUser:8FiL352FgnJMhpPvE1om@ds115219.mlab.com:15219/ems";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});