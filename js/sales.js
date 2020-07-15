'use strict'


// 1.	Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2.	Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// 3.	Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated set up a count per hour and apply that to a RETURN Array? and then to the HTML page. (math = avgCookies * randeomNumberOfCustomers = numberOfCookiesPurchased)
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
  cookieSoldArray: [],
  randomCustomerNo: function () {
    return Math.floor(Math.random() * (Math.ceil(this.customerMax) - Math.floor(this.customerMin)) + this.customerMin);
  },

  cookiesSoldPerHour: function () {

    for (var i = 0; i < 14; i++) {
      var cookiesSoldThisHour = this.randomCustomerNo() * this.avgCookieSales;
      var roundedCookies = Math.floor(cookiesSoldThisHour);
      this.cookieSoldArray[i] = roundedCookies;
}
},

  outputStoreStatistics: function(){

    var storeOutput = document.getElementById('storeStatistics-output'); // parent
    var storeNameList = document.createElement('li'); // child
    storeNameList.textContent = this.storeName; // data from object
    storeOutput.appendChild(storeNameList);

  },

}

storeStatistics.outputStoreStatistics();




 
