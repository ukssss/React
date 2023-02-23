import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'ukss',
    content: '안녕~',
    emotion: 3,
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍성욱',
    content: '안녕~~',
    emotion: 1,
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    author: '욱쓰',
    content: '안녕~~~',
    emotion: 4,
    createdDate: new Date().getTime(),
  },
];

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
