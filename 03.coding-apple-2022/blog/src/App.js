/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [matzip, setMatzip] = useState(['신림 24시 서울밥집', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalNumber, setModalNumber] = useState(0);

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

  function Modal(props) {
    return (
      <div className='modal'>
        <h4>{props.title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...matzip];
            copy[modalNumber] = '압구정로데오 더타코부스';
            setMatzip(copy);
          }}
        >
          글수정
        </button>
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
              <h4
                onClick={() => {
                  modal ? setModal(false) : setModal(true);
                  setModalNumber(i);
                }}
              >
                {place}
              </h4>
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

      {modal ? <Modal title={matzip[modalNumber]} /> : ''}
    </div>
  );
}

export default App;

// 부모 -> 자식 state 전송하려면 props 문법 사용
// 1. <자식컴포넌트 작명={state이름}>
// 2. props 파라미터 등록 후 props.작명 사용

// props 전송은 부모 -> 자식만 가능

// ! 컴포넌트 많아지면 props 쓰는게 귀찮아짐

// 파라미터 문법은 다양한 기능을 하는 함수를 만들 때 사용함
