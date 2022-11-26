console.log('main loaded');

const user = new User('Carlos', 'del Prado', 32);
const student = new Student('Ana', 'del Prado', 36);

console.log(user);
console.log(user.getFullName());

console.log(student);
console.log(student.getFullName());

const users = [user, student];
const text = 'Bla bla bla'
for (let user of users) {
  //console.log(user.greet());
  console.log(user.speak(text));
}
