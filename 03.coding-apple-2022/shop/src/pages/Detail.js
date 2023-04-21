import data from '../data';

function Detail() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img alt='shoes' src={data[0].img} width='100%' />
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{data[0].title}</h4>
            <p>{data[0].content}</p>
            <p>{data[0].price.toLocaleString()}원</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
