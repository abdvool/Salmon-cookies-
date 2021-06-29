/* eslint-disable no-unused-vars */
'use strict';



let hourswork = ['6am', '7am', '8am', '9am', '10am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let divContainer = document.getElementById('container')
let tabEl = document.createElement('table')
divContainer.appendChild(tabEl)
let branches = []

function Factory(branch, minicust, maxicust, avgcookie,) {


  this.branch = branch;
  this.minicust = minicust;
  this.maxicust = maxicust;
  this.avgcookie = avgcookie;
  this.randomcust = [];
  this.avgcookieP = [];
  this.total = 0;

  branches.push(this);

}


Factory.prototype.randomcustH = function () {


  for (let i = 0; i < hourswork.length; i++) {

    let min = Math.ceil(this.minicust);
    let max = Math.floor(this.maxicust);
    let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


    this.randomcust.push(randomcust);
  }


}





Factory.prototype.calcAvgcookiep = function () {

this.randomcustH()

  for (let i = 0; i < hourswork.length; i++) {


    this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
    this.total += this.avgcookieP[i];
  }


}



Factory.prototype.render = function(){

  this.calcAvgcookiep()

  let trel = document.createElement('tr')
  let tdel = document.createElement('td')
  tdel.textContent = this.branch
  trel.appendChild(tdel)

  for (let i = 0; i < hourswork.length; i++) {
    
    let tdel = document.createElement('td')
     tdel.textContent = this.avgcookieP[i];
     trel.appendChild(tdel);
    
  }
let totaltd = document.createElement('td')
totaltd.textContent = this.total
trel.appendChild(totaltd);
tabEl.appendChild(trel);
  
  }
  
  



function createTableheader(){

  let trel = document.createElement('tr')
  let thbranches = document.createElement('th')
  trel.appendChild(thbranches);
  thbranches.textContent= 'Branches';
for (let i = 0; i < hourswork.length; i++) {
  let thel = document.createElement('th');
  thel.textContent= hourswork[i];
  trel.appendChild(thel)
  
}
let thedailytotal = document.createElement('th')
trel.appendChild(thedailytotal);
thedailytotal.textContent= 'Daily location total';
tabEl.appendChild(trel);
}


// Lised loops

function creatfooter(){

  let tfel = document.createElement('tr')
  let tdel = document.createElement('td')
  tdel.textContent = 'Totals'
  tfel.appendChild(tdel)
  tabEl.appendChild(tfel)

  let totaloftotal = 0;

  for (let h = 0; h < hourswork.length; h++) {
  let thel = document.createElement('td')
  let sum =0;
  for (let s = 0; s < branches.length;s++ ){
 

    sum += branches[s].avgcookieP[h];
totaloftotal+= sum;
  }
    thel.textContent = sum;
    tfel.appendChild(thel)
    


  }

  let td3 = document.createElement('td')
  tfel.appendChild(td3)
  td3.textContent = totaloftotal;
}



let seattle = new Factory('seattle', 23, 65, 6.3,)
let tokyo = new Factory('Tokyo', 3, 24, 1.2,)
let dubai = new Factory('dubai', 11, 38, 3.7,)
let paris = new Factory('paris', 20, 38, 3.7,)
let lima = new Factory('lima', 2, 16, 4.6,)

 
createTableheader()

seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()
creatfooter()





// let seattle = {

//   branch: 'seattle',
//   minicust: 23,
//   maxicust: 65,
//   avgcookie: 6.3,
//   randomcust: [],
//   avgcookieP: [],
//   total: 0,
// }
  // randomcustH: function () {

  //   for (let i = 0; i < hourswork.length; i++) {

  //     let min = Math.ceil(this.minicust);
  //     let max = Math.floor(this.maxicust);
  //     let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


  //     this.randomcust.push(randomcust);
  //   }
  // },


  // calcAvgcookiep: function() {

  //   for (let i = 0; i < hourswork.length; i++) {


  //     this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
  //     this.total += this.avgcookieP[i];
  //   }
  // },
//   render: function(){


//     let divContainer = document.getElementById('container');
//     let h2el = document.createElement('h2');
//     divContainer.appendChild(h2el);
//     h2el.textContent = this.branch;




//     let ulel = document.createElement('ul');
//     divContainer.appendChild(ulel);

//     for (let i = 0; i< hourswork.length; i++){

//       let liel = document.createElement('li');
//       liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
//       ulel.appendChild(liel);
//     }

//     let totalel = document.createElement('li');
//     totalel.textContent = 'total ' + this.total + ' cookies';
//     ulel.appendChild(totalel);


//   }
// };




// console.log(seattle);


// seattle.randomcustH();

// seattle.calcAvgcookiep();

// seattle.render();











// let Tokyo = {

//   branch: 'Tokyo',
//   minicust: 23,
//   maxicust: 65,
//   avgcookie: 6.3,
//   randomcust: [],
//   avgcookieP: [],
//   total: 0,

//   randomcustH: function () {

//     for (let i = 0; i < hourswork.length; i++) {

//       let min = Math.ceil(this.minicust);
//       let max = Math.floor(this.maxicust);
//       let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


//       this.randomcust.push(randomcust);
//     }
//   },


//   calcAvgcookiep: function() {

//     for (let i = 0; i < hourswork.length; i++) {


//       this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
//       this.total += this.avgcookieP[i];
//     }
//   },
//   render: function(){


//     let divContainer = document.getElementById('container');
//     let h2el = document.createElement('h2');
//     divContainer.appendChild(h2el);
//     h2el.textContent = this.branch;




//     let ulel = document.createElement('ul');
//     divContainer.appendChild(ulel);

//     for (let i = 0; i< hourswork.length; i++){

//       let liel = document.createElement('li');
//       liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
//       ulel.appendChild(liel);
//     }

//     let totalel = document.createElement('li');
//     totalel.textContent = 'total ' + this.total + ' cookies';
//     ulel.appendChild(totalel);


//   }
// };




// console.log(Tokyo);


// Tokyo.randomcustH();

// Tokyo.calcAvgcookiep();

// Tokyo.render();







// let Dubai = {

//   branch: 'Dubai',
//   minicust: 23,
//   maxicust: 65,
//   avgcookie: 6.3,
//   randomcust: [],
//   avgcookieP: [],
//   total: 0,

//   randomcustH: function () {

//     for (let i = 0; i < hourswork.length; i++) {

//       let min = Math.ceil(this.minicust);
//       let max = Math.floor(this.maxicust);
//       let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


//       this.randomcust.push(randomcust);
//     }
//   },


//   calcAvgcookiep: function() {

//     for (let i = 0; i < hourswork.length; i++) {


//       this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
//       this.total += this.avgcookieP[i];
//     }
//   },
//   render: function(){


//     let divContainer = document.getElementById('container');
//     let h2el = document.createElement('h2');
//     divContainer.appendChild(h2el);
//     h2el.textContent = this.branch;




//     let ulel = document.createElement('ul');
//     divContainer.appendChild(ulel);

//     for (let i = 0; i< hourswork.length; i++){

//       let liel = document.createElement('li');
//       liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
//       ulel.appendChild(liel);
//     }

//     let totalel = document.createElement('li');
//     totalel.textContent = 'total ' + this.total + ' cookies';
//     ulel.appendChild(totalel);


//   }
// };




// console.log(Dubai);


// Dubai.randomcustH();

// Dubai.calcAvgcookiep();

// Dubai.render();



// let Paris = {

//   branch: 'Paris',
//   minicust: 23,
//   maxicust: 65,
//   avgcookie: 6.3,
//   randomcust: [],
//   avgcookieP: [],
//   total: 0,

//   randomcustH: function () {

//     for (let i = 0; i < hourswork.length; i++) {

//       let min = Math.ceil(this.minicust);
//       let max = Math.floor(this.maxicust);
//       let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


//       this.randomcust.push(randomcust);
//     }
//   },


//   calcAvgcookiep: function() {

//     for (let i = 0; i < hourswork.length; i++) {


//       this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
//       this.total += this.avgcookieP[i];
//     }
//   },
//   render: function(){


//     let divContainer = document.getElementById('container');
//     let h2el = document.createElement('h2');
//     divContainer.appendChild(h2el);
//     h2el.textContent = this.branch;




//     let ulel = document.createElement('ul');
//     divContainer.appendChild(ulel);

//     for (let i = 0; i< hourswork.length; i++){

//       let liel = document.createElement('li');
//       liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
//       ulel.appendChild(liel);
//     }

//     let totalel = document.createElement('li');
//     totalel.textContent = 'total ' + this.total + ' cookies';
//     ulel.appendChild(totalel);


//   }
// };




// console.log(Paris);


// Paris.randomcustH();

// Paris.calcAvgcookiep();

// Paris.render();







// let lima = {

//   branch: 'lima',
//   minicust: 23,
//   maxicust: 65,
//   avgcookie: 6.3,
//   randomcust: [],
//   avgcookieP: [],
//   total: 0,

//   randomcustH: function () {

//     for (let i = 0; i < hourswork.length; i++) {

//       let min = Math.ceil(this.minicust);
//       let max = Math.floor(this.maxicust);
//       let randomcust = Math.floor(Math.random() * (max - min + 1) + min);


//       this.randomcust.push(randomcust);
//     }
//   },


//   calcAvgcookiep: function() {

//     for (let i = 0; i < hourswork.length; i++) {


//       this.avgcookieP[i] = Math.ceil(this.randomcust[i] * this.avgcookie);
//       this.total += this.avgcookieP[i];
//     }
//   },
//   render: function(){


//     let divContainer = document.getElementById('container');
//     let h2el = document.createElement('h2');
//     divContainer.appendChild(h2el);
//     h2el.textContent = this.branch;




//     let ulel = document.createElement('ul');
//     divContainer.appendChild(ulel);

//     for (let i = 0; i< hourswork.length; i++){

//       let liel = document.createElement('li');
//       liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
//       ulel.appendChild(liel);
//     }

//     let totalel = document.createElement('li');
//     totalel.textContent = 'total ' + this.total + ' cookies';
//     ulel.appendChild(totalel);


//   }
// };




// console.log(lima);


// lima.randomcustH();

// lima.calcAvgcookiep();

// lima.render();





// let divContainer = document.getElementById('container');
// let h2el = document.createElement('h2');
// divContainer.appendChild(h2el);
// h2el.textContent = this.branch;




// let ulel = document.createElement('ul');
// divContainer.appendChild(ulel);

// for (let i = 0; i< hourswork.length; i++){

//   let liel = document.createElement('li');
//   liel.textContent = hourswork[i] + ' ' + this.avgcookieP[i] + ' ' + 'cookies';
//   ulel.appendChild(liel);
// }

// let totalel = document.createElement('li');
// totalel.textContent = 'total ' + this.total + ' cookies';
// ulel.appendChild(totalel);
