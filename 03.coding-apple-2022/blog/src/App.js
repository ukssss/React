/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [matzip, setMatzip] = useState(['신림 24시 서울밥집', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  let [good, setGood] = useState(0);

  function handleGood() {
    setGood(good++);
  }

  function handleChange() {
    let copy = [...matzip];
    copy[0] = '압구정로데오 웍셔너리';
    setMatzip(copy);
  }

  function handleGanada() {
    let copy = [...matzip];
    copy.sort();
    setMatzip(copy);
  }

  function Modal() {
    return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ukss's blog</h4>
      </div>

      <button onClick={handleChange}>음식점 변경</button>
      <button onClick={handleGanada}>가나다순 정렬</button>

      <div className='list'>
        <h4>
          {matzip[0]} <span onClick={handleGood}>👍🏻</span> {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{matzip[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{matzip[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal />
    </div>
  );
}

export default App;

// 컴포넌트 만드는 법
// 1. function 만들고
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기

// 의미없는 <div> 대신 <></> 사용가능 (fragment)
// <함수명></함수명>, <함수명/> 둘 다 가능

// 어떤걸 컴포넌트로 만들면 좋은가
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들

// 컴포넌트의 단점
// state 가져다 쓸 경우 문제가 발생
// (A 함수에 있던 변수는 B 함수에서 맘대로 가져다 쓸 수 없음)

// 컴포넌트 만드는 문법 2
// const Modal = () => {}
