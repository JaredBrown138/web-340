/*
============================================
; Title:  Exercise 7.4 - Employee Schema
; Author: Professor Krasso, Jared Brown 
; Date:   8 April 2018
; Modified By: Jared Brown
; Description: Creates a Schema for the 
; employee object for our Mongo DB.   
;===========================================
*/ 
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;


