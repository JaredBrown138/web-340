/*
============================================
; Title:  Exercise 3.4
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: Putting it all together
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

app.get("/", function(req, res) {
    res.render("index", {
        message: "home page"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        message: "about page"
    });
});

app.get("/contact", function(req, res) {
    res.render("contact", {
        message: "contact page"
    })
});

app.get("/products", function(req, res) {
   res.render("products", {
       message: "products page"
   });
});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080.");
});