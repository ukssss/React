import React, { useState } from 'react';
import './App.css';

function App() {
  let [user, setUser] = useState('ukss');

  return (
    <div>
      <h4>반갑다이</h4>
      <Profile name='ukss' age={26}></Profile>
    </div>
  );
}

function Profile(props: { name: string; age: number }): JSX.Element {
  return <div>{props.name} 프로필이다이</div>;
}

export default App;
