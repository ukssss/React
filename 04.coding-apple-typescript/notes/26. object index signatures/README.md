# object index signatures

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [index signatures](#index-signatures)
- [array 형태](#array-형태)
- [Recursive Index Signatures](#recursive-index-signatures)

object 자료에 타입을 미리 만들어주고 싶은데 object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우이거나, 타입지정할 속성이 너무 많은 경우 **index signatures** 를 사용하면 편리하다.

### index signatures

object 용 타입을 하나 만드는데 어떤 속성이 들어올지 모르는 경우 다음과 같이 작성할 수 있다.

```tsx
interface StringOnly {
  [key: string]: string;
}

let obj: StringOnly = {
  name: 'ukss',
  age: '26',
  location: 'Seoul',
};
```

StringOnly 라는 interface 를 만들었는데, 안에 타입을 `[OOO: string]: string` 과 같이 작성하면 모든 string 으로 들어오는 key 값에 할당되는 value 는 string 이어야 한다는 타입조건이 지정된다.

즉, **{ 모든속성 : string }** 이라는 뜻과 동일하다. 이를 통해 해당 object 에 들어오는 모든 속성은 우측에 string 을 가져야 하게 된다.

딱 코드 한 줄로 모든 속성의 타입지정이 가능해져 편리하게 사용할 수 있다.

다음과 같이 응용할 수 있다.

```tsx
interface StringOnly {
  age: number; // Error !
  [key: string]: string;
}

interface StringOnly {
  age: number; // OK
  [key: string]: string | number;
}
```

1. {모든 속성 : string, age : number} 논리적으로 말이 안됨. X
2. {모든 속성 : string | number, age : number} 논리적으로 말이 됨 O

### array 형태

JS 에서 array 와 object 는 별 다를게 없는 같은 자료형이다.

object 도 다음과 같이 대괄호를 사용해서 안에 있는 데이터를 array 처럼 뽑을 수 있다.

```tsx
let obj = {
  0: 'ukss',
  1: '26',
  2: 'Seoul',
};

console.log(obj[0]); // 'ukss' 출력
```

[] 안에 key 값의 타입을 number 로 지정할 수 있다. (대괄호 안에는 string 또는 number 만 가능)

```tsx
interface StringOnly {
  [key: number]: string; // object 의 키 값이 숫자로 들어오는 경우 value 로 string 을 가져야 한다.
}

let obj: StringOnly = {
  0: 'ukss',
  1: '26',
  2: 'Seoul',
};
```

즉, **{ 모든숫자속성 : string }** 으로 타입지정

array 처럼 쓰고 싶은 object가 있으면 위와 같이 타입지정도 가능하다는 이야기이다.

### Recursive Index Signatures

object 안에 object 안에 object 가 들어있는 예시이다

```tsx
let obj = {
  'font-size': {
    'font-size': {
      'font-size': 16,
    },
  },
};
```

위와 같이 중첩된 object들을 한 번에 타입지정하는 방법

```tsx
// default
interface MyType {
  'font-size': {
    'font-size': {
      'font-size': number;
    };
  };
}

// 더 편하게 줄이기
interface MyType {
  'font-size': MyType | number;
}
```
