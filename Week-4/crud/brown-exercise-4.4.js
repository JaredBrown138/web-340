/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: A express program that answers
; CRUD requests.
;===========================================
*/ 
const PORT = 8080;

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})