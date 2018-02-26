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

var url = require("url");
var parsedURL = url.parse("https://wwww.nodejs.com/results?page=1");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);