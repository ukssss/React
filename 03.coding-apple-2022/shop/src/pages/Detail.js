import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  let product = props.shoes.find((item) => item.id === parseInt(id));

  return (
    <>
      {product ? (
        <div className='container'>
          <div className='row'>
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
