

 randomCustomer: function () {
  return Math.floor(Math.random(this.customerMin) * Math.ceil(this.customerMax));
},

// foung this on MDM math.random
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log('random int < 10: ' + getRandomInt(10));
// // expected output: 0, 1 or 2

// console.log('randome int < 5: ' + getRandomInt(5));
// // expected output: 0

// console.log('randome number < 1: ' + Math.random());