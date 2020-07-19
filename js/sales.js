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
  this.randomCustomerNo = function () {
    return Math.floor(Math.random() * (Math.ceil(this.customerMax) - Math.floor(this.customerMin)) + this.customerMin);
  } 
  this.storesCookieTotalSales = 0
}
newStore.prototype.cookiesSoldPerHour = function () {
  
  for (var i = 0; i < 14; i++) {
    this.storesCookieSoldArray[i] = this.randomCustomerNo() * this.avgCookieSales;
    var roundedCookies = Math.floor(this.storesCookieSoldArray[i]);
    this.storesCookieSoldArray[i] = roundedCookies;
    console.log(typeof roundedCookies, typeof this.storesCookieSoldArray)
  }
}

newStore.prototype.totalNumberOfCookies = function () {
  for (var i = 0; i < this.storesCookieSoldArray.length; i++) {
    this.storesCookieTotalSales += this.storesCookieSoldArray[i];
  }
  var storeTotalSales = document.getElementById('storeStatistics-output-store'); // parent
  var storeTotalSalesOutput = document.createElement('td'); // child
  storeTotalSalesOutput.textContent = this.storesCookieTotalSales;
  storeTotalSales.appendChild(storeTotalSalesOutput);
}



// this works
// TODO: change these to Table Elements for HTML 
// need to grab the table and add the row - wrap the three functions into a wrapper


// make a function to call the Table ID
//Wrap all three functions into the previous function
// call that Table ID Function
newStore.prototype.createNewTableRow = function(){
  var tableStoreStatistics = document.getElementById('beginStoreStatistics'); // parent
  var storeStatisticsRow = document.createElement('tr');  // child 
  // get the parent and use their method to append the child.
  tableStoreStatistics.appendChild(storeStatisticsRow);
  
  // all the other functions you want the storeStatisticRow as the parent

// Assign TR


}
//  Call the method within the 3 methods

newStore.prototype.outputHoursOfOpp = function () {
  for (var i = 0; i < this.storesCookieSoldArray.length; i++) {
    var storeOutput = document.getElementById('storeStatistics-output-store'); // parent
    var storeNameList = document.createElement('th'); // child
    storeNameList.textContent = hoursOfOp[i] //  data from object
    storeOutput.appendChild(storeNameList);
  }
}
// Here is where we are calling methods to print onto the HTML TABLE
// getElementByID

newStore.prototype.outputStoreName = function () {
  var nameOutput = document.getElementById('storeStatistics-output-store'); //parent
  // var newRow = nameOutput.insertRow();
  var nameStoreOutput = document.createElement('td'); // child
  nameStoreOutput.textContent = this.storeName //data from construct
  nameOutput.appendChild(nameStoreOutput);
  
  
}

newStore.prototype.outputStoreStatistics = function () {
 
  for (var i = 0; i < this.storesCookieSoldArray.length; i++) {
    var storeOutput = document.getElementById('storeStatistics-output-store'); // parent
    var storeNameList = document.createElement('td'); // child
    storeNameList.textContent = this.storesCookieSoldArray[i] //  data from method
    storeOutput.appendChild(storeNameList);
  }

}

// TODO: look at the appendrow function for tables. - Merry TA

 // var nameOutput = document.getElementById('beginStoreStatistics'); //parent
  // var newRow = nameOutput.insertRow();
  // var nameStoreOutput = document.createElement('td'); // child
  // nameStoreOutput.textContent = this.storeName
  // newRow.appendChild(storeOutput);

  // hard coded the  TR and then Add a new TR


// makeNewStore.hoursOfOp();   // TODO: not working ??? Hours are hardcoded to HTML

//  ========================  Call to make new store  ==============================
var makeNewStore = new newStore('Seattle', 23, 65, 6.3)  // makes new store and passes parameters into the object

makeNewStore.outputStoreName(); //this puts a dot on the screen and name of store!
makeNewStore.cookiesSoldPerHour();  // calculate number of cookies per hour
makeNewStore.outputStoreStatistics(); //TODO: Problem child call 
makeNewStore.totalNumberOfCookies();
makeNewStore.createNewTableRow();


var makeNewStore = new newStore('Tokyo', 25, 80, 6.3)
makeNewStore.outputStoreName(); 
makeNewStore.cookiesSoldPerHour();
makeNewStore.outputStoreStatistics();
makeNewStore.totalNumberOfCookies();


var makeNewStore = new newStore('Dubai', 11, 28, 3.7)
makeNewStore.outputStoreName(); 
makeNewStore.cookiesSoldPerHour();
makeNewStore.outputStoreStatistics();
makeNewStore.totalNumberOfCookies();


var makeNewStore = new newStore('Paris', 20, 38, 2.3)
makeNewStore.outputStoreName(); 
makeNewStore.cookiesSoldPerHour();
makeNewStore.outputStoreStatistics();
makeNewStore.totalNumberOfCookies();

var makeNewStore = new newStore('Lima', 2, 16, 4.6)
makeNewStore.outputStoreName(); 
makeNewStore.cookiesSoldPerHour();
makeNewStore.outputStoreStatistics();
makeNewStore.totalNumberOfCookies();




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