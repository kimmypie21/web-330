/*
============================================
; Title: Assignment 1.4
; Author: Kimberly Pierce
; Date: 20 February 2020
; Modified By: Kimberly Pierce
; Description: Duck Typing
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 1.4 ") + " \n ");

//constructor function for Car
function Car (model){
  this.model = model;
};
//constructor prototype for Car
Car.prototype.start = function(){
  console.log("Car added to the race track!")
};
//constructor function for Truck
function Truck (model, year){
  this.model = model;
  this.year = year;
};
//constructor prototype for Truck
Truck.prototype.start = function(){
  console.log("Truck added to the race track!")
};
//constructor function for Jeep
function Jeep (model, year, color){
  this.model = model;
  this.year = year;
  this.color = color;
};
//constructor prototype for Jeep
Jeep.prototype.start = function(){
  console.log("Jeep added to the race track!")
};

//declare variable for new objects created with constructor functions
var Mustang = new Car ('Mustang');
var Silverado = new Truck ('Silverado', '2019');
var Wrangler = new Jeep ('Wrangler', '2020', 'Red');

//empty array
var racetrack = [];

//function to push values to empty array
function driveIt (vehicle){
  vehicle.start();
  racetrack.push(vehicle);
};

//values to push to array
driveIt(Mustang);
driveIt(Silverado);
driveIt(Wrangler);

//output
console.log('\n');
console.log('-- The following vehicles have been added to the racetrack --');
for (var i=0; i<racetrack.length; i++){
  console.log(racetrack[i].constructor.name + ': ' + racetrack[i].model)
};
