import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store/userSlice';
import { increase, removeCart } from '../store';
import { useState, memo } from 'react';

let Child = memo(function () {
  console.log('재렌더링됨');
  return <div>자식임</div>;
});

function Cart() {
  let state = useSelector((state) => state);
  let [count, setCount] = useState(0);

  let dispatch = useDispatch();

  return (
    <div>
      <Child />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h4>
        {state.user.name} {state.user.age} 의 장바구니
      </h4>

      <button
        onClick={() => {
          dispatch(changeAge(20));
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>count</th>
            <th>Increase</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increase(item));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(removeCart(item));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

// memo() => 컴포넌트 불필요한 재렌더링 막기
// useMemo() => 컴포넌트 로드시 1회만 실행하고 싶은 코드가 있을 경우 사용
