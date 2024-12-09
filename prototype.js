function Vehicle(speed) {
  this.speed = speed;
  this.moveForward = function () {
    return `moving forward at ${this.speed}`;
  };
}

// function withut context
// const myTruck = { speed: 0 };
// const myCar = { speed: 0 };
// function drive(speedLimit) {
//   this.speed = speedLimit;
//   console.log(`Driving at ${this.speed}mph.`);
// }
//there's no way to tell drive() what to drive. When you call a func- tion that uses the this keyword but don't specify an object to call the function on (a context, in other words),
//solution 1
//passig an oject to a function - understanding context and this
const myTruck = {
  speed: 0,
};

const myCar = {
  speed: 10,
};

function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
  console.log(`Driving at ${vehicle.speed}mph.`);
}

//solution 2
//SETTING CONTEXT OF THE FUNCTION
//--call();
//When call() is called on a function, that function runs in the context of the object passed to call().
//simply it defining object that will used on funtion.
//After the first parameter, call() accepts any number of additional arguments
function drive(speedLimit) {
  this.speed = speedLimit;
  console.log(`Driving at ${this.speed}mph.`);
}
//now we can tell the context of an object will used

//using call- first param prvide object(as the context) second the rest(param) using comma param
drive.call(myCar, 67); // --> Driving at 67mph.

//using apply - same with call but after context param, the rest(param) is an array

//using bind- with a context object as the first parameter followed by any number of individual arguments
//rather than return the result of calling the function, bind() returns a new function.
//can assign this new function to a variable to create a new callable function that includes its context and data
const driveMyCarOnTheHighway = drive.bind(myCar, 90);

//now we can call like
driveMyCarOnTheHighway();

//passing function from object to another
// const myCars = {
//   speed: 0,
//   operate(speedLimit, callback) {
//     callback(speedLimit);
//     console.log(`myCar is driving at ${this.speed}`);
//   },
// };
function drive(speed) {
  this.speed = speed;
  console.log(`Start driving at ${this.speed}`);
}


myCar.operate(55, drive);
// this have problem -this keyword inside the drive function references the global scope (which is the window object in a browser) in which it exists.
//one way to solve this i bind

const myCars = {
  speed: 0,
  operate(speedLimit, callback) {
    boundCallback = callback.bind(this);
    boundCallback(speedLimit);
    console.log(`myCar is driving at ${this.speed}`);
  },
};

//Passing a function to a hild to change the parent
