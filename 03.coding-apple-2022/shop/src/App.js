import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data';

function App() {
  let [shoes] = useState(data);

  function Product(props) {
    return (
      <>
        {' '}
        <Col>
          <img src={props.img} alt='shoes' width='80%' />
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price}</p>
        </Col>
        ;
      </>
    );
  }

  return (
    <div className='App'>
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
      <div className='main-bg'></div>
      <Container>
        <Row>
          {shoes.map((item) => {
            return (
              <Product key={item.id} img={item.img} title={item.title} content={item.content} price={item.price} />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
