let title = document.querySelector('#title');
if (title?.innerHTML) {
  title.innerHTML = '반가워요';
}

let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
  link.href = 'https://www.kakao.com';
}

let button = document.querySelector('#button');
button?.addEventListener('click', function () {
  alert('메렁어엉ㅇ~');
});

// hw1

let img = document.querySelector('.img');
if (img instanceof HTMLImageElement) {
  img.src = './src/new.jpg';
}

// hw2

let naver = document.querySelectorAll('.naver');
naver.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = 'https://www.kakao.com';
  }
});
