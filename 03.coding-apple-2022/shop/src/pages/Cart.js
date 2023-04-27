import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
  let cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
