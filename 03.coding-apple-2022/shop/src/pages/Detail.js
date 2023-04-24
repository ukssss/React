import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Detail.module.css';

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((item) => item.id === parseInt(id));
  let [visible, setVisible] = useState(true);
  let [num, setNum] = useState('');

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
        </div>
      ) : (
        <div>없는 제품입니다</div>
      )}
    </>
  );
}

export default Detail;
