/*
============================================
; Title:  Exercise 2.3
; Author: Proffessir Krasso, Jared Brown 
; Date:   26 Feburary 2018
; Description: Intro to EJS Views!
;===========================================
*/ 

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {
        firstName: "Sammuel",
        lastName: "Greene",
        address: "245 Oak Ave. Small Town, PA 12043"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});

