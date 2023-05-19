# public, private

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [public, private](#public-private)
- [public, private 를 활용한 기능](#public-private-를-활용한-기능)

타입스크립트를 사용하면 자바스크립트에 존재하지 않는 문법도 있는데, 객체지향 언어에서 제공하는 public, private, static, protected 같은 키워드를 사용가능한데, 이를 정리한 내용이다.

### public, private

타입스크립트는 class 안에서 public 키워드를 사용할 수 있다.
원하는 속성 왼쪽에 붙이면 그 속성은 아무데서나 수정이 가능하다.

```tsx
class User {
  public name: string;
  constructor() {
    this.name = 'seonguk';
  }
}

let user1 = new User();
user1.name = 'ukss'; // Okay
```

**public이 붙은 속성은 자식 object들이 마음대로 사용하고 수정가능하다.**

사실 public을 붙이든 안붙이든 똑같긴 하다. 왜냐하면 필드값 같은 걸 그냥 만들면 public이 몰래 왼쪽에 부여되기 때문이다.

> 참고로 public 키워드는 class 내의 prototype 함수에도 붙일 수 있다.

**그러나 private 키워드를 붙이면 수정이 불가능해진다.**

무조건 class {} 중괄호 안에서만 수정 및 사용이 가능하다. 또한 class로 부터 생산된 자식 object에서도 private 붙은건 사용할 수 없다. (class 중괄호 내부가 아니기 때문)

```tsx
class User {
  public name: string;
  private familyName: string;
  constructor() {
    this.name = 'seonguk';
    this.familyName = 'hong';
    let hello = 'Hello' + this.familyName;
  }
}

let user1 = new User();
user1.name = 'ukss'; // Okay
user1.familyName = 'kim'; // Error !
```

familyName 이라는 속성에 private 키워드를 추가해 아무데서나 수정이 불가능해졌다.
**즉, private 붙은 속성들은 오직 class{} 안에서만 수정이 가능하다.**

이와 같이 속성을 외부에서 숨기고 싶을 때 private 키워드를 이용한다.
(자바스크립트 문법에서도 **#** 을 붙이면 private 속성이 된다.)

> 참고로 private 키워드는 class 내의 함수에도 붙일 수 있다.

**Q1. private 부여된 속성을 class 밖에서 수정해야 할 경우**

1. private 속성을 수정하는 함수를 class 안에 만든다.
2. 해당 함수를 실행한다.

```tsx
class User {
  name = 'ukss';
  private familyName: string = 'hong';
  constructor(a) {
    this.name = a + this.familyName;
  }

  nameChange() {
    this.familyName = 'kim';
  }
}

let user1 = new User('seonguk');
user1.nameChange(); // Okay
```

**Q2. private 사용용도**
중요한 변수나, 속성들을 외부에서 실수로 수정하지 않도록 하기 위해서는 private를 사용한다. 위의 예제에서 familyName 과 같은 실수로 수정하면 안되는 키워드들을 보호하기 위해 사용
**번거롭지만 버그를 예방해주는 키워드**

### public, private 를 활용한 기능

constructor 안에서 this.name = name 과 같이 생략할 수 있다.
다음 두 개의 코드는 같은 역할을 하는 코드이다.

```tsx
// 기본
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

let son = new Person('hong');

// public, private 활용
class Person {
  constructor(public name: string) {}
}

let son = new Person('hong');
```
