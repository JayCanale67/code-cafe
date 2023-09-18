import { useParams } from "react-router-dom";
import { itemImages } from "../items";
import "./DetailItem.css";

function DetailItem({ items }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);
  return (
    <div className="detail-item-component">
      {detailItem ? (
        <>
          {detailItem.salePrice ? <div>Sale Price!</div> : ""}
          <img
            className="details-image"
            src={itemImages[detailItem.imageId]}
            alt={itemImages.coffee}
          />
          <h2>{detailItem.title}</h2>
          {detailItem.description && <h4>{detailItem.description}</h4>}
          <div>${(detailItem.salePrice ?? detailItem.price).toFixed(2)}</div>
        </>
      ) : (
        <h2>Unknown Item</h2>
      )}
    </div>
  );
}
export default DetailItem;
