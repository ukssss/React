var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.test = function (a) {
        console.log("\uC548\uB155 ".concat(a));
    };
    return Person;
}());
var human1 = new Person('ukss');
var human2 = new Person('hong');
// hw1
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타 디 엣지', 4000);
console.log(car1);
console.log(car1.tax());
// hw2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var num = [];
        var str = [];
        param.forEach(function (el) {
            if (typeof el === 'number') {
                num.push(el);
            }
            else if (typeof el === 'string') {
                str.push(el);
            }
            else {
                return;
            }
        });
        this.num = num;
        this.str = str;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
