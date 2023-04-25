import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Detail.module.css';
import { Nav } from 'react-bootstrap';

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((item) => item.id === parseInt(id));
  let [visible, setVisible] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);

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

  return (
    <>
      {product ? (
        <div className='container'>
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
              <button className='btn btn-danger'>주문하기</button>
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
          {
            [
              <div>
                Aute nulla anim non proident. Sit officia officia proident nostrud consequat quis est culpa cupidatat
                laboris duis eiusmod sunt veniam. Voluptate exercitation occaecat nostrud nostrud est elit ex magna do
                et exercitation. Velit culpa anim velit sunt sunt eiusmod adipisicing qui cillum pariatur amet.
                Reprehenderit nostrud consequat laborum nulla reprehenderit do incididunt tempor enim consectetur. Do do
                non ea mollit officia labore et minim ex culpa quis.
              </div>,
              <div>
                Dolore culpa duis fugiat id commodo exercitation irure occaecat culpa tempor ea. Cupidatat et enim
                dolore aute amet. Duis labore esse Lorem ullamco elit sunt eu. Dolor do tempor veniam dolore nulla
                laborum culpa ipsum mollit irure aliquip irure. Dolore aliquip dolor exercitation laborum sit. Magna
                duis in voluptate consectetur duis. Minim irure reprehenderit non adipisicing laboris adipisicing enim
                cillum magna veniam.
              </div>,
              <div>
                Mollit Lorem quis amet quis sunt ad. Excepteur occaecat proident ad sunt enim minim. Eu duis eu magna
                amet incididunt id nisi veniam ad nulla sit consequat.
              </div>,
            ][tab]
          }
        </div>
      ) : (
        <div>없는 제품입니다</div>
      )}
    </>
  );
}

export default Detail;
