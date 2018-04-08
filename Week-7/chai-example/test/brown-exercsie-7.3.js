/*
============================================
; Title:  Exercise 7.3 - Test
; Author: Professor Krasso, Jared Brown 
; Date:   8 April 2018
; Modified By: Jared Brown
; Description: A short exercise in testing
; applications with Mocha + Chai.   
;===========================================
*/ 
var fruits = require("../brown-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});