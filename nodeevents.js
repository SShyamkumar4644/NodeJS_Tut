const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() =>{
    console.log('Please turn off the motor! a gentle reminder');
  }, 3000);//3 second
});//this will run when event fires up
myEmitter.emit('event');

// console.log("this script is running")
// console.log("this script is still running")
// myEmitter.emit('Waterfull');


console.log("this script is running")
myEmitter.emit('Waterfull');
console.log("this script is still running")
