import { useParams } from "react-router-dom";
import { itemImages } from "../items";
import "./DetailItem.css";


function DetailItem({ addToCart, items }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);
  const addItemToCart = () => { addToCart(detailItem.itemId); };


  return (
    <div className="detail-item-component">
      {detailItem ? (
        <>
          {detailItem.salePrice ? <div>Sale Price! Today Only!</div> : ""}
          <img
            className="details-image"
            src={itemImages[detailItem.imageId]}
            alt={itemImages.coffee}
          />
          <h2>{detailItem.title}</h2>
          {detailItem.description && <h4>{detailItem.description}</h4>}
          <div>${(detailItem.salePrice ?? detailItem.price).toFixed(2)}</div>
          <button type="button" onClick={addItemToCart}>
            Add to Cart
          </button>
        </>
      ) : (
        <h2>Unknown Item</h2>
      )}
    </div>
  );
}
export default DetailItem;
