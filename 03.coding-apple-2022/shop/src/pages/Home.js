import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../data';

function Home() {
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
    <>
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
    </>
  );
}

export default Home;
