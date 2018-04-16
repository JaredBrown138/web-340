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

var mongoose = require("mongoose");
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var Employee = require("./models/employee");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var csrfProtection = csrf({cookie: true});

var app = express(); 

var mongoDB = "mongodb://emsUser:8FiL352FgnJMhpPvE1om@ds115219.mlab.com:15219/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page",
        styles: "/styles/index-styles.css"
    });
});

app.get("/new", function(req, res){
    res.render("new", {
        title: "New Employee",
        styles: ""
    });
});

app.get("/list", function(req, res){
    Employee.find({},function(error, employees){
        if(error) throw error;
        res.render("list", {
            title:"Employee List",
            employees: employees,
            styles: ""
        });
    });
});

app.post("/process", function(req, res) {
    if (!req.body.txtFirstName || !req.body.txtLastName) {
        res.status(400).send("Entries must have a name");
        return;
    }
    var entryFirstName = req.body.txtFirstName;
    var entryLastName = req.body.txtLastName;
    var employee = new Employee({
        firstName: entryFirstName,
        lastName: entryLastName    
    })
    employee.save(function (error) {
        if (error) throw error;
        console.log("Entries Added: " + entryFirstName + " " + entryLastName);
    });
    res.redirect("/list");
 });

http.createServer(app).listen(PORT, function(){
    console.log("Application started on port " + PORT);
})