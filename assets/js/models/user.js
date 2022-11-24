class User {

  constructor(name, lastName, age) {
    this.name = name.trim();
    this.lastName = lastName.trim();
    this.age = age;
    this.email = `${this.name}.${this.lastName.toLowerCase().split(' ').join('.')}@ironhack.com`;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

}

// const user = new User('Carlos ', 'del Prado', 32);
// this = {} 3
// this = { name: 'Carlos' } 4
// this = { name: 'Carlos', lastName: 'del Prado' } 5
// this = { name: 'Carlos', lastName: 'del Prado', fullName: 'Carlos del Prado'  } 5 + 1
// this = { name: 'Carlos', lastName: 'del Prado', age: 32 } 6
// this = { name: 'Carlos', lastName: 'del Prado', age: 32, email: 'carlos.delprado@ironhack.com' } 7

//const ana = new User('Ana', 'del Prado', 36);
// 'del Prado Mota'.split(' ') => ['del', 'Prado', 'Mota'].join('.') => 'del.Prado.Mota'
// 'del Prado Mota'.split('o') => ['del Prad', 'M', 'ta']