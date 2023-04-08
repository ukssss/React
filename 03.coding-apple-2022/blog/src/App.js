import './App.css';

function App() {
  let post = '신림동 24시 서울밥집';

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '16px' }}>블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
