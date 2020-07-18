'use strict'


// these methods will cause you issues - 5 objects??  total duplicate.  protoype method  - Roger H
/*
1. get the one constuct to work with form.  DRY CODE
  1.1 create the element on the html page with data (array for all the stores Global Var - push) (what ever 
    variable.push(this) inside the construct.
    method calculate customers
    method make cookies for 14 hours
    method generate self total
    render as a table
    function to calculate hour totals

  1.75 - start to form a table row
2. Get the Form to populate a new store
3. add all the other stores back into the table
4. Sunday - Work on the CSS / 


Do I need it locally or Globally to be able to grab it later! Construtor vs local variable - Merry TA

*/

// =====  Starting with Seattle Store  ==========

// global variable for hours of operations
var hoursOfOp = ['6 am', '7 am', '8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']

function newStore(name, minCustomers, maxCustomers, avgCookies) {
  this.storeName = name;
  this.customerMin = minCustomers;
  this.customerMax = maxCustomers;
  this.avgCookieSales = avgCookies;
  this.storesCookieSoldArray = [];
  this.storesCookieTotalSales = 0
  this.randomCustomerNo = function () {
    return Math.floor(Math.random() * (Math.ceil(this.customerMax) - Math.floor(this.customerMin)) + this.customerMin);
  } 
}
// this works
newStore.prototype.outputStoreName = function () {
  var nameOutput = document.getElementById('outputStoreName-SEA'); //parent
  var nameStoreOutput = document.createElement('li'); // child
  nameStoreOutput.textContent = this.storeName //data from construct
  nameOutput.appendChild(nameStoreOutput)

}
  newStore.prototype.cookiesSoldPerHour = function () {
    
    for (var i = 0; i < 14; i++) {
    this.storesCookieSoldArray[i] = this.randomCustomerNo() * this.avgCookieSales;
    var roundedCookies = Math.floor(this.storesCookieSoldArray[i]);
    this.storesCookieSoldArray[i] = roundedCookies;
      console.log(typeof roundedCookies , typeof this.storesCookieSoldArray)
    }
  }



newStore.prototype.outputStoreStatistics = function () {
  for (var i = 0; i < this.storesCookieSoldArray.length; i++) {
    var storeOutput = document.getElementById('storeStatistics-output-SEA'); // parent
    var storeNameList = document.createElement('li'); // child
    storeNameList.textContent = hoursOfOp[i] + ' ' + this.storesCookieSoldArray[i] //  data from object
    storeOutput.appendChild(storeNameList);
  }
}


var makeNewStore = new newStore('Seattle', 23, 65, 6.3)  // makes new store and passes parameters into the object
// console.log(makeNewStore.storeName + ' avg cookies sales ' + makeNewStore.avgCookieSales()); 

makeNewStore.outputStoreName(); //this puts a dot on the screen and name of store!
makeNewStore.cookiesSoldPerHour();
makeNewStore.outputStoreStatistics();


// storesCookieSoldArray[0].cookieSoldArray();



// var makeNewStore = new newStore('Tokyo', 25, 80, 6.3)
// console.log(makeNewStore.storeName + ' avg cookies sales ' + makeNewStore.avgCookieSales);
// var makeNewStore = new newStore('Boston', 23, 65, 6.3)
// console.log(makeNewStore.storeName + ' avg cookies sales ' + makeNewStore.avgCookieSales);
// var makeNewStore = new newStore('Bar Harbor', 23, 65, 6.3)
// console.log(makeNewStore.storeName + ' avg cookies sales ' + makeNewStore.avgCookieSales);

// var makeNewStore = new newStore('Seal Harbor', 23, 65, 6.3)
// console.log(makeNewStore.storeName + ' avg cookies sales ' + makeNewStore.avgCookieSales);
    
      
// Seattle store information - adding back in one piece at a time


