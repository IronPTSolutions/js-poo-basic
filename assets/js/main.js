console.log('main loaded');

const user = new User('Carlos', 'del Prado', 32);
const student = new Student('Ana', 'del Prado', 36);

console.log(user);
console.log(user.getFullName());

console.log(student);
console.log(student.getFullName());