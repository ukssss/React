import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function Home(props) {
  let [shoes, setShoes] = useState('');

  function Product(props) {
    return (
      <>
        <Col>
          <img src={props.img} alt='shoes' width='80%' />
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price.toLocaleString()} 원</p>
        </Col>
      </>
    );
  }

  return (
    <>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {props.shoes.map((item) => {
            return (
              <Product key={item.id} img={item.img} title={item.title} content={item.content} price={item.price} />
            );
          })}
        </Row>
      </Container>
      <button
        onClick={() => {
          axios
            .get('http://localhost:4000/shoes')
            .then((result) => {
              setShoes(result.data);
            })
            .catch(() => {
              console.log('실패했다 ㅋㅋ');
            });
        }}
      >
        버튼
      </button>
      {shoes ? (
        <Container>
          <Row>
            {Array.from(shoes).map((item) => {
              return (
                <Product key={item.id} img={item.img} title={item.title} content={item.content} price={item.price} />
              );
            })}
          </Row>
        </Container>
      ) : (
        ''
      )}
    </>
  );
}

export default Home;
