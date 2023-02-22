import { useState } from 'react';

const DiaryEditor = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState('');

  const handleSubmit = () => {
    console.log('저장 완료!');
  };

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          name='author'
          placeholder='작성자'
          type='text'
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          name='content'
          placeholder='내용'
          type='text'
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          value={emotion}
          onChange={(e) => {
            setEmotion(e.target.value);
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
