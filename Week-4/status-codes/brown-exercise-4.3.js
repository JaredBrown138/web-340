/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: A express program that returns
; status codes and error messages
;===========================================
*/ 
const PORT = 8080;

var express = require("express");
var http = require("http");
var app = express();

app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "404: Resource not Found."
    })
});

app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Its fine."
    })
});

app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "This Page has not been implemented."
    })
});

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})