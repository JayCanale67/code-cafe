import "./Cart.css";
import CartRow from './CartRow';
import { useState } from "react";

function Cart({cart, dispatch, items}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');

  const subTotal = cart.reduce((acc, item) => {
    const detailItem = items.find((i) => i.itemId === item.itemId);
    const itemPrice = detailItem.salePrice ?? detailItem.price;
    return item.quantity * itemPrice + acc;
  }, 0);

  //const taxPercentage = parseInt(zipCode.substring(0, 1) || '0', 10) + 1;
  const taxPercentage = 0.65;
  const taxRate = taxPercentage / 100;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;


  const submitOrder = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('name: ', name);
    console.log('phone: ', phone);
    console.log('zipcode: ', zipCode);
  };

  return (
    <div className="cart-component">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (<div>Your cart is empty!</div>) : (
        <>
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
                <CartRow key={item.itemId} cartItem={item} items={items} dispatch={dispatch}/>
              ))}
            </tbody>
          </table>
          <div>Subtotal: ${subTotal.toFixed(2)}</div>
          <div>Tax: ${tax.toFixed(2)}</div>
          <hr/>
          <div>Total: ${total.toFixed(2)}</div>
          <h2>Checkout</h2>
          <form onSubmit={submitOrder}>
            <label htmlFor="name">Name<input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/></label>
            <label htmlFor="phone">Phone Number<input id="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)}/></label>
            <label htmlFor="zipcode">Zip Code<input id="zipcode" type="text" maxLength="5" inputMode="numeric"  value={zipCode} onChange={(event) => setZipCode(event.target.value)}/></label>
            <button type='submit'>Order Now</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Cart;
