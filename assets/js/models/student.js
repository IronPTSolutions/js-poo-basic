class Student extends User {

  constructor(name, lastName, age, grades = []) {
    super(name, lastName, age);
    this.grades = grades;
  }

}
