var title = document.querySelector('#title');
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = '반가워요';
}
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://www.kakao.com';
}
var button = document.querySelector('#button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    alert('메렁어엉ㅇ~');
});
// hw1
var img = document.querySelector('.img');
if (img instanceof HTMLImageElement) {
    img.src = './src/new.jpg';
}
// hw2
var naver = document.querySelectorAll('.naver');
naver.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://www.kakao.com';
    }
});
