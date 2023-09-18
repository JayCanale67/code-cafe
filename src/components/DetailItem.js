import { useParams } from "react-router-dom";
import { itemImages } from "../items";
import "./DetailItem.css";

function DetailItem({ items }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);
  return (
    <div className="detail-item-component">
      <img
        className="details-image"
        src={itemImages[detailItem.imageId]}
        alt={itemImages.coffee}
      />
      <h2>{detailItem.title}</h2>
      <div>$ {detailItem.price.toFixed(2)}</div>
    </div>
  );
}
export default DetailItem;
