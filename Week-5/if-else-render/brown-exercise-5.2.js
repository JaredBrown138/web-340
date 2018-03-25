/*
============================================
; Title:  Exercise 5.2
; Author: Professor Krasso, Jared Brown 
; Date:   25 March 2018
; Description: A short exercise in using 
; EJS's if else statements
;===========================================
*/
const PORT = 8080;

var express = require("express");
var http = require("http");
var path = require("path");
app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var names = [
  "Johnathan",
  "Adam",
  "George",
  "Mary"
];

app.get("/", function(req, res) {
    res.render("index", {
        nameArray: names
    })
});

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})