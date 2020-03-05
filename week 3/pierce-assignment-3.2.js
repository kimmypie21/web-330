/*
============================================
; Title: Assignment
; Author: Kimberly Pierce
; Date: 5 March 2020
; Modified By: Kimberly Pierce
; Description: The Factory Pattern
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.2 ") + " \n ");


//constructor function for defining new Informix databases
function Informix (properties){
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}
//constructor function for defining new Oracle databases
function Oracle (properties){
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost: 8000";
  this.version = properties.version || 5.7;
}

//skeleton database factory
function DatabaseFactory (){}

//define prototypes
DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function (properties){
  if(properties.databaseType === "informix"){
    this.databaseClass = Informix;
  }else{
    this.databaseClass = Oracle;
  }
  return new this.databaseClass(properties);
};

//create instance of oracle database factory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "oracle",
  username: "Molly",
  password: "Molly",
  server: 12345,
  version: 1.1
});
console.log(oracle instanceof Oracle);
console.log(oracle);

//create instance of informix database factory
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "informix",
  username: "Swidgen",
  password: "Swidgen",
  server: 12345
});
console.log(informix instanceof Informix);
console.log(informix);
