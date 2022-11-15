export const questions: { q: string; a: string; code?: string }[] = [
  {
    q: `    
    <code><pre>
    var member = new Person("Peter", "20", "UK",);
    console.log(member);
    
    function Person(name, age,country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    </pre></code>
    Mi a kimenet?    
    <br>
    1: Undefined
    <br>
    2: ReferenceError
    <br>
    3: {name: 'Peter', age: '20', country: 'UK'}
    <br>
    4: null
    `,

    a: `
    3: {name: 'Peter', age: '20', country: 'UK'}
    <br>
    A hoisting a funkciókra is érvényes, ezért a <code>funcion Person()</code> deklarálási helye is mindegy.
  `,
  },
  {
    q: `
    <code><pre>
    function foo() {
      let x = (y = 0);
      x++;
      y++;
      return x;
    }
    
    console.log(foo(), typeof x, typeof y);
    </pre></code>
    1: 1, undefined, undefined
    <br>
    2: ReferenceError: X is not defined
    <br>
    3: 1, undefined, number
    <br>
    4: 1, number, number
    `,
    a: `3: 1, undefined, number
    <br>
    A <code>foo()</code> lefut, és visszaadja: 1.
    <br>
    A <code>let x</code> az lokális változó, a blokkon belül él, ezért undefined.
    <br>
    Az y, mivel kulcsszó nélkül volt deklarálva, akaratlanul is globális változó lett, így mindenhonnan elérhető.
    `,
  },
  {
    q: `
    <code><pre>
    function main() {
      console.log("A");
      setTimeout(function print() {
        console.log("B");
      }, 0);
      console.log("C");
    }
    main();
    </pre></code>
    1: A, B,  C
    <br>
    2: B, A,  C
    <br>
    3: A, C
    <br>
    4: A, C, B
    <br>
    `,
    a: `
    4: A, C, B
    <br>
    Az evenlt loop működése alapján alőször a szinkron folyamatok futnak le, és csak aztán kezdődnek az asszinkron folyamatok. 
    A <code>setTiemout()</code> miatt az asszinkron kód csak a szinkronosak után indul el.
    `,
  },
  {
    q: ` Mi lesz ebből? <code><pre>[..."Micimackó"];</pre> </code>  `,
    a: ` ['M', 'i', 'c', 'i', 'm', 'a', 'c', 'k', 'ó'].
    <br>
A stingeken végig lehet iterálni, és a spread operátor egy tömbön belül minden iterálható elemből létrehoz egy elemet.
    `,
  },
  {
    q: ` Mi lesz ebből? <code><pre>console.log("Tanulj JS-t"[0]);</pre> </code>  `,
    a: ` T.
    <br>
   A "T" a string nulladik eleme.
    `,
  },
  {
    q: `Ez az egyenlőség <code><pre>0.1 + 0.2 === 0.3 // true?</pre></code>`,
    a: `Nem, ez <code>false.</code>
    <br>
    A lebegőpontos számok bináris ábrázolása miatt a két szám összeadásának végeredménye: 0.30000000000000004.
    `,
  },
  {
    q: `<code><pre>
  var y = 1;
  if (function f() {}) {
    y += typeof f;
  }
  console.log(y);
  </pre></code>
  `,
    a: `Az eredmény: <code>1undefined</code>.
<br>
A feltételvizsgálat eredménye mindig true, mert létrejön a függvény. Azonban, nincs deklarálva, ezért undefined, és a típusa is undefined.
  <br>
  Így viszont: 1function, csakhogy a b globális változó lett, ami nem jó.  
`,
    code: `
var y = 1;
if (b = function f() {}) {
    y += typeof b;
  }
console.log(y);`,
  },
  {
    q: `<code><pre>
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
</pre></code>
`,
    a: `Az eredmény: <code>[empty, 'b', 'c', 'd'], undefined, 4</code>
  <br>
  Bizonyos böngészőkben: <code>[undefined, 'b', 'c', 'd'], undefined, 4</code>.
  <br> Sőt, magyarul (Chrome): <code>[üres, 'b', 'c', 'd'], undefined, 4</code>
  <br>
  A <code>delete</code> törli a tulajdonságot, de nem indexel újra, nem változik a tömb hossza.
  `,
  },
  {
    q: `<code><pre>
  const obj = {
    prop1: function () {
      return 0;
    },
    prop2() {
      return 1;
    },
    ["prop" + 3]() {
      return 2;
    },
  };
  
  console.log(obj.prop1());
  console.log(obj.prop2());
  console.log(obj.prop3());
  </pre></code>`,
    a: `0,1,2. A prop1 egy hagyományosan létrehozott függvény, a prop2 és prop3 viszont ES6-os, rövidített forma.`,
  },
  {
    q: `<code><pre>
    console.log(1 < 2 < 3);
    console.log(3 > 2 > 1);
</pre></code>`,
    a: ` `,
    code: `
true false

// balról jobbra hajtódik végre, az 1 true értéknek felel meg boolean összehasonlításban
console.log(1 < 2 < 3);  // 1 < 2: true
console.log(true < 3); // true: 1 -> 1 < 3
console.log(1 < 3); 
True

console.log(3 > 2 > 1); //3 > 2: true
console.log(true > 1); // 1 > 1
console.log(1 > 1); 
False
  `,
  },
  {
    q: `<code><pre>

  // nem strict mode
  function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);
  </pre></code>`,
    a: `3, 2, 3
  <br>
  Nem strict módban, engedéylezett a duplikált paraméternév. Azonban, itt a harmadik paraméter felülírja az elsőt.
  `,
  },
  {
    q: `<code><pre>
    const printNumbersArrow = (first, second, first) => {
      console.log(first, second, first);
    };
    printNumbersArrow(1, 2, 3);
    </pre></code>`,
    a: `Hiba. SyntaxError: Duplicate parameter name not allowed in this context
    <br>
    Az arrow funkcióban nem engedélyezett a duplikált paraméter.
    `,
  },
  {
    q: `
    <code><pre>
    const arrowFunc = () => arguments.length;
    console.log(arrowFunc(1, 2, 3));
    </pre></code>`,
    a: `Hiba: ReferenceError: arguments is not defined.
    <br>
    Az arrow funkciónál nincs arguments, super, this, new.target.`,
    code: `
    //de így működhet
    const arrowFunc = (...args) => args.length;
    console.log(arrowFunc(1, 2, 3));
    `,
  },
  {
    q: `
    <code><pre>
    console.log(String.prototype.trimLeft.name === "trimLeft");
    console.log(String.prototype.trimLeft.name === "trimStart");
    </pre></code>`,
    a: `False, True
    <br>
    A valódi név <code>trimStart</code>, ez szerepel a propotípusnál. A <code>trimLeft</code> név csak kompatibilitási okokból van megőrizve.`,
  },
  {
    q: `
    <code><pre>
    console.log(Math.max());
    </pre></code>`,
    a: `-Infinity
    <br>
    Paraméterek nélkül a függvény a legkisebb értéket adja vissza.`,
  },
  {
    q: `
    <code><pre>
    console.log(10 == [10]);
    console.log(10 == [[[[[[[10]]]]]]]);
    </pre></code>`,
    a: `True, True. Nem számít, hány [] van. Ez történik:
    <br>
    `,
    code: `
    10 === Number([10].valueOf().toString()); // 10
    `,
  },
  {
    q: `
    <code><pre>
    console.log(10 + "10");
    console.log(10 - "10");
    </pre></code>`,
    a: `1010, 0
    <br>
    A + jel stringeknél és számoknál is értelmezhető. Ha bármelyik operandus string, akkor megpróbálja a kettőt összefűzni.
    <br>
    A - jel után viszont megpróblja az operandusokat számként kezelni.`,
  },
  {
    q: `
    <code><pre>
    console.log([0] == false);
    </pre></code>`,
    a: `
    True. Ez történik:`,
    code: `Number([0].valueOf().toString())`,
  },
  {
    q: `
    <code><pre>
    console.log([1, 2] + [3, 4]);
    </pre></code>`,
    a: `1,23,4
    <br>
    A + jel nem értelmezehtő tömbökön. Ezért stringé konvertálódnak, és kezelődnek.`,
  },
  {
    q: `
    <code><pre>
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const name = new Set("Micimackó");
console.log(browser);
    </pre></code>`,
    a: `{1, 2, 3, 4}, {{'M', 'i', 'c', 'm', 'a', 'k', 'ó'}
    <br>
    A <code>Set</code> egyedi értékek gyűjteménye, valamint kisbetű-nagybetű érzékeny adatstruktúra.
    `,
  },
  {
    q: `
    <code><pre>
    console.log(NaN === NaN);
    </pre></code>`,
    a: `False.
    <br>
    A IEEE 754 spec standard alapján ez van.`,
  },
  {
    q: `
    <code><pre>
  let numbers = [1, 2, 3, 4, NaN];
  console.log(numbers.indexOf(NaN));
    </pre></code>`,
    a: `-1
    <br>
    Az <code>indexOf()</code> === összehasonlítást használ. A szabványok alapján a NaN nem egyenlő még önmaghával sem. De:`,
  code:`
  let numbers = [1, 2, 3, 4, NaN];
  
  console.log(numbers.findIndex(Number.isNaN)); // 4
  
  console.log(numbers.includes(NaN)); // true`
  },
  {
    q: `
    <code><pre>
    
    </pre></code>`,
    a: ``,
  },
];