//   this.cookiesSoldPerHour = function () {
//     for (var i = 0; i < 14; i++) {
//       var cookiesSoldThisHour = this.randomCustomerNo() * this.avgCookieSales;
//       var roundedCookies = Math.floor(cookiesSoldThisHour);
//       this.cookieSoldArray[i] = roundedCookies;
//     }
//   }
//   // this.outputStoreName = function () {
//   //   var nameOutput = document.getElementById('outputStoreName-SEA'); //parent
//   //   var nameStoreOutput = document.createElement('li'); // child
//   //   nameStoreOutput.textContent = this.storeName //data from obj
//   //   nameOutput.appendChild(nameStoreOutput);
//   // }
//   this.outputStoreStatistics = function () {
//     for (var i = 0; i < this.cookieSoldArray.length; i++) {
//       var storeOutput = document.getElementById('storeStatistics-output-SEA'); // parent
//       var storeNameList = document.createElement('li'); // child
//       storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
//       storeOutput.appendChild(storeNameList);
//     }
//     this.totalNumberOfCookies = function () {
//       for (var i = 0; i < this.cookieSoldArray.length; i++) {
//         this.storesCookieTotalSales += this.cookieSoldArray[i];
//       }
//       this.outputStoreTotalDailySales = function () {
//         var storeTotalSales = document.getElementById('storeStatistics-output-SEA'); // parent
//         var storeTotalSalesOutput = document.createElement('li'); // child
//         storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
//         storeTotalSales.appendChild(storeTotalSalesOutput);
//       }

//     }
//   }



// var storeStatistics = {
  // storeName: 'Seattle',
  // customerMin: 23,
  // customerMax: 65,
  // avgCookieSales: 6.3,
  // cookieSoldArray: [],
  // storesCookieTotalSales: 0,
  // randomCustomerNo: function () {
  //   return Math.floor(Math.random() * (Math.ceil(this.customerMax) - Math.floor(this.customerMin)) + this.customerMin);
  // },

  // cookiesSoldPerHour: function () {
  // },

  // outputStoreName: function () {
  //   var nameOutput = document.getElementById('outputStoreName-SEA'); //parent
  //   var nameStoreOutput = document.createElement('li'); // child
  //   nameStoreOutput.textContent = this.storeName //data from obj
  //   nameOutput.appendChild(nameStoreOutput);
  // },

  // outputStoreStatistics: function () {
  //   for (var i = 0; i < this.cookieSoldArray.length; i++) {
  //     var storeOutput = document.getElementById('storeStatistics-output-SEA'); // parent
  //     var storeNameList = document.createElement('li'); // child
  //     storeNameList.textContent = hoursOfOp[i] + ' ' + this.cookieSoldArray[i] //  data from object
  //     storeOutput.appendChild(storeNameList);

  //   }

  // },

  // totalNumberOfCookies: function () {
  //   for (var i = 0; i < this.cookieSoldArray.length; i++){
  //     this.storesCookieTotalSales += this.cookieSoldArray[i];
  //    }
    

  // },
  // outputStoreTotalDailySales: function() {
  //   var storeTotalSales = document.getElementById('storeStatistics-output-SEA'); // parent
  //   var storeTotalSalesOutput = document.createElement('li'); // child
  //   storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
  //   storeTotalSales.appendChild(storeTotalSalesOutput);

  // }

// };

// Make the calls for the object to run 

// storeStatistics.cookiesSoldPerHour();
// storeStatistics.totalNumberOfCookies();
// storeStatistics.outputStoreName();
// storeStatistics.outputStoreStatistics();
// storeStatistics.outputStoreTotalDailySales();

//========  New Store ======

// var storeStatistics = {
//   storeName: 'Tokyo',
//   customerMin: 3,
//   customerMax: 24,
//   avgCookieSales: 1.2,
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
//     var nameOutput = document.getElementById('outputStoreName-TYO'); //parent
//     var nameStoreOutput = document.createElement('li'); // child
//     nameStoreOutput.textContent = this.storeName //data from obj
//     nameOutput.appendChild(nameStoreOutput);
//   },

//   outputStoreStatistics: function () {
//     for (var i = 0; i < this.cookieSoldArray.length; i++) {
//       var storeOutput = document.getElementById('storeStatistics-output-TYO'); // parent
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
//     var storeTotalSales = document.getElementById('storeStatistics-output-TYO'); // parent
//     var storeTotalSalesOutput = document.createElement('li'); // child
//     storeTotalSalesOutput.textContent = 'Total: ' + this.storesCookieTotalSales;
//     storeTotalSales.appendChild(storeTotalSalesOutput);

//   }

// };

// Make the calls for the object to run 

// storeStatistics.cookiesSoldPerHour();
// storeStatistics.totalNumberOfCookies();
// storeStatistics.outputStoreName();
// storeStatistics.outputStoreStatistics();
// storeStatistics.outputStoreTotalDailySales(); 