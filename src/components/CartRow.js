import ItemType from '../items';

function CartRow({ cartItem, items }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.title}</td>
      <td>
        $
        {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
      </td>
    </tr>
  );
}
export default CartRow;