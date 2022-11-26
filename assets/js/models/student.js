class Student extends User {

  constructor(name, lastName, age, grades = []) {
    super(name, lastName, age);
    this.grades = grades;
  }

  greet() {
    return `${super.greet()} and I'm a Student`;
  }

  speak(text) {
    return `${super.speak(text)}. Chimpún!`
  }

}
