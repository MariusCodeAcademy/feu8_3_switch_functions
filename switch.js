'use strict';
console.log('switch.js file was loaded');

/* 
switch(reiksme) {
  case x:
    // code block; jei reikme === x
    break;
  case y:
    // code block; jei reikme === y
    break;
  default:
    // code block; jei neatitiko nei vienas atvejis
}
*/

let value = 'kazka';
value = 5;
// value = true;
// value = null;

// typeof value
console.log('typeof value ===', typeof value);

// if else nustatyti tipui

// if (typeof value === 'string') {
//   console.log(`${value} is a string`);
// } else if (typeof value === 'number') {
//   console.log(`${value} is a number`);
// } else if (typeof value === 'boolean') {
//   console.log(`${value} is a boolean`);
// } else {
//   console.log(`${value} is not a number, string or boolean`);
// }

// switch nustatyti tipui
switch (typeof value) {
  // case 'string':
  // console.log(`${value} is a string`);
  // break;
  case 'string':
  case 'number':
    console.log(`${value} is a number or a string`);
    break;
  case 'boolean':
    console.log(`${value} is a boolean`);
    break;
  default:
    console.log(`${value} is not a number, string or boolean`);
}

let amzius = 15;

// jei amzius yra iki 18 - vaikas
// jei amzius yra 18 iki 55 - suauges
// jei daugiau nei 56 - paauges

// if (amzius < 18) {
// }

switch (true) {
  case amzius < 18:
    console.log('vaikas');
    break;
  case amzius <= 55:
    console.log('suauges');
    break;
  case amzius > 56:
    console.log('paauges');
    break;
  default:
    console.log('kazkas negerai su amzium');
}
