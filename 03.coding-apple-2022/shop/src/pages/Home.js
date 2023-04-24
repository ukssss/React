import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import data from '../data';

function Home() {
  let [shoes, setShoes] = useState(data);

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
      <button
        onClick={() => {
          axios
            .get('http://localhost:4000/shoes')
            .then((result) => {
              let copy = [...shoes, ...result.data];
              setShoes(copy);
              console.log(copy);
            })
            .catch(() => {
              console.log('실패했다 ㅋㅋ');
            });
        }}
      >
        더보기
      </button>
      <Container>
        <Row>
          {shoes.map((item) => {
            return (
              <Col key={item.id}>
                <Product img={item.img} title={item.title} content={item.content} price={item.price} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
