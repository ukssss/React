import { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  // const handleChangeState = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          onChange={(e) => {
            setState({
              author: e.target.value,
              content: state.content,
              emotion: state.emotion,
            });
          }}
          name='author'
          placeholder='작성자'
          type='text'
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              author: state.author,
              content: e.target.value,
              emotion: state.emotion,
            });
          }}
          name='content'
          placeholder='내용'
          type='text'
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          value={state.emotion}
          onChange={(e) => {
            setState({
              author: state.author,
              content: state.content,
              emotion: e.target.value,
            });
          }}
          name='emotion'
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
