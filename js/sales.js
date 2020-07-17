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
// global variable for hours of operations
var hoursOfOp = ['6 am', '7 am', '8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']

var storeStatistics = {
  storeName: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  avgCookieSales: 6.3,
  cookieSoldArray: [],
  storesCookieTotalSales: 0,
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

  outputStoreName: function () {
    var nameOutput = document.getElementById('outputStoreName'); //parent
    var nameStoreOutput = document.createElement('h3'); // child
    nameStoreOutput.textContent = this.storeName //data from obj
    nameOutput.appendChild(nameStoreOutput);
  },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

  totalNumberOfCookies: function () {
    // console.log('inside totalNumberOfCookies');
    // console.log(this.cookieSoldArray);
    for (var i = 0; i < this.cookieSoldArray.length; i++){
      this.storesCookieTotalSales += this.cookieSoldArray[i];
      // console.log(this.cookieSoldArray[i]);
      // console.log('Total cookie amount: ' + this.storesCookieTotalSales);
      
    }
    

  },
  outputStoreTotalDailySales: function() {
    var storeTotalSales = document.getElementById('storeStatistics-output'); // parent
    var storeTotalSalesOutput = document.createElement('li'); // child
    storeTotalSalesOutput.textContent = 'Total Sales for the Day ' + this.storesCookieTotalSales;
    storeTotalSales.appendChild(storeTotalSalesOutput);

  }

};

// Make the calls for the object to run 

storeStatistics.cookiesSoldPerHour();
storeStatistics.totalNumberOfCookies();
storeStatistics.outputStoreName();
storeStatistics.outputStoreStatistics();
storeStatistics.outputStoreTotalDailySales();


// thes methods will cause you issues - 5 objects??  total duplicate.  protoype method 


// ================  start of forms  ===========================
// the value from avgCustomer is a string so you need to convert it to an integer

var createStoreForm = document.getElementById('buildNewStore');

createStoreForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('submit works!');
  var inputStoreName = event.target.storename.value;
  var inputMinCustomers = event.target.minCustomers.value;
  var inputMaxCustomers = event.target.maxCustomer.value;
  var inputAvgCustomers = event.target.avgCustomer.value;
  alert ('You Inputting ' + inputStoreName + ' ' + inputMinCustomers + ' ' + inputMaxCustomers + ' ' + inputAvgCustomers); 
   
});

