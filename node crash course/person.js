// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() { 
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }// Una vez escrito esto pues podemos exportar este js a otro js y poner las variables coomo x ej
    // const person1 = new Person('John Doe', 30);(no esta escrito x los otros docs, xk son cosas sencillas)
    //person1.greeting()     abajo
}

module.exports = Person;
