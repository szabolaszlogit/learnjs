export const questions: { q: string; a: string; code?: string }[] = [
  {
    q: "Sorold fel a JavaScript egyszerű adattípusait!",
    a: `
    Primitiv (egyszerű) típusok: <br>
      null <br>
      undefined <br>
      boolean <br>
      number<br>
      bigInt<br>
      string<br>
      symbol
  `,
  },
  {
    q: "Mi az <code>undefined</code> a JavaScriptben?",
    a: `Az undefined azt jelzi, hogy egy változóhoz még nem rendeltünk értéket, vagy csak deklarálva volt, de inicializálva még nem.
    <br>
    Olyan primitív adattípus, melyhez az undefined (definiálatlan) érték tartozik. <br>
    A <code>undefined</code> visszatérési értéke: "undefined".`,
    code: `
    var user;  
    console.log(typeof user); //undefined

    // így szándékosan undefined
    user = undefined;
    `,
  },
  {
    q: "Mi a <code>null</code> a JavaScriptben?",
    a: `Egy változó értéke szándékosan nem tartalmaz semmit. Egyike a JavaScript egyszerű adattípusainak, boolean értékeléskor "falsy", azaz hamis. Adattípust és értéket is jelez.
    <br>
    A <code>typeof</code> visszatérési értéke: "object".`,
  },
  {
    q: "Mi a különbség a <code>null</code> és a  <code>undefined</code> között?",
    a: `
    Null: Egy változó értéke null. <br>
    Undefined: Egy változónak még nincs értéke. <br>
    <br> <br>
    A null típusa: object. <br>
    Az undefined típusa: undefined. <br>
    <br> <br>
    Null: a változó értékének hiányát jelzi. <br>
    Undefined: magának a változónak a hiányát jelzi. <br>
    <br> <br>
    Null: 0 értékké konvertálódik a műveletek során. <br>
    Undefined: NaN értékké konvertálódik a műveletek során.
    `,
  },
  {
    q: "Mi a <code>NaN</code> és az <code>isNaN</code>?",
    a: `Az <code>isNaN()</code> funkció meghatározza, hogy egy érték érvénytelen szám-e (NaN = not a number).
    <br>
    Ha az érték NaN, akkor true a visszatérés, ha nem (tehát szám), akkor false.
    `,
    code: `
    isNaN("Hello"); //true
    isNaN("42"); //false
    `,
  },
  {
    q: "Mi a külöbség a == és a === között?",
    a: `=== : szigorú, típus szerinti egyenlőség összehasonlító operátor. <br>
    == : típus átalakítást végző egyenlőség operátor.
    <br><br>
    Két string akkor ===, ha ugyanazon a karaktereket tartalmazzák, ugyanakkora a hosszúk, és ugyanazok a karakterk vannak ugyanazokban a poziciókban.
<br><br>
Két number akkor ===, ha numerikusan egyenlőek.
<br>
Kivétel:
<br>
NaN semmivel sem egyenlő, még a NaN-nal sem.
<br>
-0 === +0
<br><br>
Két boolean ===, ha mindekettő vagy true, vagy mindkettő false.
<br><br>
Két objektum akkor ===, ha ugyanarra az Object-re hivatkoznak.
<br><br>
A Null és az Undefined egyenlőek ha ==, de nem egyenlőek ha ===.
    `,
    code: `
    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    `,
  },
  {
    q: "Hogyan lehet objektumokat létrehozni?",
    a: `Sokféleképpen :).
    `,
    code: `
// 1. Object constructor (nem javasolt)
var object = new Object();

// create metódus (a paraméter a prototípus objektum)
var object = Object.create(null);

// Object literal (a tulajdonság lehet bármilyen adattípus, belértve tömb, funkció is.)
// Ez a módszer könnyű és jó
var object = {
  name: "Micimackó",
  age: 11
 };

 // ES6 class
 class Person {
  constructor(name) {
    this.name = name;
  }
}
var object = new Person("Micimackó");

// singleton: csak egy példány létezhet belőle
var object = new (function () {
  this.name = "Micimackó";
})();

// function constructor
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Micimackó");
    `,
  },
  {
    q: "Mi a prototípus?",
    a: `Új objectumokat hozhatunk létre, a meglevő objektumokból kiindulva. Ez az osztály alapú programozási nyelvek öröklődéséhez hasonló.
    <br>
    Megadhatjuk, hogy mely objektumra hivatkoznuk egy új, objektum létrehozásakor, így egy objektumhierarchia alakítható ki.
    <br>
    De minden objektum tartalmaz egy rejtett hivatkozást egy másik objektumra ( prototípus-objektum), így alakul ki a prototípuslánc. Addig tart, amíg ez a hivatkozás null lesz.
    `,
    code: `
// Létrehozáskor lehet megadni a propotípusobjektumot
var obj1 = Object.create(Object.prototype);
var obj2 = Object.create(obj1);

// obj1 az obj2 prototípusobjektuma?
obj1.isPrototypeOf(obj2) //true

// obj2 prototípusa: obj1
Object.getPrototypeOf(obj2) === obj1 //true

// Az objektum tualajdonságát először az adott objektumnál vizsgáljuk.
// Ha ott nincs, akkor a prototípusában  keressük. Ha ott sincs, akkor annak a prototípusában ..
// Végül undefined jön vissza, tehát a legfelső színten sem található
// Az objektumnál létező tulajdonság értéke 'eltakarja' a láncban a többi prototípus értékét.

var o1 = {
    a: 1,
    b: 2
};
var o2 = Object.create(o1);
o2.b = 22;
o2.c = 3;

//
o2.c === 3  //true - A tulajdonság az o2 objektumon elérhető
o2.a === 1, //true - A tulajdonság a prototípuson (o1) elérhető
o2.toString // A metódus az Object.prototype-on  keresztül elérhető
o2.b === 22 //true -  A tulajdonság eltakarja a prototípus (o1) azonos nevű tulajdonságát
    `,
  },
  {
    q: `<code>call()</code>, <code>apply()</code>, <code>bind()</code>  - mik ezek, különbségek?`,
    a: `
    A koncepció: funkció kölcsönzés.
    <br>    
    A funkciókölcsönzés lehetővé teszi, hogy  egy objektum metódusát egy másik objektumon használjuk.
    <br>
    Másképp fogalmazva: lefuttatnak egy funkciót a megadott kontextussal (context) és paraméterekkel.
    <br>
    Legegyszerübben: van egy adat (objektum), és egy föggvény. A call, apply, bind segítségével a függvény sajátjaként tudja használni az adatot.
    <br>
    A <code>call()</code>, <code>apply()</code> és a <code>bind()</code> a <code>this</code> kulcsszót átállítja a köcsönzött metódusra.
    <br>
    A <code>call()</code> azonnal meghívja a funkciót, a paramétereket egyesével adhatod át.
    <br>
    A <code>apply()</code> azonnal meghívja a funkciót, a paramétereket tömbben adhatod át.
    <br>
    A <code>bind()</code> egy új funkcióthoz létre, amit később meghívhatsz.
    `,
    code: `
let name =  {
  firstname : "Mici",
  lastname : "Mackó",
}

printFullName =  function(lakhely){
  console.log(this.firstname + " " + this.lastname +", " + lakhely)
}

printFullName.call(name,"Pagony");     //Mici Mackó, Pagony

printFullName.apply(name, ["Pagony"]);     //Mici Mackó, Pagony

let printMyName = printFullName.bind(name,"Pagony");
printMyName();       //Mici Mackó, Pagony

// másik példa
var food = { 
  name: "méz",
  weight: "1 kg",

  displayDetails: function(owner){
    console.log(owner + ' reggelije: ' + '' + this.weight + " " + this.name);
  }
}
food.displayDetails('Micimackó'); // Micimackó reggelije: 1 kg méz

var food2 = food.displayDetails('Füles');
food2(); // undefined - ez így nem jó

var food3 = food.displayDetails.call(food, 'Füles');  // Füles reggelije: 1 kg méz

var food4 = food.displayDetails.apply(food, ['Füles']);  // Füles reggelije: 1 kg méz

var food5 = food.displayDetails.bind(food, 'Füles');
food5(); // Füles reggelije: 1 kg méz
    `,
  },
  {
    q: `<code>slice()</code>`,
    a: `A <code>slice()</code> egy tömb kiválasztott elemeivel tér vissza, új tömbként.
  <br>
  Az elemeket a paraméterben átadott kezdőszámtól tartalmazza, egészen a paraméterben megadott zárószámig (de azt az elemet már nem tartalmazza). Ha nincs második paraméter, akkor a tömb végéig tart.
  <br>
  Az eredeti tömb nem változik.
  `,
    code: `
  let szamok = [1, 2, 3, 4, 5];
  let szamok2 = szamok.slice(0, 2); // [1,2]
  let szamok3 = szamok.slice(2, 3); // [3]
  let szamok4 = szamok.slice(4); // [5]
  `,
  },
  {
    q: `<code>splice()</code>`,
    a: `A <code>splice()</code> hozzáad elemek egy tömbhöz, vagy elvesz elemeket egy tömbből és visszatér az elvett elemekkel.
  <br>
  Az első argumentum meghatározza az elvétel/hozzáadás kezdőhelyét.
  <br>
  A második argumentum meghatározza hány elemet kell elvenni.
  <br>
  A további argumentumok hozzáadódnak a tömbhöz.
  Az eredeti tömb megváltozik.
  `,
    code: `
let szamokArray1 = [1, 2, 3, 4, 5];
let szamokArray2 = [1, 2, 3, 4, 5];
let szamokArray3 = [1, 2, 3, 4, 5];
let szamokArray4 = [1, 2, 3, 4, 5];

let szamok1 = szamokArray1.splice(0, 2); //  [1, 2]; eredeti tömb: [3, 4, 5]
let szamok2 = szamokArray2.splice(3); //  [4, 5]; eredeti tömb: [1, 2, 3]
let szamok3 = szamokArray3.splice(3, 1, "a", "b", "c"); // [4]; eredeti tömb: [1, 2, 3, "a", "b", "c", 5]
let szamok4 = szamokArray4.splice(3, 0, "a", "b", "c"); // [4]; eredeti tömb: [1, 2, 3, 'a', 'b', 'c', 4, 5]
  `,
  },
  {
    q: `Mit jelent a first class function?`,
    a: `A JavaScript máshogy tekint a függvényekre, mint a legtöbb programozási nyelv.
    <br>
    A First-class function kifejezéssel azt jelöljük, hogy a nyelvben a függvényeket úgy tudjuk kezelni, mint a változókat. Például:
    <br>
    - paraméterként át lehet adni a függvényt egy másik függvénynek
    <br>
    - egy másik függvény visszatérési értéke lehet
    <br>
    - egy váltzóhoz, mint érték, hozzárendelhető
    <br>
    - futási időben létrehozható.`,
  },
  {
    q: `Mit jelent az arrow (lambda) function?`,
    a: `
    Az arrow funktion alternativája a hagyományos (function expression) funkcióknak.
    <br>
    Lambda function: rövid, névtelen funkció, egy expressionnal.
     <br>
     A JavaScriptben a lambda funkciókat az arrow funkciók segítségével valósítjuk meg.
     <br>
    Az arrow funkció kontextusa az a scope, amiben definiáltuk.
    <br>
    Nincs <code>this</code>, nincs arguments tömb, nincs super.
    <br>
    Objektum metódusaként nem használhatóak.
    `,
    code: `
//function expression
hello = function() {
  return "Hello World!";
}

//arrow function
var hello = () => {return "Hello World!";}

//return elhagyható, alapértelmezettrn visszatérnek (ha csak egy kifejezés van)
var hello = () => "Hello World!";

//paraméterekkel
var hello = (val) => "Hello " + val;
var sum = (a, b) => a + b;

//egy paraméter esetén a zárójel elhagyható
var hello = val => "Hello " + val;
    `,
  },
  {
    q: `Mi a  first order function?`,
    a: `
  First-order function: nem fogad el egy másik funkciót paraméterként, és nem tér vissza funkcióval.
  `,
    code: `
  const firstOrder = () => console.log("Az Első Rend funkciója vagyok.");
  `,
  },
  {
    q: `Mi a higher order function?`,
    a: `
 Higher-order function: elfogad el egy másik funkciót paraméterként, és visszatérhet funkcióval.
 `,
    code: `
  const firstOrder = () => console.log("Az Első Rend funkciója vagyok.");

  const higherOrder = (ReturnFirstOrder) => ReturnFirstOrder();
  higherOrder(firstOrder);
 `,
  },
  {
    q: `Hogyan lehet változókat definiálni?`,
    a: `Négyféleképpen definiálhatunk változókat a JavaScriptben:  var kulcsszó, let kulcsszó, const kulcsszó segítségével, és kulcszó nélkül.
  <br>
  2015-ig a var volt használatban. Scope: function. Hoisted és inicializált. Újra deklarálható: igen.
  <br>
  Kulcsszó nélkül létrehozott változó globális lesz. Ez egy antipattern, nem javasolt a használata. 
  <br>
  Let, const: Scope: block. Hoisted, de nem inicializált. Újra deklarálható: nem.
  <br>
  A  const és  a let a javasolt módszer.
  `,
    code: ``,
  },
  {
    q: `Mi a hoisting és az inicializálás?`,
    a: `A hoisting egy JavaScript működési módszer: a változó, funkció és class deklarácíókat az aktuális scope tetejére mozgatja. Így lehet használni változókat a kódban már azelőtt, hogy deklaráltuk volna őket. A <code>let</code> és a <code>const</code> is hoisted, de nem inicializált (a <code>var</code> viszont inicializált is).
    <br>
    Más szóval, a JavaScript csak a let és a const deklarácíóját emeli fel, de nem az inicialízációt - ezért ez egyesek szerint nem is valódi hoisting.
    <br>
    A jó gyakorlat: a változókat mindig a blokk elején deklaráld.
  `,
    code: `
// var kulcsszóval működik
x = 2
console.log(x) //2
var x

var message;
console.log(message);
message = "A hoist működik.";


// let, const kulcsszóval nem működik (const: syntax error)
x = 2  
console.log(x) //Uncaught ReferenceError: Cannot access 'x' before initialization
let x 
    `,
  },
  {
    q: `Mi az IIFE (Immediately Invoked Function Expression)?`,
    a: `Azonnal meghívunk egy funkciót, amikor defináljuk. EZ éehetőséget ad az adatok védelmére, a változókhoz nem férünk hozzá kivülről.`,
    code: `
    (function () {
      var message = "titok";
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    `,
  },
  {
    q: `Mi a <code>promise</code>?`,
    a: `A promise egy objektum, ami a jövőben tartalmazhat egy értéket: vagy egy megszerzett értéket (resolved value), vagy az okát, amiért nem sikerült megszerezni az értéket.
    <br>
    Három állapota (state) lehet:
    <br>
    Pending: kiinduló állapot, result: undefined.<br>
    Fulfilled: azt jelzi, hogy a kért művelet sikeresen végrehajtódott, result: érték.<br>
    Rejected: a művelet nem tudott befejeződni, errort dob, result: error objektum.<br>
    <br>
    A promiseket asszinkron műveleteknél használjuk. A <code>callback</code> egy alternatívája, nincs 'callback hell', tisztább a kód. 
    `,
    code: `
    //létrehozáss
    const promise = new Promise(function (resolve, reject) {
      // végrehajtódik a kód, ez időbe kerülhet

    });

    //használata
    const promise = new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve("I'm a Promise!");
        }, 5000);
      },
      (reject) => {}
    );
    
    promise.then((value) => console.log(value));


    // másképpen
    let myPromise = new Promise(function(myResolve, myReject) {
      // végrehajtódik a kód, ez időbe kerülhet
      
        myResolve(); // ha sikeres
        myReject();  // ha error
      });
      
      // először meg kell várni, amig végrehajtódik
      myPromise.then(
        function(value) { /* ha sikeres volt */ },
        function(error) { /* ha error volt */ }
      );
    `,
  },
  {
    q: `Mi a <code>callback</code>?`,
    a: `
    Callback function: egy funkciót paraméterként átadunk egy másik funkciónak. Az átadott funkció végrehajtódik a másikban.
   <br>
   Leginkább (de nem kizárólag) asszinkron feladatoknál használatos, amikor az egyik funkciónak várni kell a másik végrahajtódására.
    `,
    code: `

// myFunction = callback, paraméterként átadva
setTimeout(myFunction, 3000);

function myFunction() {
console.log("Hello callback!")
}

// paraméterek használata
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Add meg a neved!");
  callback(name);
}

outerFunction(callbackFunction);

//callback hell: antipattern, kerülendő
async1(function(){
  async2(function(){
      async3(function(){
          async4(function(){
              ....
          });
      });
  });
});
    `,
  },
  {
    q: `Mi a promise chaining (promise .then)?`,
    a: `A <code>then</code> segítségével több, promise-oket használó asszinknron feladatot láncolhatunk össze.`,
    code: `
    new Promise(function (resolve, reject) {
      setTimeout(() => resolve(1), 1000);
    })
      .then(function (result) {
        console.log(result); // 1
        return result * 2;
      })
      .then(function (result) {
        console.log(result); // 2
        return result * 3;
      })
      .then(function (result) {
        console.log(result); // 6
        return result * 4;
      });
    `,
  },
  {
    q: `Mi az async function, és az await?`,
    a: `Az <code>async</code> kulcsszóval deklarált függvény lehetővé teszi az asszinkron, promise alapú függványek deklarálását.
    <br>
    Valójában csak 'syntax sugar' az ES2015 promise felett.
    `,
    code: `
async function apiCall() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //await = szünet, amig visszatér
  console.log(data.json());
}
apiCall();


//async nélkül
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
    `,
  },
  {
    q: `Mi a strict mode?`,
    a: `Az <code>use strict</code> kifejezéssel a program, vagy egy funkció szigorubb működési módba kapcsol.
    <br>
    Több build tool (Webpack, Vite - illetve ezekben a Babel) alapértelmezetten strict módot használ.
    <br>
    Hibát jelez olyan esetkeben is, amelyek egyébként használhatóak a kódban. Pédák:
    `,
    code: `
"use strict"
// deklarálás nélküli változó, objektum létrehozása
a = "hoppá, ez globális lenne"  //error

// delete: funkció, változó, objektum
var x =1
delete x //error

// megkettőzőtt paraméter
function x(p1, p1) {};   //error

// nyolcas számrendszer
let x = 010 //error

// kulcsszavak használata változónévként nem engedett

//stb..
    `,
  },
  {
    q: `Mi a closure?`,
    a: ` A closure segítségével a külsö, vagy a globális változók a lokális környezetből elérhetőek.
    <br>
    Tehát a closure lehetőséget ad a külső funkciók scopejának elérésére. Ez mindig megtörténik automatikusan, mikor létrejön egy funkció.
    `,
    code: `
// külső változó
let a = "Hello ";


function myFunction(name) {
return a + name; //eléri a külső változót
}

//
myFunction('Micimackó') //Hello Micimackó
    `,
  },
];
