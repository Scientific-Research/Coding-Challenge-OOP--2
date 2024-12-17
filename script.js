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
    this.speed = speed * 1.6; // speed in km/h
    // const speedInKm = speed * 1.6;
    // this.speed = speedInKm / 1.6;
  }
};

const Ford = new CarClass("Ford", 120);

console.log(Ford.speedUS); // 75 mi/h

// We do a little bit acceleration
Ford.accelerate(); // 130 km/h
Ford.accelerate(); // 140 km/h

// and now, we do a brake
Ford.brake(); // 135 km/h

// Setting the speed value in our setter:
Ford.speedUS = 50; // 50 mi/h => 80 km/h
console.log(Ford); // CarClass {make: 'Ford', speed: 80}
