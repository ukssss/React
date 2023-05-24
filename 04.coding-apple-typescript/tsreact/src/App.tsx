import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, increment } from './index';

function App() {
  const takeOut = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      {takeOut.counter1.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
