# TypeScript 소개 및 설치 셋팅

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [TypeScript 소개](#typescript-소개)
  - [TypeScript 쓰는 이유](#typescript-쓰는-이유)
- [TypeScript 설치 및 사용방법](#typescript-설치-및-사용방법)
  - [일반 HTML CSS JS 웹 개발시 타입스크립트를 사용하려면](#일반-html-css-js-웹-개발시-타입스크립트를-사용하려면)
  - [React 프로젝트에서 TypeScript를 사용할 경우](#react-프로젝트에서-typescript를-사용할-경우)
  - [Vue 프로젝트에서 TypeScript를 사용할 경우](#vue-프로젝트에서-typescript를-사용할-경우)
- [TypeScript 개념 정리](#typescript-개념-정리)
  - [TypeScript 10분 정리](#typescript-10분-정리)

## TypeScript 소개

### TypeScript 쓰는 이유

타입스크립트는 자바스크립트의 타입부분을 업그레이드해서 사용하고 싶을 때 설치해서 쓰는 일종의 자바스크립트의 대용품이다.

완전 다른 언어는 아니라 자바스크립트 문법 그대로 이용가능한데 타입 문법을 추가해서 사용할 수 있다.

## TypeScript 설치 및 사용방법

### 일반 HTML CSS JS 웹 개발시 타입스크립트를 사용하려면

1. Nodejs 최신버전, VSCode 에디터 설치
2. VSCode 에디터 > 상단메뉴 > Terminal > New Terminal
3. 다음과 같이 입력 (전역 설치)

```bash
npm install -g typescript
```

4. 코드를 짤 작업 폴더 생성
5. 작업 폴더에서 .ts로 끝나는 파일을 생성 후 타입스크립트 사용 시작

ts 파일은 js랑 똑같이 사용이 가능하지만, 다만 웹브라우저는 ts 파일을 알아듣지 못하기 때문에 js 파일로 변환 작업을 해야 한다.

6. js 파일로 변환하려면 에디터에서 Terminal 을 새로 연 후 다음과 같이 입력
   자동으로 ts 파일을 js 파일로 근처에 변환시켜 주는 명령

```bash
tsc -w
```

7. HTML 파일 등에서 타입스크립트로 작성한 코드를 사용하려면
   .ts가 아닌 변환된 .js파일을 사용할 것

```html
<script src="변환된 파일.js"></script>
```

### React 프로젝트에서 TypeScript를 사용할 경우

1. 이미 있는 React 프로젝트에 설치할 경우
   작업폴더 경로에서 터미널을 오픈한 후

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

2. 그냥 React 프로젝트를 새로 만들 경우
   새로 작업폴더를 만든 후 해당 폴더에서 에디터와 터미널을 오픈한 후

```bash
npx create-react-app 앱이름 --template typescript
```

### Vue 프로젝트에서 TypeScript를 사용할 경우

1. 작업폴더 경로에서 터미널을 오픈한 후

```bash
vue add typescript
```

2. vue 파일에서 타입스크립트를 사용하려면

```html
<script lang="ts"></script>
```

## TypeScript 개념 정리

### TypeScript 10분 정리

변수를 만들 때 **타입지정**이 가능하다.

변수명 : 타입명

타입으로 쓸 수 있는 것들은 string, number, boolean, bigInt, null, undefined, [], {} 등이 있다.

```tsx
let 이름: string = 'ukss';
```

array 혹은 object 자료는 다음과 같이 타입지정이 가능하다.

```tsx
let 이름: string[] = ['ukss', 'hong'];
let 나이: { age: number } = { age: number };
```

해당 변수에 여러가지 타입의 데이터가 들어와야 할 경우 | 기호를 사용해 or 연산자를 표현할 수 있다.

```tsx
let 이름: string | number = 'ukss';
```

type 키워드를 이용해 타입을 변수처럼 담아서도 사용가능하다.

```tsx
type nameType = string | number;
let 이름: nameType = 'ukss';
```

string number 이런 것 뿐만 아니라 나만의 타입을 만들어 사용가능하다.

이를 literal type 이라고 부른다.

```tsx
type NameType = 'ukss' | 'hong'; // "ukss" 혹은 "hong" 만 들어올 수 있다 !
let 이름: NameType = 'ukss';
```

함수는 파라미터와 return 값이 어떤 타입일지 지정가능하다.

실수로 다른 타입이 파라미터로 들어오거나 return 될 경우 에러를 내준다.

함수는 return 타입으로 void를 설정할 수 있는데 return 이 없는지 체크할 수 있는 타입이다.

```tsx
function 함수명(x: number): number {
  return x * 2;
}
```

타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없다.

타입이 무엇인지 미리 체크하는 narrowing 혹은 assertion 문법을 사용해야 허락해준다.

```tsx
// 에러
function 함수명(x: number | string) {
  return x * 2;
}

// 가능
function 함수명(x: number | string) {
  if (typeof x === 'number') {
    return x * 2;
  }
}
```

array 자료 안에서 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶을 경우 tuple 타입을 사용한다.

대괄호 [] 안에 들어올 자료의 타입을 다음과 같이 적어준다.

```tsx
type Member = [number, boolean];
let ukss: Member = [100, false];
```

object 타입도 정의가 너무 길 경우 type 키워드로 변수에 담아 사용가능하다.

type 혹은 interface 키워드를 이용해도 무방하다.

특정 속성이 선택사항일 경우 물음표를 기입가능하다.

```tsx
type MyObject = {
  name?: string;
  age: number;
};

let ukss: MyObject = {
  name: 'Hong',
  age: 26,
};
```

Object 안에 어떤 속성이 들어갈 지 모를 경우 전부 싸잡아서 타입지정도 가능하다. 이를 `index signature` 라고 한다.

```tsx
type MyObject = {
  [key: string]: number;
};

let ukss: MyObject = {
  age: 26,
  weight: 86,
};
```
