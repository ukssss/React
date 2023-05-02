import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import data from '../data';
import { Link, useNavigate, NavLink } from 'react-router-dom';

function Home() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  let [visible, setVisible] = useState(false);

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

  useEffect(() => {
    function loadingText() {
      if (count) {
        setVisible(true);
      }
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
    loadingText();
    return clearTimeout(loadingText());
  }, [count]);

  return (
    <>
      <div className='main-bg'></div>
      {count !== 2 ? (
        <button
          onClick={() => {
            if (count === 0) {
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
              setCount(1);
            } else if (count === 1) {
              axios
                .get('http://localhost:4001/shoes')
                .then((result) => {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  console.log(copy);
                })
                .catch(() => {
                  console.log('실패했다 ㅋㅋ');
                });
              setCount(2);
            }
          }}
        >
          더보기
        </button>
      ) : (
        ''
      )}
      {visible ? <div>로딩중 ⚡︎</div> : ''}

      <Container>
        <Row>
          {shoes.map((item) => {
            return (
              <Col key={item.id}>
                <NavLink to={`/detail/${item.id}`}>
                  <Product img={item.img} title={item.title} content={item.content} price={item.price} />
                </NavLink>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
