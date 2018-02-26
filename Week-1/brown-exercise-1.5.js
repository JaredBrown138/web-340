/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso, Jared Brown 
; Date:   23 Feburary 2018
; Modified By: Jared Brown
; Description: A short exercise in including
; modules.   
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 1.4");
console.log(headerMsg + "\n".repeat(2));

var http = require("http");
function processRequest(req, res){
    var body = "Are you seeing this?";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        "Content-Type": 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);