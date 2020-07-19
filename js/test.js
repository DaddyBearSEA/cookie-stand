
// foung this on MDM math.random
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log('random int < 10: ' + getRandomInt(10));
// // expected output: 0, 1 or 2

// console.log('randome int < 5: ' + getRandomInt(5));
// // expected output: 0

// console.log('randome number < 1: ' + Math.random());


newStore.prototype.cookiesSoldPerHour = function () {
  // console.log (typeof this.storesCookieSoldArray);
  for (var i = 0; i < 14; i++) {
    this.storesCookieSoldArray[i] = this.randomCustomerNo() * this.avgCookieSales;
    // console.log(typeof this.storesCookieSoldArray);
    var roundedCookies = Math.floor(this.storesCookieSoldArray[i]);
    // console.log(typeof this.storesCookieSoldArray);
    this.storesCookieSoldArray[i] = roundedCookies;
    console.log(typeof roundedCookies , typeof this.storesCookieSoldArray)
  }
}




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



// //========  New Store ======

// var storeStatistics = {
//   storeName: 'Paris',
//   customerMin: 20,
//   customerMax: 38,
//   avgCookieSales: 2.3,
//   cookieSoldArray: [],
//   storesCookieTotalSales: 0,
//   randomCustomerNo: function () {
//     return Math.floor(Math.random() * (Math.ceil(this.customerMax) - Math.floor(this.customerMin)) + this.customerMin);
//   },

//   cookiesSoldPerHour: function () {

//     for (var i = 0; i < 14; i++) {
//       var cookiesSoldThisHour = this.randomCustomerNo() * this.avgCookieSales;
//       var roundedCookies = Math.floor(cookiesSoldThisHour);
//       this.cookieSoldArray[i] = roundedCookies;
//     }
//   },

//   outputStoreName: function () {
//     var nameOutput = document.getElementById('outputStoreName-CDG'); //parent
//     var nameStoreOutput = document.createElement('li'); // child
//     nameStoreOutput.textContent = this.storeName //data from obj
//     nameOutput.appendChild(nameStoreOutput);
//   },

//   outputStoreStatistics: function () {
//     for (var i = 0; i < this.cookieSoldArray.length; i++) {
//       var storeOutput = document.getElementById('storeStatistics-output-CDG'); // parent
//       var storeNameList = document.createElement('li'); // child
//       storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
//       storeOutput.appendChild(storeNameList);

//     }

//   },

//   totalNumberOfCookies: function () {
//     for (var i = 0; i < this.cookieSoldArray.length; i++){
//       this.storesCookieTotalSales += this.cookieSoldArray[i];
//      }
    

//   },
//   outputStoreTotalDailySales: function() {
//     var storeTotalSales = document.getElementById('storeStatistics-output-CDG'); // parent
//     var storeTotalSalesOutput = document.createElement('li'); // child
//     storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
//     storeTotalSales.appendChild(storeTotalSalesOutput);

//   }

// };

// // Make the calls for the object to run 

// storeStatistics.cookiesSoldPerHour();
// storeStatistics.totalNumberOfCookies();
// storeStatistics.outputStoreName();
// storeStatistics.outputStoreStatistics();
// storeStatistics.outputStoreTotalDailySales(); 


// //========  New Store ======

// var storeStatistics = {
//   storeName: 'Lima',
//   customerMin: 2,
//   customerMax: 16,
//   avgCookieSales: 4.6,
//   cookieSoldArray: [],
//   storesCookieTotalSales: 0,
//   randomCustomerNo: function () {
//     return Math.floor(Math.random() * (Math.ceil(this.customerMax) - Math.floor(this.customerMin)) + this.customerMin);
//   },

//   cookiesSoldPerHour: function () {

//     for (var i = 0; i < 14; i++) {
//       var cookiesSoldThisHour = this.randomCustomerNo() * this.avgCookieSales;
//       var roundedCookies = Math.floor(cookiesSoldThisHour);
//       this.cookieSoldArray[i] = roundedCookies;
//     }
//   },

//   outputStoreName: function () {
//     var nameOutput = document.getElementById('outputStoreName-LIMA'); //parent
//     var nameStoreOutput = document.createElement('li'); // child
//     nameStoreOutput.textContent = this.storeName //data from obj
//     nameOutput.appendChild(nameStoreOutput);
//   },

  outputStoreStatistics: function () {
    for (var i = 0; i < this.cookieSoldArray.length; i++) {
      var storeOutput = document.getElementById('storeStatistics-output-LIMA'); // parent
      var storeNameList = document.createElement('li'); // child
      storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
      storeOutput.appendChild(storeNameList);

    }

  },

//   totalNumberOfCookies: function () {
//     for (var i = 0; i < this.cookieSoldArray.length; i++){
//       this.storesCookieTotalSales += this.cookieSoldArray[i];
//      }
    

//   },
//   outputStoreTotalDailySales: function() {
//     var storeTotalSales = document.getElementById('storeStatistics-output-LIMA'); // parent
//     var storeTotalSalesOutput = document.createElement('li'); // child
//     storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
//     storeTotalSales.appendChild(storeTotalSalesOutput);

//   }

// };

// // Make the calls for the object to run 

// storeStatistics.cookiesSoldPerHour();
// storeStatistics.totalNumberOfCookies();
// storeStatistics.outputStoreName();
// storeStatistics.outputStoreStatistics();
// storeStatistics.outputStoreTotalDailySales(); 





// // ================  start of forms  ===========================
// // the value from avgCustomer is a string so you need to convert it to an integer

// var createStoreForm = document.getElementById('buildNewStore');

// createStoreForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log('submit works!');
//   var inputStoreName = event.target.storename.value;
//   var inputMinCustomers = event.target.minCustomers.value;
//   var inputMaxCustomers = event.target.maxCustomer.value;
//   var inputAvgCustomers = event.target.avgCustomer.value;
//   alert ('You Inputting ' + inputStoreName + ' ' + inputMinCustomers + ' ' + inputMaxCustomers + ' ' + inputAvgCustomers); 
   
// });

