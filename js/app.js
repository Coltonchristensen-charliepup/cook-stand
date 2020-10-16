'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
var myCookies = ['16 cookies', '20 cookies', '35 cookies', '48 cookies', '56 cookies', '77 cookies', '93 cookies', '144 cookies', '119 cookies', '84 cookies', '61 cookies', '23 cookies', '42 cookies', '57 cookies', 'Total: 875 cookies'];

var seattle = {
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  cookiesSoldPerHr: [],
  totalCookies: 0,
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcCookiesSoldPerHr: function () {
 //for(i = 0; i < hoursOpen; i++){
      //var li = document.createElement('li');
      //li.textContent = hoursOpen[i];
      //ul.appendChild(i);
      //const element = array[i]
    //}
  //}
//}  



//for (i = 0; i < cars.length; i++) {
  //text += cars[i] + "<br>";
//}


  //  function getRandomInt(max) {
  //return Math.floor(Math.random() * Math.floor(max));
  //}

  //console.log(getRandomInt();
  // expected output: 0, 1 or 2

  //console.log(getRandomInt(1));
  // expected output: 0

  //console.log(Math.random());
//}   var img = document.createElement('img');

img.setAttribute('src', 'images/serena.jpeg');
img.setAttribute('alt', `cute picture of ${this.name}: orange and white kitten looking for adoption`);
article.appendChild(img);

}
};