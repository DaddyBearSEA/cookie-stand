'use strict'

console.log('sup - this is sales.js')

// 1.	Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2.	Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 3.	Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// 4.	Store the results for each location in a separate array… perhaps as a property of the object representing that location
// 5.	Display the values of each array as unordered lists in the browser
// 6.	Calculating the sum of these hourly totals; 
// Display the lists on sales.html. 


// =====  Starting with Seattle Store  ==========


// 1.	Stores the min/max hourly customers, and the average cookies per customer, in object properties per Store Site - Done!
// 2.	Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// var storeName = 'Seattle';

var storeStatistics = {
  storeName: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  avgCookieSales: 6.3,
}

console.log('name of store: ' + storeStatistics.storeName);
console.log('name of Min Cust: ' + storeStatistics.customerMin);
console.log('name of Max Cust: ' + storeStatistics.customerMax);
console.log('name of Avg Cookie Sales: ' + storeStatistics.avgCookieSales);