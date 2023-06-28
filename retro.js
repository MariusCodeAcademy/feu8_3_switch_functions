'use strict';
console.log('retro.js file was loaded');

// 1. sukurti funkcija atim() kuri gauna 2 argumentus
// ir atima pirma is antro, atspausdina rezultata

function atim(num1, num2) {
  let rez = num2 - num1;
  console.log('atim rez ===', rez);
  return rez;
}
let atimRez = atim(8, 10);
console.log('atimRez ===', atimRez);
// 2. skurti funkcija kuri sudaugina 3 argumentais
// gautus skaicius atspausdina rezultata
function sand(n1, n2, n3) {
  let rez = n1 * n2 * n3;
  console.log('sand rez ===', rez);
  return rez;
}
// debugger;
let rezSand = sand(1, 2, 3);
console.log('rezSand ===', rezSand);
// 3. sukurti funkcija kuri gauna 2 argumentus,
// grazina ju vidurki, patikrinti ar gryzta rez.

function calcAvg(n1, n2) {
  let avg = (n1 + n2) / 2;
  // console log nieko negrazina !!!!!!!!!!!!!!!!
  console.log('avg ===', avg);
  return avg;
}
let arGryzoGraza = calcAvg(atimRez, rezSand);
console.log('arGryzoGraza ===', arGryzoGraza);
// 4. padaryti kad 1 ir 2 funkcijos grazintu
// rezultatus. panaudoti 1 ir 2 funkcijas ir issaugoti
// ju rezultatus ir juos panaudoti kaip reiksmes apskaiciuoti
// 3 funkcija. rezultata prilyginti kintamajam 'galutinis', atspausdinti.

function printToHtml(value, targetId) {
  let destination = document.getElementById(targetId);
  if (!destination) {
    console.log(`${targetId} nerastas, ar tikrai yra htmle toks id?`);
    return;
  }
  destination.innerHTML = value;
}

printToHtml('Beveik pietus', 'out');
printToHtml(arGryzoGraza, 'graza');
