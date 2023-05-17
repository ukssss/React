var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 5, 3, 5, 6, 6);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = {
    student: true,
    age: 26,
}, student = _b.student, age = _b.age;
var 오브젝트 = { student: true, age: 26 };
function 함수2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수2({ student: true, age: 26 });
// hw1
function hw1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var max = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var i = a_1[_a];
        if (max <= i)
            max = i;
    }
    console.log("hw1 : ".concat(max));
}
hw1(1, 2, 3, 4);
// hw2
function hw2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log("hw2 : ".concat(user, ", ").concat(comment, ", ").concat(admin));
}
hw2({ user: 'kim', comment: [3, 5, 4], admin: false });
// hw3
function hw3(_a) {
    var cnt = _a[0], product = _a[1], status = _a[2];
    console.log("hw3 : ".concat(cnt, ", ").concat(product, ", ").concat(status));
}
hw3([40, 'wine', false]);
