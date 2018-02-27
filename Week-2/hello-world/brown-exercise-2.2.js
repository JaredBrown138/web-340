/*
============================================
; Title:  Exercise 2.2
; Author: Proffessir Krasso, Jared Brown 
; Date:   26 Feburary 2018
; Description: Intro to Express
;===========================================
*/ 

var express = require("express");
var http = require("http");

var app = express();

app.use(function(req, res){
    console.log("In comes a request to:" + req.url);
    res.end("Hello World");
});

http.createServer(app).listen(8080);