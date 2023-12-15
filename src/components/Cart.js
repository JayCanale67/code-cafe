import "./Cart.css";
import axios from "axios";
import CartRow from "./CartRow";
import { useState, useRef } from "react";

function Cart({ cart, dispatch, items }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isEmployeeOfTheMonth, setIsEmployeeOfTheMonth] = useState(false);

  const subTotal = isEmployeeOfTheMonth
    ? 0
    : cart.reduce((acc, item) => {
        const detailItem = items.find((i) => i.itemId === item.itemId);
        const itemPrice = detailItem.salePrice ?? detailItem.price;
        return item.quantity * itemPrice + acc;
      }, 0);

  //const taxPercentage = parseInt(zipCode.substring(0, 1) || '0', 10) + 1;
  const taxPercentage = 0.65;
  const taxRate = taxPercentage / 100;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;
  const isFormValid = zipCode.length === 5 && name.trim();
  const debounceRef = useRef(null);
  const zipRef = useRef(null);

  const submitOrder = (event) => {
    event.preventDefault();
    //TODO
  };

  const setFormattedPhone = (newNumber) => {
    const digits = newNumber.replace(/\D/g, "");
    let formatted = digits.substring(0, 3);
    if (digits.length === 3 && newNumber[3] === "-") {
      formatted = `${formatted}-`;
    } else if (digits.length > 3) {
      formatted = `${formatted} - ${digits.substring(3, 6)}`;
    }
    if (digits.length === 6 && newNumber[7] === "-") {
      formatted = `${formatted}-`;
    } else if (digits.length > 6) {
      formatted = `${formatted} - ${digits.substring(6, 10)}`;
    }
    if (digits.length == 10) {
      zipRef.current.focus();
    }
    setPhone(formatted);
  };

  const onNameChange = (newName) => {
    setName(newName);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      axios
        .get(`/api/employees/isEmployeeOfTheMonth?name=${newName}`)
        .then((response) =>
          setIsEmployeeOfTheMonth(response?.data?.isEmployeeOfTheMonth)
        )
        .catch(console.error);
    }, 300);
  };

  return (
    <div className="cart-component">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty!</div>
      ) : (
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
                <CartRow
                  key={item.itemId}
                  cartItem={item}
                  items={items}
                  dispatch={dispatch}
                />
              ))}
            </tbody>
          </table>
          <div>Subtotal: ${subTotal.toFixed(2)}</div>
          <div>Tax: ${tax.toFixed(2)}</div>
          <hr />
          <div>Total: ${total.toFixed(2)}</div>
          <h2>Checkout</h2>
          <form onSubmit={submitOrder}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => onNameChange(event.target.value)}
                required
              />
            </label>
            <label htmlFor="phone">
              Phone Number
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => setFormattedPhone(event.target.value)}
                aria-label="Enter your phone number. After a phone number is entered, you will automatically be moved to the next field"
                required
              />
            </label>
            <label htmlFor="zipcode">
              Zip Code
              <input
                id="zipcode"
                type="text"
                maxLength="5"
                inputMode="numeric"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
                required
                ref={zipRef}
              />
            </label>
            <button type="submit" disabled={!isFormValid}>
              Order Now
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Cart;
