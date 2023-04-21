import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';
import Event from './pages/Event';

function App() {
  let navigate = useNavigate();

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
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버</div>} />
          <Route path='location' element={<div>위치</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<span>첫 주문시 양배추즙 서비스</span>} />
          <Route path='two' element={<span>생일기념 쿠폰받기</span>} />
        </Route>
        <Route path='*' element={<div>404 Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
