import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className='App'>
      <Button variant='primary'>버튼</Button>{' '}
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>욱스마켓</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#outer'>Outer</Nav.Link>
            <Nav.Link href='#top'>Top</Nav.Link>
            <Nav.Link href='#bottom'>Bottom</Nav.Link>
            <Nav.Link href='#accessories'>Accessories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
