class Person {
  constructor(name = 'Anonymous', age = 18) {
    this.name = name;
    this.age = age;
  }
  getDes() {
    return `Hi , ${this.name} . you are ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major = 'undecided') {
    super(name, age);
    this.major = major;
  }
  getDes() {
    let desc = super.getDes();

    if (this.major) {
      desc += `. Their Major is ${this.major} `;
    }

    return desc;
  }
}

const me = new Student('Ashish', 20, 'CS');

console.log(me.getDes());

const other = new Student();

console.log(other);
