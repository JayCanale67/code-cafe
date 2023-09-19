import ItemType from '../items';
import { CartTypes } from '../reducer/cartReducer';

function CartRow({ cartItem, items, dispatch }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);
  const removeItemFromCart = () => {
    dispatch({type: CartTypes.REMOVE, itemId: item.itemId });
  };

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.title}</td>
      <td>
        $
        {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
      </td>
      <td>
        <button type="button" onClick={removeItemFromCart}>
        X
        </button>
      </td>
    </tr>
  );
}
export default CartRow;