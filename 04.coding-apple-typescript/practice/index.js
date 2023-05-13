function 함수(x) {
    var array = [];
    array[0] = x;
}
var 이름 = 'ukss';
함수(123);
// hw1
function hw1(x) {
    var temp = [];
    x.forEach(function (el) {
        if (typeof el === 'string') {
            temp.push(parseFloat(el));
        }
        else {
            temp.push(el);
        }
    });
    return temp;
}
console.log(hw1([123, '3']));
// hw2
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function hw2(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return 'Nothing,,';
    }
}
console.log(hw2(철수쌤));
