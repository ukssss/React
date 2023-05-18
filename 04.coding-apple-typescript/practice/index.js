function 함수(x) {
    if (x.wheel === '4개') {
        console.log("\uC790\uB3D9\uCC28 \uBC14\uD034 ".concat(x.wheel));
    }
    else {
        console.log("\uBC14\uC774\uD06C \uBC14\uD034 ".concat(x.wheel));
    }
}
var test = { wheel: '4개', color: 'blue' };
함수(test);
