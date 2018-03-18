/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: A express program that returns
; a JSON object after a get request.
;===========================================
*/ 
const PORT = 8080;

var express = require("express");
var http = require("http");
var app = express();

app.get("/cars/:id", function(req,res){
    var id = parseInt(req.params.id, 10);

    res.json({
        "model": "Mustang",
        "year": "2015",
        "id": id
    });
});

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})