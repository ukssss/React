# implements 키워드

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [implements 키워드](#implements-키워드)
- [implements 는 타입지정문법이 아니다](#implements-는-타입지정문법이-아니다)

> 참고) interface 는 object 타입지정할 때 사용한다. 또한 class 타입을 확인하고 싶을 때도 interface 문법을 사용할 수 있다.

### implements 키워드

```tsx
class Car {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 모닝 = new Car('morning');
```

class Car 로 부터 생산되는 object 들은 model, price 속성을 가지게 되는데, 만약 class 가 model, price 속성을 가지고 있는지 타입을 확인할때 **interface + implements** 키워드로 확인할 수 있다.

```tsx
interface CarType {
  model: string;
  price: number;
}

class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}

let 모닝 = new Car('morning');
```

class 이름 우측에 implements 를 쓰고 interface 이름을 쓰면 **해당 class 가 이 interface 에 있는 속성을 다 들고 있는지** 확인이 가능하다.

그래서 다 갖고 있으면 정상 작동되며, 빠진 속성이 있으면 에러로 알려준다.

### implements 는 타입지정문법이 아니다

implements 라는 것은 interface 에 들어있는 속성을 가지고 있는지 확인만 하라는 뜻이다.

class 에다가 타입을 할당하고 변형시키는 키워드는 아니다.

```tsx
interface CarType {
  model: string;
  tax: (price: number) => number;
}

class Car implements CarType {
  model; // type : any
  tax(a) {
    //  a type : any
    return a * 0.1;
  }
}
// Error 출력
```

CarType 을 implements 했냐고 썼는데, CarType 에 있던 model: string 과 같은 타입이 반영되는 것이 아니다. 또한 tax 함수 또한 number 타입이 반영되지 않는다.

즉, implements 는 **class 의 타입을 체크하는 용도이지 할당하는 것이 아니다.** 에러가 발생할 것이다 !
