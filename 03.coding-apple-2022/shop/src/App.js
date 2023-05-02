import { createContext, useState } from 'react';
import data from './data';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import { useQuery } from 'react-query';
import axios from 'axios';

export let Context1 = createContext();

function App() {
  let [shoes] = useState(data);

  let navigate = useNavigate();

  let result = useQuery('작명', () =>
    axios.get('http://localhost:4002/users').then((a) => {
      return a.data[0];
    })
  );

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>욱스마켓</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <div className='test'>
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
          </div>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home shoes={shoes} />} />
        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{ shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />

        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<div>404 Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
