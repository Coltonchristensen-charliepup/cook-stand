'use strict';
var parentElement = document.getElementById('seattle', 'tokyo', 'dubai', 'paris', 'lima');
var cookieTable = document.getElementById('cookie-table');
// console.log(cookieTable);
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var form = document.getElementById('addcookiestand');
// var tfoot = document.getElementById('hourly total per location');

var stores = [];
function City(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  // this.cookiesSoldPerHr = cookiesSoldPerHr;
  this.avgCookieSale = avgCookies;
  this.eachHourArray = [];
  this.totalCookies = 0;
  this.cookiesSoldPerHrArray = [];
  stores.push(this);
  this.render();
}
City.prototype.randomCustomers = function () {
  for (var i = 0; i < hoursOpen.length; i++) {
    this.eachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));
  }
};

City.prototype.calcCookiesSoldPerHrArray = function () {
  this.randomCustomers();
  for (var i = 0; i < hoursOpen.length; i++) {
    var cookiesSoldPerHr = Math.ceil(this.eachHourArray[i] * this.avgCookieSale);
    this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
    this.totalCookies += cookiesSoldPerHr;
    // console.log('calculate cookies per hour: ', cookiesSoldPerHr);
  }
};

City.prototype.render = function () {
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


function header() {
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



function footerRow() {
var tr = document.createElement('tr');
var th = document.createElement('th');
th.textContent = 'hourly total per location';
tr.appendChild(th);
var totalOfTotal = 0;
var hourlyTotal = 0;
for (var i = 0; i < hoursOpen.length; i++){
  for ( var j = 0; j < stores.length; j++){
    hourlyTotal += stores[j].cookiesSoldPerHrArray[i];
    totalOfTotal += stores[j].cookiesSoldPerHrArray[i];
  }
  var thel = document.createElement('th');
  thel.textContent = hourlyTotal;
  tr.appendChild(thel);
}
var thel = document.createElement('th');
thel.textContent = totalOfTotal;
tr.appendChild(thel);
cookieTable.appendChild(tr);
}

function handleform(e) {
  e.preventDefault();
  var location = e.target.storeName.value;
  var min = e.target.minCustomers.value;
  var max = e.target.maxCustomers.value;
  var avg = e.target.average.value;
  new City(location, min, max, avg);
}

new City('Seattle', 23, 65, 2.3);

new City('Tokyo', 3, 24, 1.2);

new City('Dubai', 11, 38, 3.7);

new City('Paris', 20, 38, 2.3);

new City('Lima', 2, 16, 4.6);



  function renderTable() {
    cookieTable.innerHTML = '';
    header();
    console.log(stores);
    for (var i = 0; i < stores.length; i++) {
      stores[i].render();
    }
    footerRow();
  }
  renderTable();
  form.addEventListener('submit', handleform);