//////////////////////////////////// Coding Challenge #2 ///////////////////////////

/* 
1. Re-create challenge 1, but this time using an Es6 class;

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);

4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

*/

// 1. Re-create challenge 1, but this time using an Es6 class;

// Class Expression like function expression
const CarClass = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // adding the two methods:
  accelerate() {
    console.log((this.speed += 10)); // this keyword points to the object, on which the method will be called! => Object would be the Car here => BMW and Mercedes!
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    console.log((this.speed -= 5));
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this.speed / 1.6; // 75 mi/h
    // return this.speed; // 75 mi/h
  }

  set speedUS(speed) {
    const speedInKm = speed * 1.6;
    this.speed = speedInKm / 1.6;
  }
};

const BMW = new CarClass("BMW", 120);

BMW.speedUS = 120;
console.log(BMW);
