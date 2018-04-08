/*
============================================
; Title:  Exercise 7.2 - Test
; Author: Professor Krasso, Jared Brown 
; Date:   8 April 2018
; Modified By: Jared Brown
; Description: A short exercise in testing
; applications with Mocha.   
;===========================================
*/ 

var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});