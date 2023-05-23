var User = /** @class */ (function () {
    function User() {
        this.intro = User.skill + ' expect';
    }
    User.skill = 'js';
    return User;
}());
var ukss = new User();
console.log(ukss);
User.skill = 'java';
var hong = new User();
console.log(hong);
// hw1
var Hw1 = /** @class */ (function () {
    function Hw1() {
        this.z = 30;
    }
    Hw1.x = 10;
    Hw1.y = 20;
    return Hw1;
}());
// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y에는 static 키워드가 붙었기 때문에
// User.x 와 같은 식으로만 접근해서 사용할 수 있다.  즉, User의 자식들은 x, y를 사용할 수 console.log('없다 : ',없다)
// 2. private static x는 class 내부에서만 수정이 가능하다.
// 3. public static y는 class 내,외부 상관없이 수정이 가능하다.
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데,
// 약간 범위가 넓어 extends로 복사한 class 내부에서도 사용할 수 있다.
// hw2
var Hw2 = /** @class */ (function () {
    function Hw2() {
    }
    Hw2.addOne = function (num) {
        Hw2.x += num;
    };
    Hw2.printX = function () {
        console.log(Hw2.x);
    };
    Hw2.x = 10;
    Hw2.y = 20;
    return Hw2;
}());
Hw2.addOne(3);
Hw2.addOne(4);
Hw2.printX();
// hw3
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'green');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
