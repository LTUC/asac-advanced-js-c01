// // Constructor Functions & Prototypes

// // Constructors are models of our data (data model)
// // For data representation
// // To create new object

// const Animal = function(name, legs) {
//   this.name = name;
//   this.legs = legs;
//   // this.eat = function() {
//   //   this.isEating = true;
//   // }
// }
// Animal.prototype.walk = function() {
//   this.isWalking = true;
// }
// Animal.prototype.eat = function (){
//   this.isEating = true;
// }

// let newAnimal = new Animal('sherry',4)
// console.log(newAnimal)
// newAnimal.eat();
// newAnimal.walk();
// console.log(newAnimal)


// function Dog(name,legs,breed) {
//   this.name = name;
//   this.legs = legs;
//   this.breed = breed;
// }

// we're repeating ourselves so let's do sth different using ES5


// const Dog = function(name, legs, breed) {
//   // this.anme = name;
//   // this.legs =legs;
//   Animal.call(this, name, legs); //ES5
//   this.breed = breed
// }
// // Dog.prototype = Object.create(Animal.prototype);
// // // OR
// // Dog.prototype = new Animal();
// let puppy = new Dog('blake', 4, 'husky');
// puppy.eat();
// puppy.walk();
// console.log(puppy);




// // ES6 Classes
class Animal {

    constructor(name, legs) {
      this.name = name;
      this.legs = legs;
    }
  
    walk() {
      this.isWalking = true;
      // console.log(`it's walking`);
    }
  
    eat() {
      this.isEating = true;
    }
  
  }
  
  let sherry = new Animal('sherry', 4);
  sherry.walk();
  sherry.eat();
  console.log(sherry)
  
  class Dog extends Animal { 
  
    constructor(name, legs,breed) {
      super(name, legs);
      this.breed = breed;
    }
  
    speak() {
      console.log('Wooof!');
    }
  
  }
  
  let rosie = new Dog('rosie', 4, 'Husky');
  rosie.walk();
  rosie.eat();
  rosie.speak();
  console.log(rosie);
  
  
  
  
  
  
  