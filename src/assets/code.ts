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
];
