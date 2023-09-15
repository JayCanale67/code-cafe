import { itemImages, ItemType} from '../items';
import Thumbnail from './Thumbnail';
import './Details.css';
import { Outlet } from 'react-router-dom';

function Details({ items }) {
  return (
    <div className="details-component">
      <Outlet />
     <div className="details-component-sidebar"> 
        { items.map((item) => (
        <Thumbnail 
         key={item.itemId}
         image={itemImages[item.imageId]} 
         title={item.title}
         itemId={item.itemId}
        />        
      ))}
      </div>
    </div>
  );
}
export default Details;