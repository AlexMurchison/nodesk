const name = 'name';
const age = 'age';

const person = {
  name: 'Nico',
  age: 38,
  greet: function(name) {
    console.log(`Hi my name is: ${this.name}`);
  },
  birthday: function() {
    this.age++;
  }
}

console.log(person.name);  // Nico
console.log(person[age]);  // 38