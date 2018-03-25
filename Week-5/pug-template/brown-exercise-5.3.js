/*
============================================
; Title:  Exercise 5.3
; Author: Professor Krasso, Jared Brown 
; Date:   25 March 2018
; Description: A short exercise in using 
; Pug
;===========================================
*/
const PORT = 8080;

var express = require("express");
var http = require("http");
var path = require("path");
app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index", {
        message: "This is a page built using the Pug templating engine! Neat!"
    })
});

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})