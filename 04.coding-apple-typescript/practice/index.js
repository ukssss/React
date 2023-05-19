var User = /** @class */ (function () {
    function User(a) {
        this.name = 'ukss';
        this.familyName = 'hong';
        this.name = a + this.familyName;
    }
    User.prototype.nameChange = function () {
        this.familyName = 'kim';
    };
    return User;
}());
var user1 = new User('seonguk');
user1.nameChange();
console.log(user1);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var son = new Person('hong');
console.log(son);
