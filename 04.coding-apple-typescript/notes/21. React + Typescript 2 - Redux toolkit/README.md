# React + Typescript 2 - Redux toolkit

> [코딩애플 TypeScript 강의](https://codingapple.com/) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [redux 사용 용도](#redux-사용-용도)
- [(전통방식 redux) state와 reducer 만들 때 타입지정 필요](#전통방식-redux-state와-reducer-만들-때-타입지정-필요)
- [(전통방식 redux) state를 꺼낼 때](#전통방식-redux-state를-꺼낼-때)
- [(신규방식 redux) state 와 reducer 만들 때 타입지정 필요](#신규방식-redux-state-와-reducer-만들-때-타입지정-필요)
- [(신규방식 redux) state 를 꺼낼 때](#신규방식-redux-state-를-꺼낼-때)

### redux 사용 용도

1. state 를 한 곳에서 관리할 수 있어 컴포넌트들이 props 없이 state를 다루기가 쉽다.
2. 수정방법을 미리 reducer 라는 함수로 정의하여 state 수정시 발생하는 버그를 줄일 수 있어서 사용

### (전통방식 redux) state와 reducer 만들 때 타입지정 필요

redux 설치 방법

```shell
npm install redux react-redux
```

`<button>` 버튼을 누르면 state가 +1, -1 되는 예제

1. state 가 하나 필요 (증가, 감소가 적용되는 count)
2. - 와 - 하는 방법을 정의해둔 reducer 필요

index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

interface Counter {
  count: number;
}

const initialValue: Counter = { count: 0 };

function reducer(state = initialValue, action: any) {
  if (action.type === 'increase') {
    return { count: state.count++ };
  } else if (action.type === 'decrease') {
    return { count: state.count-- };
  } else {
    return initialValue;
  }
}

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

핵심 코드 설명

1. 초기값 생성 `initialValue = {count : 0}`
2. reducer 함수를 생성해 state가 변경되는 방법 정의

해당 코드에서 변수, 함수에 타입지정을 할 수 있다. **즉, redux 쓸 때는 똑같이 state 초기값과 reducer 함수의 타입지정을 잘하면 된다.**

1. 초기값 변수 오른쪽에 타입지정
2. reducer 함수는 state, action 즉, 파라미터 2개 타입지정

state의 경우 초기값을 넣으면 타입지정이 자동으로 됨으로 필요가 없다.

action의 경우 나중에 dispatch 날릴 때 object 자료를 집어넣기에 해당 타입이라 동일해야 한다.

```tsx
interface Counter {
  count: number;
}

const initialValue: Counter = { count: 0 };

function reducer(state = initialValue, action: { type: string; payload: number }) {
  if (action.type === 'increase') {
    return { count: state.count++ };
  } else if (action.type === 'decrease') {
    return { count: state.count-- };
  } else {
    return initialValue;
  }
}
```

3. reducer 함수의 return 타입지정

```tsx
interface Counter {
  count: number;
}

function reducer(state = initialValue, action: { type: string; payload: number }): Counter {
  if (action.type === 'increase') {
    return { count: state.count + 1 };
  } else if (action.type === 'decrease') {
    return { count: state.count - 1 };
  } else {
    return initialValue;
  }
}
```

> reducer 타입지정은 전부 reducer 안의 코드들을 잘못 짜서 생기는 버그를 약간 방지하는 용도이다.
> App.tsx 이런 곳에서 dispatch() 를 잘쓰냐 못쓰냐는 캐치해주지 못함 !

### (전통방식 redux) state를 꺼낼 때

redux에 있던 state를 가져오려면 mapStateToProps도 있지만 **useSelector 훅** 을 쓰면 간단한 걸 쉽게 가져올 수 있다.

그리고 state를 변경하려면 **useDispatch 훅** 을 쓰면 dispatch를 간단히 날릴 수 있다.

App.tsx

```tsx
import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './index';
import { Dispatch } from 'redux';

function App() {
  const takeOut = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className='App'>
      {takeOut.count}
      <button
        onClick={() => {
          dispatch({ type: 'increase' });
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
```

핵심 코드 설명

1. useSelector 를 쓰면 redux 에 있던 state 를 빼오기 쉽다. 안에 콜백함수를 넣으면 해당 파라미터가 그대로 state 로 불러올 수 있다.
2. useDispatch 를 쓰면 redux 로 수정요청을 할 수 있다. type 을 잘 기입하면 미리 정의해뒀던 수정방법이 동작한다. (현재 증가 버튼)

타입지정 방식

1. useSelector() 안에 파라미터에서 적용

state 가 어떻게 생겼는지 파악한 다음 타입을 손수 지정하거나 혹은 index.ts 에서 타입을 export 해서 가져와도 된다.

index.ts 에 있던 `export type RootState = ReturnType<typeof store.getState>` 가 store 의 타입을 미리 export 해주는 방법이다.

2. useDispatch 타입지정

`import {Dispatch} from 'redux'` 와 같이 타입을 가져와 `const dispatch :Dispatch` 와 같이 사용하면 된다.

이로 인해 dispatch 날릴 때 안에 파라미터를 안쓰면 에러를 발생시킨다.

### (신규방식 redux) state 와 reducer 만들 때 타입지정 필요

@reduxjs/toolkit 설치

```shell
npm install @reduxjs/toolkit
```

위와 동일한 에제를 신식 redux 사용해서 만든 코드

index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialValue = { count: 0 };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialValue,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: any) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export let { increment, decrement, incrementByAmount } = counterSlice.actions;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

핵심 코드 설명

1. createSlice() 로 slice 생성, slice 는 state 와 reducer 를 합쳐놓은 새로운 뭉텅이로 보면 된다.
2. slice 안에는 slice 이름, state 초기값, reducer 가 정확한 이름으로 들어가야 한다. 마음대로 작명할 수 없다.
3. state 는 마음대로 만들면 되며, reducer 는 함수 형태로 제작하면 된다. 첫 파라미터는 state, 두 번째는 actions 가 자동으로 부여된다.
4. 다 만든 것은 configureStore 안에 등록하면 된다.
5. 만들어둔 reducer 를 사용하고 싶으면 reducer 안의 함수명을 export 하면 된다.

타입지정 방식

1. state 초기값 타입지정 알아서 할 것
2. reducer 안의 action 파라미터의 타입지정 할 것
3. 나머지는 자동으로 타입지정이 된다.

action 타입지정 방법

```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

(상단 생략)
  incrementByAmount (state, action: PayloadAction<number>){
      state.value += action.payload
  },
```

나중에 dispatch 할 때 보내는 데이터가 있으면 이를 payload 라고 부르는데 해당 자료의 타입을 <> 안에 집어넣어서 타입지정하는 방식이다.

### (신규방식 redux) state 를 꺼낼 때

App.tsx

```tsx
import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, increment } from './index';

function App() {
  const takeOut = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      {takeOut.counter1.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
```

핵심 코드 설명

1. useSelector 함수를 사용하면 state 를 쉽게 꺼낼 수 있다. 쓰는 방법은 안에 콜백함수 `() => {}` 를 넣으면 되는데 해당 함수의 첫 파라미터는 항상 state 가 된다.
2. useDispatch 함수를 사용하면 쉽게 수정요청을 날릴 수 있다.

타입지정은 state 와 dispatch 에 하면 된다.

1. useSelector() 안의 파라미터에 타입지정할 것

state 가 어떻게 생겼는지 파악한 다음 타입을 알아서 지정하거나 아니면 타입을 index.ts 와 같은 reducer 만든 곳에서 미리 RootState 라는 타입을 export 하면 import 해서 쉽게 타입지정이 가능하다.

2. useDispatch() 사용할 때 타입지정이 가능하다.

공식 문서에서는 index.tsx 에서 `export type AppDispatch = typeof store.dispatch` 하고 App.tsx 에서 import 해서 `useDispatch<AppDispatch>()` 으로 타입지정하라고 되어있다.

다만 강사님께서는 이전 방식을 사용하신다고 하였다.
