# 함수 rest 파라미터, destructing 할 때 타입지정 방법

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [rest 파라미터](#rest-파라미터)
- [rest 파라미터 타입지정](#rest-파라미터-타입지정)
- [rest parameter !== Spread Operator](#rest-parameter--spread-operator)
- [Destructing 문법](#destructing-문법)
- [함수 파라미터에 Destructing 문법 사용](#함수-rest-파라미터-destructing-할-때-타입지정-방법)

### rest 파라미터

함수에 어떤 파라미터가 몇 개 들어올지 미리 정의가 불가능한 경우가 존재한다.
이 때 rest 파라미터로 여러 개의 파라미터를 받으면 된다.

```tsx
function test(...a) {
  console.log(a);
}

test(1, 2, 3, 4, 5);
```

함수 파라미터를 작명할 때 점 3개 (...)를 붙혀주면 해당 함수에 여러 개의 파라미터가 들어올 수 있다고 정의할 수 있다.

- rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있다.
- rest 파라미터 자리에 집어넣은 값들은 모두 [] 안에 담겨있다.

### rest 파라미터 타입지정

rest 파라미터는 항상 [] 안에 담겨오기 때문에 타입지정도 array 처럼 해주면 된다.

```tsx
function test(...a: number[]) {
  console.log(a);
}

test(1, 2, 3, 4, 5);
```

### rest parameter !== Spread Operator

array 혹은, object 의 괄호를 벗기고 싶을 때 Spread Operator 를 다음과 같이 사용한다.

```tsx
let arr = [3, 4, 5];
let arr2 = [1, 2, ...arr];

console.log(arr2); // [1,2,3,4,5]
```

즉 Spread Operator(...spread)는 **array, object 자료 왼쪽**에 ...을,
여러 개의 파라미터를 의미하는 rest parameter(...rest)는 **함수 선언할 때 소괄호 안에** 사용한다 !

### Destructing 문법

array, object 안에 있는 데이터를 빼서 변수로 만들고 싶을 때 이를 빠르고 쉽게 뺄 수 있도록 도와주는 문법

```tsx
let { student, age } = { student: true, age: 26 };
```

array 자료도 왼쪽, 오른쪽 똑같아 보이게 변수를 작명하면 변수로 쉽게 뺄 수 있다.

```tsx
let [a, b] = ['Hello', 123];
```

특징은 object destructing 할 때는 **변수이름을 속성이름과 맞춰주는게** 편리하며,
array destructing 할 땐 **변수이름 마음대로** 작명이 가능하다.

### 함수 파라미터에 Destructing 문법 사용

Destructing 문법도 함수 파라미터에 사용이 가능한데, 왜냐하면 **함수 파라미터 작명하는 것도 변수 만드는 문법과 똑같아서** 그렇다.

변수 만들 때 기존 object 에 있던 자료를 파라미터로 집어넣고 싶으면

```tsx
// 기존
let person = { student: true, age: 26 };

function 함수(a, b) {
  console.log(a, b);
}
함수(person.student, person.age);

// Destructing 문법
function 함수({ student, age }) {
  console.log(student, age);
}
함수({ student: true, age: 26 });
```

> 항상 같은 모습의 object, array 자료가 들어올 때 사용하는 문법 !!

함수 파라미터에 타입지정 하는 방법

```tsx
function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수({ student: true, age: 26 });
```
