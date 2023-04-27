import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function Cart() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  return (
    <div>
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
              <td></td>
            </tr>
          ))}
          <tr>
            <td>#</td>
            <td>{state.user}</td>
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
