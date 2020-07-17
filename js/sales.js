'use strict'


// these methods will cause you issues - 5 objects??  total duplicate.  protoype method  - Roger H

// =====  Starting with Seattle Store  ==========

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
    var nameOutput = document.getElementById('outputStoreName-SEA'); //parent
    var nameStoreOutput = document.createElement('li'); // child
    nameStoreOutput.textContent = this.storeName //data from obj
    nameOutput.appendChild(nameStoreOutput);
  },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output-SEA'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

  totalNumberOfCookies: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++){
      this.storesCookieTotalSales += this.cookieSoldArray[i];
     }
    

  },
  outputStoreTotalDailySales: function() {
    var storeTotalSales = document.getElementById('storeStatistics-output-SEA'); // parent
    var storeTotalSalesOutput = document.createElement('li'); // child
    storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
    storeTotalSales.appendChild(storeTotalSalesOutput);

  }

};

// Make the calls for the object to run 

storeStatistics.cookiesSoldPerHour();
storeStatistics.totalNumberOfCookies();
storeStatistics.outputStoreName();
storeStatistics.outputStoreStatistics();
storeStatistics.outputStoreTotalDailySales();

//========  New Store ======

var storeStatistics = {
  storeName: 'Tokyo',
  customerMin: 3,
  customerMax: 24,
  avgCookieSales: 1.2,
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
    var nameOutput = document.getElementById('outputStoreName-TYO'); //parent
    var nameStoreOutput = document.createElement('li'); // child
    nameStoreOutput.textContent = this.storeName //data from obj
    nameOutput.appendChild(nameStoreOutput);
  },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output-TYO'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

  totalNumberOfCookies: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++){
      this.storesCookieTotalSales += this.cookieSoldArray[i];
     }
    

  },
  outputStoreTotalDailySales: function() {
    var storeTotalSales = document.getElementById('storeStatistics-output-TYO'); // parent
    var storeTotalSalesOutput = document.createElement('li'); // child
    storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
    storeTotalSales.appendChild(storeTotalSalesOutput);

  }

};

// Make the calls for the object to run 

storeStatistics.cookiesSoldPerHour();
storeStatistics.totalNumberOfCookies();
storeStatistics.outputStoreName();
storeStatistics.outputStoreStatistics();
storeStatistics.outputStoreTotalDailySales(); 



//========  New Store ======

var storeStatistics = {
  storeName: 'Dubai',
  customerMin: 11,
  customerMax: 38,
  avgCookieSales: 3.7,
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
    var nameOutput = document.getElementById('outputStoreName-DXB'); //parent
    var nameStoreOutput = document.createElement('li'); // child
    nameStoreOutput.textContent = this.storeName //data from obj
    nameOutput.appendChild(nameStoreOutput);
  },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output-DXB'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

  totalNumberOfCookies: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++){
      this.storesCookieTotalSales += this.cookieSoldArray[i];
     }
    

  },
  outputStoreTotalDailySales: function() {
    var storeTotalSales = document.getElementById('storeStatistics-output-DXB'); // parent
    var storeTotalSalesOutput = document.createElement('li'); // child
    storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
    storeTotalSales.appendChild(storeTotalSalesOutput);

  }

};

// Make the calls for the object to run 

storeStatistics.cookiesSoldPerHour();
storeStatistics.totalNumberOfCookies();
storeStatistics.outputStoreName();
storeStatistics.outputStoreStatistics();
storeStatistics.outputStoreTotalDailySales(); 



//========  New Store ======

var storeStatistics = {
  storeName: 'Paris',
  customerMin: 20,
  customerMax: 38,
  avgCookieSales: 2.3,
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
    var nameOutput = document.getElementById('outputStoreName-CDG'); //parent
    var nameStoreOutput = document.createElement('li'); // child
    nameStoreOutput.textContent = this.storeName //data from obj
    nameOutput.appendChild(nameStoreOutput);
  },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output-CDG'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

  totalNumberOfCookies: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++){
      this.storesCookieTotalSales += this.cookieSoldArray[i];
     }
    

  },
  outputStoreTotalDailySales: function() {
    var storeTotalSales = document.getElementById('storeStatistics-output-CDG'); // parent
    var storeTotalSalesOutput = document.createElement('li'); // child
    storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
    storeTotalSales.appendChild(storeTotalSalesOutput);

  }

};

// Make the calls for the object to run 

storeStatistics.cookiesSoldPerHour();
storeStatistics.totalNumberOfCookies();
storeStatistics.outputStoreName();
storeStatistics.outputStoreStatistics();
storeStatistics.outputStoreTotalDailySales(); 


//========  New Store ======

var storeStatistics = {
  storeName: 'Lima',
  customerMin: 2,
  customerMax: 16,
  avgCookieSales: 4.6,
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
    var nameOutput = document.getElementById('outputStoreName-LIMA'); //parent
    var nameStoreOutput = document.createElement('li'); // child
    nameStoreOutput.textContent = this.storeName //data from obj
    nameOutput.appendChild(nameStoreOutput);
  },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output-LIMA'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

  totalNumberOfCookies: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++){
      this.storesCookieTotalSales += this.cookieSoldArray[i];
     }
    

  },
  outputStoreTotalDailySales: function() {
    var storeTotalSales = document.getElementById('storeStatistics-output-LIMA'); // parent
    var storeTotalSalesOutput = document.createElement('li'); // child
    storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
    storeTotalSales.appendChild(storeTotalSalesOutput);

  }

};

// Make the calls for the object to run 

storeStatistics.cookiesSoldPerHour();
storeStatistics.totalNumberOfCookies();
storeStatistics.outputStoreName();
storeStatistics.outputStoreStatistics();
storeStatistics.outputStoreTotalDailySales(); 





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

