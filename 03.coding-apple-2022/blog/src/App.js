/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [matzip, setMatzip] = useState(['신림 24시 서울밥집', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  let [good, setGood] = useState([0, 0, 0]);
  let [date, setDate] = useState(['2월 17일 발행', '3월 19일 발행', '4월 13일 발행']);

  let [modal, setModal] = useState(false);
  let [modalNumber, setModalNumber] = useState(0);
  let [inputValue, setInputValue] = useState('');

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
        <button>글수정</button>
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
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...good];
                    copy[i]++;
                    setGood(copy);
                  }}
                >
                  👍🏻
                </span>
                {good[i]}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...matzip];
                    copy.splice(i, 1);
                    setMatzip(copy);
                  }}
                >
                  삭제
                </button>
              </h4>
            </div>

            <p>{date[i]}</p>
          </div>
        );
      })}

      <input
        type='text'
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copyMatzip = [...matzip];
          let copyGood = [...good];
          let copyDate = [...date];

          let now = new Date();

          console.log(now);
          if (inputValue != '') {
            copyMatzip.push(inputValue);
            copyGood.push(0);
            copyDate.push(`${now.getMonth() + 1}월 ${now.getDate()}일 발행`);

            setMatzip(copyMatzip);
            setGood(copyGood);
            setDate(copyDate);
          } else {
            alert('추가할 내용을 작성해주세요');
          }
        }}
      >
        추가
      </button>

      {modal ? <Modal title={matzip[modalNumber]} /> : ''}
    </div>
  );
}

export default App;

// 응용
// 응용1. 글에 아무것도 입력안하고 발행버튼 누르는거 막으려면? O
// 응용2. 글을 하나 추가하면 따봉갯수 개별적용하던 것도 이상해질 수 있다. O
// 응용3. 날짜 데이터 추가 O
