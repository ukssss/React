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
    </div>
  );
}

export default App;

// 정리
// - state가 array/object면 독립적 카피본을 만들어서 수정해야 함
