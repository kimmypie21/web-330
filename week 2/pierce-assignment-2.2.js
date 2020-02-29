/*
============================================
; Title: Assignment 2.2
; Author: Kimberly Pierce
; Date: 29 February 2020
; Modified By: Kimberly Pierce
; Description: Prototypes
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 2.2") + " \n ");

//The code I created before watching the video as I thought the written instructions indicated is presented first.
//The video tutorial instructions seemed different than the written instructions. The code I wrote
//after watching the video tutorial is below.

//create object literal w/getAge function
var person1 = {
  age: '39',
  getAge: function () {
    return this.age;
  }
};

//the written instructions indicated to pass the getAge function into the second object literal created
//the written instructions also indicated to define an age and fullname function within the second object literal
var name = {
  fullName: 'Kimberly Pierce',
  getName: function (){
    return "The person's name is " + this.fullName + "The person's name is " + person.getAge();
  }

};
//return results
console.log("The person's age is " + person1.getAge());
console.log("The person's name is " + name.fullName);

console.log(" \n ")

//This is the code I wrote after watching the video tutorial

//create object literal but not supplying any values as it is a prototype object
var person = {
  getAge: function () {
    return this.age;
  }
};

//create new instance of the person object and pass in values, did not pass the getAge function as
//the written instructions indicated, but the video tutorial did not
var kimberly = Object.create (person, {
  'age': {'value': '39' },
  'fullName': {'value': 'Kimberly Pierce'}
});
//return results
kimberly.getAge();
console.log("The person's full name is " , kimberly.fullName);
console.log("The person's age is ", kimberly.age);





