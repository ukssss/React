var 회원정보 = {
    name: 'ukss',
    age: 26,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        return '메롱';
    },
};
회원정보.plusOne(2);
회원정보.changeName();
var hw2 = {
    cutZero: function (a) {
        var arr = a.toString().split('');
        if (arr[0] === '0') {
            arr = arr.slice(1, arr.length);
        }
        return arr.join('');
    },
    removeDash: function (a) {
        var arr = a.toString().split('');
        for (var i = 0; i < arr.length; i++) {
            arr[i] === '-' && arr.splice(i, 1);
        }
        return Number(arr.join(''));
    },
};
var num = '010-1234-5678';
function hw3(x, func1, func2) {
    var result1 = func1(x);
    var result2 = func2(result1);
    return result2;
}
console.log(hw3(num, hw2.cutZero, hw2.removeDash));
