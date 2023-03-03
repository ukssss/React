import React, { useRef, useState } from 'react';
import './App.css';
import Lifecycle from './Lifecycle';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: 'ukss',
//     content: '안녕~',
//     emotion: 3,
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: '홍성욱',
//     content: '안녕~~',
//     emotion: 1,
//     createdDate: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: '욱쓰',
//     content: '안녕~~~',
//     emotion: 4,
//     createdDate: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <div className='App'>
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
