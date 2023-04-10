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
    setMatzip(['압구정로데오 웍셔너리', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ukss's blog</h4>
      </div>

      <button onClick={handleChange}>🙋🏼‍♀️</button>

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
    </div>
  );
}

export default App;

// 정리
// - onClick 사용법, onClick={} 안엔 함수를 넣어야 한다.
// - state 변경하는 법, 항상 state 변경함수 쓸 것 (새로운 state)
