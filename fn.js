'use strict';
console.log('fn.js file was loaded');

// the functions
console.log('hello');

/* 
function pavadinimas(parametras) {
  // function body
  // kai funkcija randa zodi return ji nustoja
  // vykti ir grazina tai kas po desine nuo return
  // grazina i iskvietimo vieta
   return 5
}
*/

// funkcijos deklaravimas/paskelbimas
function sayHi(userName) {
  // let userName = 'Mike' ale kaipo sitaip
  // function body
  console.log(`Hi, my name is ${userName}`);
}

// funkcijos iskvietimas
// sayHi();
// sayHi('Mike');
// sayHi('Bob');
// sayHi('Jess');

// color = 45;

// sukurti funkcija kuri sudeda 2 skaicius
// ir atspausdina rezultat

function sum(sk1, sk2) {
  // yra lokalus sios funkcijos kintamasis
  let suma = sk1 + sk2;
  console.log(`${sk1} + ${sk2} = ${suma}`);
}
// lokalus kitamieji nepasiekiame uz funkcijos ribu
// console.log('suma ===', suma);
// sk1 ir sk2 reiksmes spriskiriamos iskvietimo metu
// sum(5, 10);
// sum(52, 130);
// sum(15, 510);

// sukurti funkcija kuri turi 3 argumentus
function avg(sk1, sk2, sk3) {
  // ji atspausdina argumentu reikmes ir vidurki
  console.log(sk1, sk2, sk3);
  // patikrinimas
  if (typeof sk1 !== 'number') {
    console.log('prasom pateiki tik skaicius');
    // nutraukti tolimesni funkcijo vygdyma
    return;
  }
  let total = sk1 + sk2 + sk3;
  let avg = total / 3;
  let avgRounded = avg.toFixed(2);
  console.log('avg ===', avgRounded);
  return avg;
}
// avg(1,2,3) => 2
// extra patikrinti ar pirmas argumentas yra skaicius,
// jei ne neskaiciuoti ir pranesti
let vid1 = avg(1, 2, 3);
let vid2 = avg(5, 10, 20);

// koks butu dvieju gautu vidurkiu vidurkis
let vidurkiuVidurkis = (vid1 + vid2) / 2;

console.log('vid1 ===', vid1);
console.log('vid2 ===', vid2);
console.log('vidurkiuVidurkis ===', vidurkiuVidurkis);
let skRez = avg('5', 10, 20);
console.log('skRez ===', skRez);
