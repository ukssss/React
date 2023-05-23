# import, export, namespace

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [import, export](#import-export)
- [namespace](#namespace)

### import, export

만든 타입변수를 다른 타입에서 사용하고 싶은 경우 JS import, export 문법 그대로 사용이 가능하다.

a.ts -> b.ts

```tsx
// a.ts
export let name = 'ukss';
export let age = 26;

// b.ts
import { name, age } from './a.js';

console.log(name, age);
```

순서는 다음과 같다.

1. 변수를 다른 파일에서 쓰이게 내보내고 싶으면 **export 문법**으로 내보내면 된다.
2. export된 변수를 가져와서 쓰고 싶으면 **import 문법**으로 가져오면 된다.

export 하고 싶으면 변수나 함수 정의부분 왼쪽에 `export` 키워드를 붙이고, import 하고 싶으면 `import {변수명} from 파일경로` 로 사용하면 된다.

변수명을 일일이 쓰기 귀찮으면 다음과 같이 <b>\*</b> 를 사용하면 된다.
해당 파일에서 export된 변수를 전부 import 하는 문법이다.

```tsx
import * from "./a.js";
```

a.tx -> b.ts, 정의된 타입을 가져다 쓰고 싶은 경우
타입도 변수, 함수 내보내기처럼 똑같은 방식으로 진행하면 된다.

```tsx
// a.ts
export type Name = string | boolean;
export type Age = (a: number) => number;

// b.ts
import { Name, Age } from './a.js';
let 이름: Name = 'ukss';
let 함수: Age = (a) => {
  return a + 10;
};
```

### namespace

import/export 문법이 없던 시절 사용했던 기법

기존에는 `<script src=""></script>` 를 여러개 써서 파일들을 첨부해서 사용했는데 이러한 방식의 문제는 파일이 많아질 수록 변수명이 겹치는 위험이 발생할 수 있다는 점이다.

그래서 외부 파일에서 사용하지 않을 변수들은 함수로 감싸는 식으로 진행했는데 타입변수들은 **namespace** 문법으로 숨겼다.

```tsx
// a.ts
namespace MyNamespace {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}

// b.ts
/// <reference path="./a.ts" />

let 이름: MyNamespace.NameType = 'ukss';
let 나이: MyNamespace.PersonInterface = { age: 26 };
```

`<reference path="./a.ts" />` 태그를 사용해서 다른 파일을 import 할 수 있는데 이를 통해 해당 파일에 있던 namespace를 사용할 수 있게 된다.

**네임스페이스명.타입명**

```tsx
/// <reference path="./a.ts" />

let 이름: MyNamespace.NameType = 'ukss';
let 나이: MyNamespace.PersonInterface = { age: 26 };

type NameType = boolean; // 사용가능
interface PersonInterface {}
```

점 찍어서 써야하기에 다른 변수명을 오염시키지 않아 변수명 중복선언문제를 방지할 수 있어 유용하다.

그러나 JS ES6 버전이 나온 이후 import as 키워드로 나름 namespace 와 유사하게 중복문제를 해결할 수 있어 namespace는 그렇게 많이 쓰이지는 않는다.

> 예전에는 **module** 키워드를 썼는데 갑자기 namespace 키워드로 바뀌었다.
