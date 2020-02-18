/*
============================================
; Title: Assignment 1.3
; Author: Kimberly Pierce
; Date:   17 February 2020
; Modified By: Kimberly Pierce
; Description: Class Refresher
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 1.3") + " \n ");


function cellPhone(manufacturer, model, color, price){//create cellPhone function with parameters
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
  this.getPrice = function(){//create function to get price
    return "Price: " + this.price;
  };

  this.getModel = function(){//create function to get model
    return "Model: " + this.model;
  };

  this.getDetails = function(){//create function to output all parameters and call two functions
    return "Manufacturer: " + this.manufacturer + "\n" + "Color: " + this.color + "\n" + this.getModel() + "\n" + this.getPrice()
  };

};

//assign parameters to new variable
var newCellPhone = new cellPhone ("Motorola", "Razr V3M", "Red", "$500");

//output results of passing parameters to .getDetails function
console.log(newCellPhone.getDetails());

