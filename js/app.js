'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

//var myCookies = ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', 'Total: 875 cookies'];

var seattle = {
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHr: [],
  totalCookies: 0,
  
  calcCookiesSoldPerHr: function () {
    for (i = 0; i < hoursOpen.length; i++) {
      var numberCustomers = randomNumber(this.min, this.max); // renders random number
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookieSale);
      this.totalCookies += cookiesPerHour;//x = x + y
      this.cookiesSoldPerHourArray.push(cookiesPerHour)
  }
},
  
  
  
  //  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
  //   randomCustomer: function () {
  
  render: function () {
    this.calcCookiesSoldPerHr();
  
    var article = document.createElement('article');
    parentElement.appendChild(article);
  // creates a article and a unordered list
   
  // var h2 = document.createElement('h2');
  //h2.textContent = this.name;
  //article.appendChild(h2);

    var ul = document.createElement('ul');
    ul.textContent = this.name;
    article.appendChild(ul);

    for (var i = 0; i < hoursOpen.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${hours} is a over priced city for a ok cookie and${this.cookiesSoldPerHourArray[i]}`;
      ul.appendChild(li);
    }
    li = document.createElement('li')
    li.textContent = `Total: ${this.totalDaily} cookies`;
    ul.appendChild(li);
  }
}


// for (i = 0; i < cars.length; i++) {
  // text += cars[i] + "<br>";
  // }

  
  function randomNumber(max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
    // console.log(getRandomInt();{
    // expected output: 0, 1 or 2
    
    // console.log(getRandomInt(1));
    // expected output: 0
    
    // console.log(Math.random());
    // }   var img = document.createElement('img');
      
    var tokyo = {
      min: 3,
      max: 24,
      avgCookieSale: 1.2,
      calcCookiesSoldPerHr,
      cookiesSoldPerHr: [],
      totalCookies: 0,
      
      calcCookiesSoldPerHr: function () {
        for (i = 0; i < hoursOpen.length; i++) {
          var numberCustomers = randomNumber(this.min, this.max); // renders random number
          var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookieSale);
          this.totalCookies += cookiesPerHour;//x = x + y
          this.cookiesSoldPerHourArray.push(cookiesPerHour)
      }
    },
    
    render: function () {
      this.calcCookiesSoldPerHr();
    
      var article = document.createElement('article');
      parentElement.appendChild(article);

      var ul = document.createElement('ul');
      ul.textContent = this.name;
      article.appendChild(ul);
  
      for (var i = 0; i < hoursOpen.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${hours} is a busy city with a ok cookie and${this.cookiesSoldPerHourArray[i]}`;
        ul.appendChild(li);
      }
      li = document.createElement('li')
      li.textContent = `Total: ${this.totalDaily} cookies`;
      ul.appendChild(li);
    }
  }

  function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    


var dubai = {
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
  cookiesSoldPerHr: [],
  totalCookies: 0,
  
  calcCookiesSoldPerHr: function () {
    for (i = 0; i < hoursOpen.length; i++) {
      var numberCustomers = randomNumber(this.min, this.max); // renders random number
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookieSale);
      this.totalCookies += cookiesPerHour;//x = x + y
      this.cookiesSoldPerHourArray.push(cookiesPerHour)
  }
},

render: function () {
  this.calcCookiesSoldPerHr();

  var article = document.createElement('article');
  parentElement.appendChild(article);

  var ul = document.createElement('ul');
  ul.textContent = this.name;
  article.appendChild(ul);

  for (var i = 0; i < hoursOpen.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${hours} is a little hot for a cookie and${this.cookiesSoldPerHourArray[i]}`;
    ul.appendChild(li);
  }
  li = document.createElement('li')
  li.textContent = `Total: ${this.totalDaily} cookies`;
  ul.appendChild(li);
}
}

function randomNumber(max, min) {
return Math.floor(Math.random() * (max - min + 1) + min);
}


var paris = {
  min: 20,
  max: 38,
  avgCookieSale: 2.3,
  cookiesSoldPerHr: [],
  totalCookies: 0,
  
  calcCookiesSoldPerHr: function () {
    for (i = 0; i < hoursOpen.length; i++) {
      var numberCustomers = randomNumber(this.min, this.max); // renders random number
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookieSale);
      this.totalCookies += cookiesPerHour;//x = x + y
      this.cookiesSoldPerHourArray.push(cookiesPerHour)
  }
},

render: function () {
  this.calcCookiesSoldPerHr();

  var article = document.createElement('article');
  parentElement.appendChild(article);

  var ul = document.createElement('ul');
  ul.textContent = this.name;
  article.appendChild(ul);

  for (var i = 0; i < hoursOpen.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${hours} is a busy city that loves a cookie and${this.cookiesSoldPerHourArray[i]}`;
    ul.appendChild(li);
  }
  li = document.createElement('li')
  li.textContent = `Total: ${this.totalDaily} cookies`;
  ul.appendChild(li);
}
}

function randomNumber(max, min) {
return Math.floor(Math.random() * (max - min + 1) + min);
}


var lima = {
  min: 2,
  max: 16,
  avgCookieSale: 4.6,
  cookiesSoldPerHr: [],
  totalCookies: 0,
  
  calcCookiesSoldPerHr: function () {
    for (i = 0; i < hoursOpen.length; i++) {
      var numberCustomers = randomNumber(this.min, this.max); // renders random number
      var cookiesPerHour = Math.ceil(numberCustomers * this.avgCookieSale);
      this.totalCookies += cookiesPerHour;//x = x + y
      this.cookiesSoldPerHourArray.push(cookiesPerHour)
  }
},

render: function () {
  this.calcCookiesSoldPerHr();

  var article = document.createElement('article');
  parentElement.appendChild(article);

  var ul = document.createElement('ul');
  ul.textContent = this.name;
  article.appendChild(ul);

  for (var i = 0; i < hoursOpen.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${hours} is the capital in  peru they enjoy${this.cookiesSoldPerHourArray[i]}`;
    ul.appendChild(li);
  }
  li = document.createElement('li')
  li.textContent = `Total: ${this.totalDaily} cookies`;
  ul.appendChild(li);
}
}

function randomNumber(max, min) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.render();
tokyo.render();
dubai.reder();
paris.render();
lima.render();
