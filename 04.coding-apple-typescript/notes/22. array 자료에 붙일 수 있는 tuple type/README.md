# array 자료에 붙일 수 있는 tuple type

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [Tuple 타입](#tuple-타입)
- [Tuple 응용 : rest parameter](#tuple-응용--rest-parameter)
- [tuple 안에도 옵션가능](#tuple-안에도-옵션가능)
- [array 두개를 spread 연산자로 합칠 경우 타입지정](#array-두개를-spread-연산자로-합칠-경우-타입지정)

### Tuple 타입

tuple type 은 array 에 붙일 수 있는 타입인데 자료의 위치까지 정확히 지정할 수 있는 타입이다.

[] 괄호 안에 타입을 적으면 tuple type 이 되며, [] 안에 차례로 세부 타입을 기입하면 된다.

```tsx
let walwal: [string, boolean]; // 첫 자료는 string, 둘째 자료는 boolean 만 허용
walwal = ['dog', true];
```

### Tuple 응용 : rest parameter

해당 파라미터에 몇 개가 들어올 지 모를때 사용하는 파라미터이다. 사용방법은 파라미터 왼쪽에 점 3개를 붙혀 사용한다.

함수에 입력한 파라미터들은 array 에 담겨오기에 array 처럼 타입지정을 해주는 것이 일반적이다.

```tsx
function 함수(...x: string[]) {
  console.log(x);
}
```

이를 tuple type 을 사용해서 타입지정을 세부적으로 할 수 있다.

```tsx
function 함수(...x: [string, number]) {
  console.log(x);
}

함수('ukss', 123); // OK
함수('ukss', 123, 456); // Error !
함수('ukss', 'hong'); // Error !
```

tuple type 을 활용하면 rest parameter 를 보다 엄격하게 사용할 수 있게 된다.

일반 파라미터 2개 넣는 것이랑 기능상으로는 다를 바 없지만, 차이는 rest parameter 를 사용하면 파라미터가 전부 **array** 에 담겨서 오는 것이 차이이다.

### tuple 안에도 옵션가능

물음표 넣어서 옵션이라고 표현이 가능하다.

```tsx
type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10];
```

다음과 안되는 예시이다.

```tsx
type Num = [number, number?, number]; // NO !
```

위와 같이 array 중간에 있는 자료에 옵션을 사용했는데, 중간을 빼고 만들 수도 없고 논리적으로 이상한 구문이다.

따라서 **? 옵션기호는 뒤에만** 사용할 수 있다.

### array 두개를 spread 연산자로 합칠 경우 타입지정

다음과 같이 spread 연산자를 사용해서 array 를 합치는 경우이다.

```tsx
let arr = [1, 2, 3];
let arr2 = [4, 5, ...arr];
```

해당 코드에서 arr2 은 tuple 타입을 사용해서 타입지정을 할 수 있다.

```tsx
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
```

rest parameter 처럼 자유롭게 집어넣을 수 있다.

```tsx
let arr2: [number, number, ...number[]] = [4, 5, 6, 7, 8, 9, 10];
```
