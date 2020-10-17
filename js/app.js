'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

//var myCookies = ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', 'Total: 875 cookies'];

var seattle = {
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHrArray: [],
  seattleEachHourArray: [],
  totalCookies: 0,


  //mdn mathe.random used 
  randomCustomers: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.seattleEachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));

    }
  },
  calcCookiesSoldPerHrArray: function () {
    this.randomCustomers();
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesSoldPerHr = Math.ceil(this.seattleEachHourArray[i] * this.avgCookieSale);
      this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
      this.totalCookies += cookiesSoldPerHr;
      // console.log('calculate cookies per hour: ', cookiesSoldPerHr);
    }
  },
  render: function () {
    this.calcCookiesSoldPerHrArray();
    console.log('render the list')
    var seattle = document.getElementById('seattle');
    var ul = document.createElement('ul');
    ul.textContent = this.name;
    seattle.appendChild(ul);

    for (var i = 0; i < hoursOpen.length; i++) {
      var li = document.createElement('li');
      li.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHrArray[i] + ' cookies';
      ul.appendChild(li);
    }
  
    li = document.createElement('li');
    li.textContent = `total: ${this.totalCookies} cookies`;
    ul.appendChild(li);
  
  }
};

var tokyo = {
  min: 3,
  max: 24,
  avgCookieSale: 1.2,
  cookiesSoldPerHrArray: [],
  tokyoEachHourArray: [],
  totalCookies: 0,


  //mdn mathe.random used 
  randomCustomers: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.tokyoEachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));

    }
  },
  calcCookiesSoldPerHrArray: function () {
    this.randomCustomers();
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesSoldPerHr = Math.ceil(this.tokyoEachHourArray[i] * this.avgCookieSale);
      this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
      this.totalCookies += cookiesSoldPerHr;
      //console.log('calculate cookies per hour: ', cookiesSoldPerHr);
    }
  },
  render: function () {
    this.calcCookiesSoldPerHrArray();
    console.log('render the list')
    var tokyo = document.getElementById('tokyo');
    var ul = document.createElement('ul');
    ul.textContent = this.name;
    tokyo.appendChild(ul);

    for (var i = 0; i < hoursOpen.length; i++) {
      var li = document.createElement('li');
      li.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHrArray[i] + ' cookies';
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `total: ${this.totalCookies} cookies`;
    ul.appendChild(li);
  }
}

var dubai = {
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
  cookiesSoldPerHrArray: [],
  dubaiEachHourArray: [],
  totalCookies: 0,


  //mdn mathe.random used 
  randomCustomers: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.dubaiEachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));

    }
  },
  calcCookiesSoldPerHrArray: function () {
    this.randomCustomers();
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesSoldPerHr = Math.ceil(this.dubaiEachHourArray[i] * this.avgCookieSale);
      this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
      this.totalCookies += cookiesSoldPerHr;
      // console.log('calculate cookies per hour: ', cookiesSoldPerHr);
    }
  },
  render: function () {
    this.calcCookiesSoldPerHrArray();
    // console.log('render the list')
    var dubai = document.getElementById('dubai');
    var ul = document.createElement('ul');
    ul.textContent = this.name;
    dubai.appendChild(ul);

    for (var i = 0; i < hoursOpen.length; i++) {
      var li = document.createElement('li');
      li.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHrArray[i] + ' cookies';
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `total: ${this.totalCookies} cookies`;
    ul.appendChild(li);
  }
}

var paris = {
  min: 20,
  max: 38,
  avgCookieSale: 2.3,
  cookiesSoldPerHrArray: [],
  parisEachHourArray: [],
  totalCookies: 0,


  //mdn mathe.random used 
  randomCustomers: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.parisEachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));

    }
  },
  calcCookiesSoldPerHrArray: function () {
    this.randomCustomers();
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesSoldPerHr = Math.ceil(this.parisEachHourArray[i] * this.avgCookieSale);
      this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
      this.totalCookies += cookiesSoldPerHr;
      // console.log('calculate cookies per hour: ', cookiesSoldPerHr);
    }
  },
  render: function () {
    this.calcCookiesSoldPerHrArray();
    console.log('render the list')
    var paris = document.getElementById('paris');
    var ul = document.createElement('ul');
    ul.textContent = this.name;
    paris.appendChild(ul);

    for (var i = 0; i < hoursOpen.length; i++) {
      var li = document.createElement('li');
      li.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHrArray[i] + ' cookies';
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `total: ${this.totalCookies} cookies`;
    ul.appendChild(li);
  }
}

var lima = {
  min: 2,
  max: 16,
  avgCookieSale: 4.6,
  cookiesSoldPerHrArray: [],
  limaEachHourArray: [],
  totalCookies: 0,


  //mdn mathe.random used 
  randomCustomers: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.limaEachHourArray.push(Math.floor(Math.random() * (this.max, this.min + 1) + this.min));

    }
  },
  calcCookiesSoldPerHrArray: function () {
    this.randomCustomers();
    for (var i = 0; i < hoursOpen.length; i++) {
      var cookiesSoldPerHr = Math.ceil(this.limaEachHourArray[i] * this.avgCookieSale);
      this.cookiesSoldPerHrArray.push(cookiesSoldPerHr);
      this.totalCookies += cookiesSoldPerHr;
      // console.log('calculate cookies per hour: ', cookiesSoldPerHr);
    }
  },
  render: function () {
    this.calcCookiesSoldPerHrArray();
    console.log('render the list')
    var lima = document.getElementById('lima');
    var ul = document.createElement('ul');
    ul.textContent = this.name;
    lima.appendChild(ul);

    for (var i = 0; i < hoursOpen.length; i++) {
      var li = document.createElement('li');
      li.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHrArray[i] + ' cookies';
      ul.appendChild(li);
    }
    li = document.createElement('li');
    li.textContent = `total: ${this.totalCookies} cookies`;
    ul.appendChild(li);
  }
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
console.log(seattle);
console.log(tokyo);
