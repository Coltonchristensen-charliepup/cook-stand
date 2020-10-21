'use strict';
var parentElement = document.getElementById('seattle', 'tokyo', 'dubai', 'paris', 'lima');
var cookieTable = document.getElementById('cookie-table');
// console.log(cookieTable);
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var seattleUl = document.getElementById('seattle');
// var tokyoUl = document.getElementById('tokyo');
// var dubaiUl = document.getElementById('dubai');
// var parisUl = document.getElementById('paris');
// var limaUl = document.getElementById('lima');


//var myCookies = ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', 'Total: 875 cookies'];

function City(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  // this.cookiesSoldPerHr = cookiesSoldPerHr;
  this.avgCookieSale = avgCookies;
  this.eachHourArray = [];
  this.totalCookies = 0;
  this.cookiesSoldPerHrArray = [];
  this.randomCustomers = function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.eachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));
    }
  };

  this.calcCookiesSoldPerHrArray = function () {
    this.randomCustomers();
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesSoldPerHr = Math.ceil(this.eachHourArray[i] * this.avgCookieSale);
      this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
      this.totalCookies += cookiesSoldPerHr;
      // console.log('calculate cookies per hour: ', cookiesSoldPerHr);
    }
  };

  this.render = function () {
    this.calcCookiesSoldPerHrArray();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (var i = 0; i < hoursOpen.length; i++) {
      var td = document.createElement('td');
      td.textContent = hoursOpen[i];
      td.textContent = this.cookiesSoldPerHrArray[i];
      tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.textContent = this.totalCookies;
    tr.appendChild(td);
  
    cookieTable.appendChild(tr);
    }
};

function header(){
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'Salmon cookies';
  tr.appendChild(td);
  for (var i = 0; i < hoursOpen.length; i++) {
    var td = document.createElement('td');
    td.textContent = hoursOpen[i];
    tr.appendChild(td);
  }
  var td = document.createElement('td');
  td.textContent = 'total';
  tr.appendChild(td);

  cookieTable.appendChild(tr);
}
header();

var seattle = new City('Seattle', 23, 65, 2.3);
seattle.render();
var tokyo = new City('Tokyo', 3, 24, 1.2);
tokyo.render();
var dubai = new City('Dubai', 11, 38, 3.7);
dubai.render();
var paris = new City('Paris', 20, 38, 2.3);
paris.render();
var lima = new City('Lima', 2, 16, 4.6);
lima.render();


