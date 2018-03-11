/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: A short exercise in using 
; Morgan for logging http requests
;===========================================
*/ 

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (request, response) {
    response.render("index", {
        message: "Hello there, this is a logging example using Morgan!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});