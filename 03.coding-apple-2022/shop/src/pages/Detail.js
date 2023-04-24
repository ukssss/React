import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Detail.module.css';

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((item) => item.id === parseInt(id));
  let [visible, setVisible] = useState(true);
  let [text, setText] = useState('');
  let [alertText, setAlertText] = useState(false);

  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  const onChange = (e) => {
    setText(e.keyCode);
  };

  useEffect(() => {
    if (text >= 65 && text <= 122) {
      setAlertText(true);
    } else {
      setAlertText(false);
    }
  }, [text]);

  return (
    <>
      {product ? (
        <div className='container'>
          {visible ? <div className='alert alert-warning'>깍꿍</div> : ''}
          <div className='row'>
            <input onKeyDown={onChange} placeholder='숫자말고 다른거 넣으면 큰일나요' />
            {alertText ? (
              <div>
                <span>숫자만 넣으세요 !!!</span>
              </div>
            ) : (
              ''
            )}
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
