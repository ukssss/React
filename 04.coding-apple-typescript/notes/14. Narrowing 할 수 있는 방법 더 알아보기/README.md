# Narrowing 할 수 있는 방법 더 알아보기

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [null & undefined 체크하는 방법](#null--undefined-체크하는-방법)
- [in 연산자로 object 자료 narrowing](#in-연산자로-object-자료-narrowing)
- [instanceof](#instanceof)
- [literal type](#literal-type)

### null & undefined 체크하는 방법

&& 연산자

AND 연산자는 첫 번째 falsy를 반환한다. 피연산자에 falsy가 없다면 마지막 값을 반환한다.

자세한 설명은 [논리 연산자](https://ko.javascript.info/logical-operators#ref-907) 를 참고

```jsx
1 && null & 3; // null
undefined && 'Hello' && 100; // undefined
```

이걸 사용해서 다음과 같이 if문을 조금 더 간략하게 사용할 수 있다.

```tsx
if (변수 && typeof strs === 'string') {
}
```

이렇게 사용할 경우 변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고, 변수가 string 타입이면 if문이 실행된다.
(if문 조건식 안에 falsy 값이 남으면 if문이 실행되지 않는다)

즉, 변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법이라고 볼 수 있다.

예시

```tsx
function printAll(strs: string | undefined) {
  if (strs && typeof strs === 'string') {
    console.log(s);
  }
}
```

> 한 눈에 안들어온다면 안쓰는게 좋다 ㅎ,,,

### in 연산자로 object 자료 narrowing

예를 들어 파라미터로 object가 2개 들어올 수 있다고 타입지정을 가정해보자

```tsx
type test1 = {
  a: 'kim';
};
type test2 = {
  b: 'park';
};
```

이렇게 서로 다른 유니크한 속성을 가지고 있을 때
**if(해당 파라미터가 a라는 속성을 안에 갖고 있냐)** 와 같은 if문을 써도 narrowing이 가능하다.

`if(키값 in object 자료형)`

```tsx
function 함수(test: test1 | test2) {
  if (a in test) {
    return test.a;
  }
  return test.b;
}
```

> **서로 배타적인 속성을 가져와야 narrowing이 가능하다**

### instanceof

class로부터 생산된 object라면 **instanceof**로 narrowing을 할 수 있다.

어떤 클래스로부터 new 키워드로 생산된 object들이 있는데 그런 object 들은 instanceof 키워드를 붙여서 부모 클래스가 누군지 검사할 수 있는데 이것도 narrowing 역할을 할 수 있다.

쉽게 new 키워드로 object를 생산할 수 있는게 "날짜" 인데, JS에서는 new Date() 이렇게 하면 date object 라는게 생성된다. 그래서 instanceof로 부모 클래스가 누군지 검사할 수 있다.

```tsx
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log('참이에요');
}
```

이 변수가 Date()로 부터 생성된 object 자료인지, 아니면 다른 애로부터 생성된 자료인지 구분가능하기에 narrowing 역할을 할 수 있다.

### literal type

다음과 같은 예시가 있다.

```tsx
type Car = {
  wheel: '4개';
  color: string;
};

type Bike = {
  wheel: '2개';
  color: string;
};

function 함수(x: Car | Bike) {
  if (???????) {
    console.log(`자동차 바퀴 ${x.wheel}`);
  } else {
    console.log(`바이크 바퀴 ${x.wheel}`);
  }
}

let test: Car = { wheel: '4개', color: 'blue' };

함수(test);
```

Car, Bike 타입을 각각 만들었는데 함수에 object 자료가 들어올 수 있다.
함수에 만약 Car 타입을 입력할 경우 뭔가를 실행하고 싶은데 if 문에서 narrowing 을 어떻게 할까?

typeof 연산자를 써도 그냥 object 라고만 나올 것이다. 왜냐하면 **typeof 연산자는 string, number, object 이런 것만 구분해주기 때문이다.**

object를 구분할 일이 많을 때 **literal type**을 만들어두면 편리한데, 그렇게 되면 서로 비슷한 object들이 들어와도 literal type으로 narrowing이 가능하기 때문이다.

만약 Car 타입의 wheel을 출력하면 "4개"가, Bike 타입의 wheel을 출력하면 "2개" 가 출력될 것이다. 이러한 특징을 활용해서 object들 끼리 narrowing을 할 수 있다.

```tsx
function 함수(x: Car | Bike) {
  if (x.wheel === '4개') {
    console.log(`자동차 바퀴 ${x.wheel}`);
  } else {
    console.log(`바이크 바퀴 ${x.wheel}`);
  }
}

let test: Car = { wheel: '4개', color: 'blue' };

함수(test);
```

그냥 쉽게 말하자면 literal type으로 선언된 속성이 무엇인지 찾아낸 것이다.

**결론은 object 자료 비슷한 걸 많이 다룰 때는 literal type으로 object 안에 각각 유니크한 자료를 달아두면 나중에 구분하기 편리할 수 있다.**
