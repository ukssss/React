/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [matzip, setMatzip] = useState(['신림 24시 서울밥집', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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

      {matzip.map(function (place, i) {
        return (
          <div className='list' key={i}>
            <div className='title'>
              <h4>{place}</h4>
              <span
                onClick={() => {
                  let copy = [...good];
                  copy[i]++;
                  setGood(copy);
                }}
              >
                👍🏻
              </span>
              <span>{good[i]}</span>
            </div>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal /> : ''}
    </div>
  );
}

export default App;

// Map
// 1. array 자료 갯수만큼 함수안의 코드를 실행해줌
// 2. 함수의 파라미터는 array 안에 있던 자료이다.
// 3. return 에 뭐 적으면 array 로 담아준다.

// 비슷한 html 반복생성 하려면 map() 사용하면 된다.

// map() 함수
// 1. 왼쪽 array 자료만큼 내부코드 실행해줌
// 2. return 오른쪽에 있는 걸 array 로 담아줌
// 3. 유용한 파라미터 2개 사용가능
