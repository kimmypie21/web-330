/*
============================================
; Title: Discussion 1.1
; Author: Kimberly Pierce
; Date: 19 February 2020
; Modified By: Kimberly Pierce
; Description: Constructor Prototypes
;===========================================
*/

const header = require('../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Discussion 1.1 ") + " \n ");

//create the constructor function
function Dog (name, breed, color, size, gender){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.size = size;
    this.gender = gender;
}

//create constructor prototype for common properties and methods
Dog.prototype.species = 'Canine';
Dog.prototype.details = function(){
  return 'Name: ' + this.name + '\n' + 'Breed: ' + this.breed + '\n' + 'Color: '+  this.color + '\n'+ 'Size: ' + this.size + '\n' + 'Gender: '+ this.gender + '\n' + 'Species: ' + this.species
};

//declare variables and pass parameters
var Swidgen = new Dog('Swidgen','Boxer Mix ', 'Fawn & White ', 'Large ', 'Female ');
var Molly = new Dog('Molly', 'Chihuahua Mix', 'Black', 'Small', 'Female');
var Ben = new Dog ('Ben', 'Rat Terrier', 'Tri-color','Small', 'Male' );

//output results
console.log(Swidgen.details());
console.log('\n');
console.log(Molly.details());
console.log('\n');
console.log(Ben.details());

