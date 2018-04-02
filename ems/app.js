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

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

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