/*
============================================
; Title:  Exercise 7.3 - Application
; Author: Professor Krasso, Jared Brown 
; Date:   8 April 2018
; Modified By: Jared Brown
; Description: A short exercise in testing
; applications with Mocha + Chai.   
;===========================================
*/ 
function fruits(str) {
    return str.split(',');
}

module.exports = fruits;