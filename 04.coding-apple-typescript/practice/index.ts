class User {
  name = 'ukss';
  private familyName: string = 'hong';
  constructor(a) {
    this.name = a + this.familyName;
  }

  nameChange() {
    this.familyName = 'kim';
  }
}

let user1 = new User('seonguk');
user1.nameChange();
console.log(user1);

class Person {
  constructor(public name: string) {}
}

let son = new Person('hong');
console.log(son);
