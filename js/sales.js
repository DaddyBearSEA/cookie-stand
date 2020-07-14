'use strict'


// 1.	Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2.	Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 3.	Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated set up a count per hour and apply that to a console log and then to the HTML page. (math = avgCookies * randeomNumberOfCustomers = numberOfCookiesPurchased)
// 4.	Store the results for each location in a separate array… perhaps as a property of the object representing that location. Set a key: value creating an Array with the properties of each store per hour. 
// 5.	Display the values of each array as unordered lists in the browser
// 6.	Calculating the sum of these hourly totals; 
// Display the lists on sales.html. 


// =====  Starting with Seattle Store  ==========


// 1.	Stores the min/max hourly customers, and the average cookies per customer, in object properties per Store Site - Done!
// 2.	Uses a method of that object to generate a random number of customers per hour. Objects/Math/random will eventually pass a variable but each store is set to a Max Number.

// var storeName = 'Seattle';

var storeStatistics = {
  storeName: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  avgCookieSales: 6.3,
  randomCustomer: function () {
    return Math.floor(Math.random() * Math.floor(this.customerMax));
  },
  customerPerHour: function () {
    for (var i = 0; i < 14; i++) {

    }
  }

}

 console.log('random number of cust: ' + storeStatistics.randomCustomer());
 

// console.log('name of store: ' + storeStatistics.storeName);
// console.log('name of Min Cust: ' + storeStatistics.customerMin);
// console.log('name of Max Cust: ' + storeStatistics.customerMax);
// console.log('name of Avg Cookie Sales: ' + storeStatistics.avgCookieSales);

// foung this on MDM math.random
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log('random int < 10: ' + getRandomInt(10));
// // expected output: 0, 1 or 2

// console.log('randome int < 5: ' + getRandomInt(5));
// // expected output: 0

// console.log('randome number < 1: ' + Math.random());