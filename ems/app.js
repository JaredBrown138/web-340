/*
============================================
; Title:  EMS Project
; Author: Professor Krasso, Jared Brown 
; Date:   April 1,  2018
; Description: A Project in which we build
; and employee management system.
;===========================================
*/
const PORT = 8080;

var mongoose = require("mongoose");
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
var Employee = require("./models/employee");

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

//Example Employee to be used later
var employee = new Employee({
    firstName: "Grace",
    lastName: "Hopper"    
})

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page",
        styles: "/styles/index-styles.css"
    });
});

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})