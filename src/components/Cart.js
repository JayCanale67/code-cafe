import "./Cart.css";
import CartRow from './CartRow';

function Cart({cart, items}) {
  return (
    <div className="cart-component">
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartRow key={item.itemId} cartItem={item} items={items} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
