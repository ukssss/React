// hw 1
function 함수(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    else {
        console.log('이름이 없습니다');
    }
}
함수();
// hw 2
function 함수2(x) {
    var arr = x.toString().split('');
    return arr.length;
}
console.log(함수2('123'));
// hw 2 선생님 답안
function 함수3(x) {
    return x.toString().length;
}
console.log(함수3(123));
// hw 3
function 결혼가능확률(월소득, 집보유여부, 매력점수) {
    var cnt = 월소득;
    if (집보유여부) {
        cnt += 500;
    }
    if (매력점수 === '상') {
        cnt += 100;
    }
    if (cnt >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능확률(700, false, '중'));
console.log(결혼가능확률(100, false, '상'));
