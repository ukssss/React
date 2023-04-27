import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from '../store/userSlice';
import { increase } from '../store';

function Cart() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  return (
    <div>
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
            <th>button</th>
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
                    dispatch(increase(i));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>#</td>
            <td>{state.user.name}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(changeName());
                }}
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
