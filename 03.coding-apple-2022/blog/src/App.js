/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let [matzip, setMatzip] = useState(['신림 24시 서울밥집', '낙성대 기절초풍왕순대', '서울대입구 산골']);
  let [good, setGood] = useState([0, 0, 0]);
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
                    let copy = [...matzip].filter((data) => {
                      return data != place;
                    });
                    setMatzip(copy);
                  }}
                >
                  삭제
                </button>
              </h4>
            </div>

            <p>2월 17일 발행</p>
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
          copyMatzip.push(inputValue);
          copyGood.push(0);
          setMatzip(copyMatzip);
          setGood(copyGood);
        }}
      >
        추가
      </button>

      {modal ? <Modal title={matzip[modalNumber]} /> : ''}
    </div>
  );
}

export default App;

// 오늘의 숙제 :

// 1. input에 뭐 입력하고 발행버튼누르면

// 블로그에 글이 하나 추가되는 기능을 만들어보십시오.

// 2. 글마다 옆에 삭제버튼 하나씩 만들어놓고 삭제버튼누르면 글이 없어지는 기능을 만들어보십시오.

// (힌트)

// - html 직접 만질 필요는 없습니다. 지금 글제목 state만 바꾸면 html도 알아서 바뀌지 않겠습니까

// - array에 자료를 추가하거나 삭제하는 문법은 모르면 구글찾아봐야지 생각한다고 나오는 것은 아닙니다.
