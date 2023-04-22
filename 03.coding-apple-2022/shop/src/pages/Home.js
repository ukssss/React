import { Container, Row, Col } from 'react-bootstrap';

function Home(props) {
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
          {props.shoes.map((item) => {
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
