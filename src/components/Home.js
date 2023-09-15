import Thumbnail from "./Thumbnail";
import { itemImages } from "../items";
import './Home.css';

function Home ({items}){
  return(
    <div className="home-component">
      { items.map((item) => (
        <Thumbnail 
         key={item.itemId}
         image={itemImages[item.imageId]} 
         title={item.title}
        />        
      ))}
    </div>
  );
}
export default Home;