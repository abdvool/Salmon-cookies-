/* eslint-disable no-unused-vars */
'use strict';



let hourswork = ['6am', '7am', '8am', '9am', '10am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {

  branch: 'seattle',
  minicust: 23,
  maxicust: 65,
  avgcookie: 6.3,
  randomcust: [],
  avgcookieP: [],
  total: 0,

  randomcustH: function () {

    for (let i = 0; i < hourswork.length; i++) {

      let min = Math.ceil(this.minicust);
      let max = Math.floor(this.maxicust);
      let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


      this.randomcust.push(randomcust);
    }
  },


  calcAvgcookiep: function() {

    for (let i = 0; i < hourswork.length; i++) {


      this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
      this.total += this.avgcookieP[i];
    }
  },
  render: function(){


    let divContainer = document.getElementById('container');
    let h2el = document.createElement('h2');
    divContainer.appendChild(h2el);
    h2el.textContent = this.branch;




    let ulel = document.createElement('ul');
    divContainer.appendChild(ulel);

    for (let i = 0; i< hourswork.length; i++){

      let liel = document.createElement('li');
      liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
      ulel.appendChild(liel);
    }

    let totalel = document.createElement('li');
    totalel.textContent = 'total ' + this.total + ' cookies';
    ulel.appendChild(totalel);


  }
};




console.log(seattle);


seattle.randomcustH();

seattle.calcAvgcookiep();

seattle.render();









let Tokyo = {

  branch: 'Tokyo',
  minicust: 23,
  maxicust: 65,
  avgcookie: 6.3,
  randomcust: [],
  avgcookieP: [],
  total: 0,

  randomcustH: function () {

    for (let i = 0; i < hourswork.length; i++) {

      let min = Math.ceil(this.minicust);
      let max = Math.floor(this.maxicust);
      let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


      this.randomcust.push(randomcust);
    }
  },


  calcAvgcookiep: function() {

    for (let i = 0; i < hourswork.length; i++) {


      this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
      this.total += this.avgcookieP[i];
    }
  },
  render: function(){


    let divContainer = document.getElementById('container');
    let h2el = document.createElement('h2');
    divContainer.appendChild(h2el);
    h2el.textContent = this.branch;




    let ulel = document.createElement('ul');
    divContainer.appendChild(ulel);

    for (let i = 0; i< hourswork.length; i++){

      let liel = document.createElement('li');
      liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
      ulel.appendChild(liel);
    }

    let totalel = document.createElement('li');
    totalel.textContent = 'total ' + this.total + ' cookies';
    ulel.appendChild(totalel);


  }
};




console.log(Tokyo);


Tokyo.randomcustH();

Tokyo.calcAvgcookiep();

Tokyo.render();







let Dubai = {

  branch: 'Dubai',
  minicust: 23,
  maxicust: 65,
  avgcookie: 6.3,
  randomcust: [],
  avgcookieP: [],
  total: 0,

  randomcustH: function () {

    for (let i = 0; i < hourswork.length; i++) {

      let min = Math.ceil(this.minicust);
      let max = Math.floor(this.maxicust);
      let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


      this.randomcust.push(randomcust);
    }
  },


  calcAvgcookiep: function() {

    for (let i = 0; i < hourswork.length; i++) {


      this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
      this.total += this.avgcookieP[i];
    }
  },
  render: function(){


    let divContainer = document.getElementById('container');
    let h2el = document.createElement('h2');
    divContainer.appendChild(h2el);
    h2el.textContent = this.branch;




    let ulel = document.createElement('ul');
    divContainer.appendChild(ulel);

    for (let i = 0; i< hourswork.length; i++){

      let liel = document.createElement('li');
      liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
      ulel.appendChild(liel);
    }

    let totalel = document.createElement('li');
    totalel.textContent = 'total ' + this.total + ' cookies';
    ulel.appendChild(totalel);


  }
};




console.log(Dubai);


Dubai.randomcustH();

Dubai.calcAvgcookiep();

Dubai.render();



let Paris = {

  branch: 'Paris',
  minicust: 23,
  maxicust: 65,
  avgcookie: 6.3,
  randomcust: [],
  avgcookieP: [],
  total: 0,

  randomcustH: function () {

    for (let i = 0; i < hourswork.length; i++) {

      let min = Math.ceil(this.minicust);
      let max = Math.floor(this.maxicust);
      let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


      this.randomcust.push(randomcust);
    }
  },


  calcAvgcookiep: function() {

    for (let i = 0; i < hourswork.length; i++) {


      this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
      this.total += this.avgcookieP[i];
    }
  },
  render: function(){


    let divContainer = document.getElementById('container');
    let h2el = document.createElement('h2');
    divContainer.appendChild(h2el);
    h2el.textContent = this.branch;




    let ulel = document.createElement('ul');
    divContainer.appendChild(ulel);

    for (let i = 0; i< hourswork.length; i++){

      let liel = document.createElement('li');
      liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
      ulel.appendChild(liel);
    }

    let totalel = document.createElement('li');
    totalel.textContent = 'total ' + this.total + ' cookies';
    ulel.appendChild(totalel);


  }
};




console.log(Paris);


Paris.randomcustH();

Paris.calcAvgcookiep();

Paris.render();







let lima = {

  branch: 'lima',
  minicust: 23,
  maxicust: 65,
  avgcookie: 6.3,
  randomcust: [],
  avgcookieP: [],
  total: 0,

  randomcustH: function () {

    for (let i = 0; i < hourswork.length; i++) {

      let min = Math.ceil(this.minicust);
      let max = Math.floor(this.maxicust);
      let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


      this.randomcust.push(randomcust);
    }
  },


  calcAvgcookiep: function() {

    for (let i = 0; i < hourswork.length; i++) {


      this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
      this.total += this.avgcookieP[i];
    }
  },
  render: function(){


    let divContainer = document.getElementById('container');
    let h2el = document.createElement('h2');
    divContainer.appendChild(h2el);
    h2el.textContent = this.branch;




    let ulel = document.createElement('ul');
    divContainer.appendChild(ulel);

    for (let i = 0; i< hourswork.length; i++){

      let liel = document.createElement('li');
      liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
      ulel.appendChild(liel);
    }

    let totalel = document.createElement('li');
    totalel.textContent = 'total ' + this.total + ' cookies';
    ulel.appendChild(totalel);


  }
};




console.log(lima);


lima.randomcustH();

lima.calcAvgcookiep();

lima.render();






















