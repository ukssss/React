/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [matzip, setMatzip] = useState(['신림 24시 서울밥집', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  let [good, setGood] = useState(0);
  let [modal, setModal] = useState(false);

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
        <h4
          onClick={() => {
            modal ? setModal(false) : setModal(true);
          }}
        >
          {matzip[0]} <span onClick={handleGood}>👍🏻</span> {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4
          onClick={() => {
            modal ? setModal(false) : setModal(true);
          }}
        >
          {matzip[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4
          onClick={() => {
            modal ? setModal(false) : setModal(true);
          }}
        >
          {matzip[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {modal ? <Modal /> : ''}
    </div>
  );
}

export default App;

// 동적인 UI 만드는 step
// 1. html css 로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 저장 (조건문 등으로)
