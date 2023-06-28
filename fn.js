'use strict';
console.log('fn.js file was loaded');

// the functions
console.log('hello');

/* 
function pavadinimas(parametras) {
  // function body
}
*/

// funkcijos deklaravimas/paskelbimas
function sayHi(userName) {
  // let userName = 'Mike' ale kaipo sitaip
  // function body
  console.log(`Hi, my name is ${userName}`);
}

// funkcijos iskvietimas
sayHi();
sayHi('Mike');
sayHi('Bob');
sayHi('Jess');

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
sum(5, 10);
sum(52, 130);
sum(15, 510);

// sukurti funkcija kuri turi 3 argumentus
// ji atspausdina argumentu reikmes ir vidurki
// avg(1,2,3) => 2
// extra patikrinti ar pirmas argumentas yra skaicius,
// jei ne neskaiciuoti ir pranesti
