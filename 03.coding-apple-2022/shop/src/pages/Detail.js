import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styles from '../Detail.module.css';
import { useDispatch } from 'react-redux';

import { Context1 } from '../App';
import { addCart } from '../store';

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((item) => item.id === parseInt(id));
  let [visible, setVisible] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);
  let [load, setLoad] = useState('');

  let dispatch = useDispatch();

  function popup() {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }

  useEffect(() => {
    popup();
    return clearTimeout(popup());
  });

  useEffect(() => {
    if (isNaN(num)) {
      alert('숫자만 넣으세요 !');
    }
  }, [num]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(`${styles.end}`);
    }, 200);
    return () => {
      setLoad('');
    };
  }, []);

  return (
    <>
      {product ? (
        <div className={`container ${styles.start} ${load}`}>
          {visible ? <div className='alert alert-warning'>깍꿍</div> : ''}
          <div className='row'>
            <input
              onChange={(e) => {
                setNum(e.target.value);
              }}
              placeholder='숫자말고 다른거 넣으면 큰일나요'
            />
            <div className='col-md-6'>
              <img alt='shoes' src={product.img} width='100%' />
            </div>
            <div className='col-md-6'>
              <h4 className='pt-5'>{product.title}</h4>
              <p>{product.content}</p>
              <p>{product.price.toLocaleString()}원</p>
              <button
                className='btn btn-danger'
                onClick={() => {
                  dispatch(
                    addCart({
                      id: product.id,
                      name: product.title,
                      count: 1,
                    })
                  );
                }}
              >
                주문하기
              </button>
            </div>
          </div>
          <Nav variant='tabs' defaultActiveKey='link0'>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(0);
                }}
                eventKey='link0'
              >
                체결 거래
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(1);
                }}
                eventKey='link1'
              >
                판매 입찰
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(2);
                }}
                eventKey='link2'
              >
                구매 입찰
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent tab={tab} product={product} />
        </div>
      ) : (
        <div>없는 제품입니다</div>
      )}
    </>
  );

  function TabContent({ tab, product }) {
    let [fade, setFade] = useState();
    let { quantity } = useContext(Context1);

    useEffect(() => {
      setTimeout(() => {
        setFade(`${styles.end}`);
      }, 100);

      return () => {
        setFade('');
      };
    }, [tab]);

    return (
      <div className={`${styles.start} ${fade}`}>
        {
          [
            <div>{quantity}</div>,
            <div>
              Dolore culpa duis fugiat id commodo exercitation irure occaecat culpa tempor ea. Cupidatat et enim dolore
              aute amet. Duis labore esse Lorem ullamco elit sunt eu. Dolor do tempor veniam dolore nulla laborum culpa
              ipsum mollit irure aliquip irure. Dolore aliquip dolor exercitation laborum sit. Magna duis in voluptate
              consectetur duis. Minim irure reprehenderit non adipisicing laboris adipisicing enim cillum magna veniam.
            </div>,
            <div>
              Mollit Lorem quis amet quis sunt ad. Excepteur occaecat proident ad sunt enim minim. Eu duis eu magna amet
              incididunt id nisi veniam ad nulla sit consequat.
            </div>,
          ][tab]
        }
      </div>
    );
  }
}

export default Detail;
