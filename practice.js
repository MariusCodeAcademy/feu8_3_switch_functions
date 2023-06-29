'use strict';
console.log('practice.js file was loaded');

//7. Parašykite funkciją min(a, b), kuri grąžina mažiausią iš dviejų jai perduotų skaičių (a ir b).

//Pastaba: Math.min() naudoti negalima.

function min(a, b) {
  let rez = 'maziausias ';
  if (a < b) {
    rez += a;
    console.log(rez);
    return a;
  } else {
    rez += b;
    console.log(rez);
    return b;
  }
}

function minBeElse(a, b) {
  let rez = 'maziausias ';
  if (a < b) {
    rez += a;
    console.log(rez);
    return a; // nutraukiamas tolimesnis funkcijos vykdymas
  }

  // sita eilute bus pasieka tik jei if salyga yra false
  rez += b;
  console.log(rez);
  return b;
}
minBeElse(10, 50); // => 10
// debugger;
minBeElse(10, -50); // => -50

function minSuMathMin(a, b) {
  return Math.min(a, b);
  // return maz;
}

function say(msg) {
  console.log(msg);
}

say('Labukas');
