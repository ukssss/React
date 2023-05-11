# TypeScript 컴파일시 세부설정 (tsconfig.json)

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [tsconfig 파일 생성](#tsconfig-파일-생성)
- [추가로 넣을만한 것들](#추가로-넣을만한-것들)
- [tsconfig 에 들어갈 기타 항목들](#tsconfig-에-들어갈-기타-항목들)

### tsconfig 파일 생성

다음과 같이 파일을 생성, 리액트나 뷰 이런거 사용하고 있으면 이미 있을 수 있음

<img src="./src/tsconfig.png" style="width: 200px">

다음과 같이 설정

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs"
  }
}
```

target

- 타입스크립트 파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분이다. es5 로 셋팅할 경우 es5 버전의 자바스크립트로 컴파일 해준다.
- 신버전을 원하면 es2016, esnext 이런 것도 입력할 수 있다.'

module

- 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳
- commonjs 는 require 문법, es2015, esnext는 import 문법을 사용

> 어느정도 IE 호환성을 원하시면 es5, commonjs를 주로 사용

### 추가로 넣을만한 것들

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

noImplicitAny

- any라는 타입이 의도치않게 발생할 경우 에러를 띄워주는 설정

strictNullChecks

- null, undefined 타입에 이상한 조작을 하면 에러를 띄우는 설정

### tsconfig 에 들어갈 기타 항목들

[전체](https://www.typescriptlang.org/tsconfig)

```json
{
  "compilerOptions": {
    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거

    "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
    "noFallthroughCasesInSwitch": true //switch문 이상하면 에러내기
  }
}
```
