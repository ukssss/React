import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
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
          <Col>
            <img src={process.env.PUBLIC_URL + '/993.png'} alt='shoes' width='80%' />
            <h4>New Balance 993 Made in USA Grey - D Standard</h4>
            <p>뉴발란스 993 메이드 인 USA 그레이 - D 스탠다드</p>
          </Col>
          <Col>
            {' '}
            <img src={process.env.PUBLIC_URL + '/kwondo1.png'} alt='shoes' width='80%' />
            <h4>Nike x Peaceminusone Kwondo1 Black and White</h4>
            <p>나이키 x 피스마이너스원 퀀도1 블랙 앤 화이트</p>
          </Col>
          <Col>
            {' '}
            <img src={process.env.PUBLIC_URL + '/yasuhiro.png'} alt='shoes' width='80%' />
            <h4>Maison Mihara Yasuhiro Blakey OG Sole Canvas Low-top Sneakers Black White</h4>
            <p>메종 미하라 야스히로 블레이키 OG 솔 캔버스 로우탑 스니커즈 블랙 화이트</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
