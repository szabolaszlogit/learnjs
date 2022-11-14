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
];
