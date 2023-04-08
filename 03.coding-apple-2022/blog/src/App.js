import { useState } from 'react';
import './App.css';

function App() {
  let [first, setFirst] = useState('신림 24시 서울밥집');
  let [second, setSecond] = useState('낙성대 기절초풍왕순대');
  let [third, setThird] = useState('서울대입구 산골');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ukss's blog</h4>
      </div>
      <div className='list'>
        <h4>{first}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{second}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{third}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

// 정리
// 자주 변경될 것 같은 html 부분은 'state'로 만들어 놓기!
