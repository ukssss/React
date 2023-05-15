# 함수와 methods에 type alias 지정하는 방법

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [Function Type](#function-type)
- [methos 안에 타입지정 하기](#methods-안에-타입지정-하기)

### Function Type

함수 타입도 다음과 같이 type alias로 저장해서 사용할 수 있다.

1. 숫자 두개를 파라미터로 입력할 수 있으며,
2. 숫자를 return 하는 함수를 별명을 지어서 사용할 경우

```tsx
type NumOut = (x: number, y: number) => number;
```

function 키워드는 () 내부와 오른쪽에만 타입지정이 가능하기에 함수 타입은 다음과 같이 사용한다.

```tsx
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};
```

### methods 안에 타입지정 하기

object 자료 안에 함수도 집어넣을 수 있다.

```tsx
let 회원정보 = {
  name: 'ukss',
  age: 26,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log('안녕');
  },
};
회원정보.plusOne(1);
회원정보.changeName();
```

arrow function, 일반함수 모두 object 안에 넣을 수 있다.
