/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 5 March 2020
; Modified By: Kimberly Pierce
; Description: The singleton pattern
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 3.3") + " \n ");

//create singleton
var DatabaseSingleton = (function(){
  var instance;
  function createInstance(){
    var postgresDatabase = new Object ("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function (){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }

})();

function databaseInit(){
  var databaseInstance1 = DatabaseSingleton.getInstance();
  var databaseInstance2 = DatabaseSingleton.getInstance ();
  console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
}

databaseInit();
