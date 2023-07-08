import jeanImg from "./assets/jean-img.jpg";
import dressImg from "./assets/dress-img.jpg";
import shoeImg from "./assets/shoe-img.jpg";
import topImg from "./assets/top-img.jpg";

import "./ShoppingCard.css";
function ShoppingCard() {
    return (
        <ul>
            <div className="itemsContainer">
                <div className="singleImage">
                    <img src={jeanImg} alt="" />
                    <div>jeans under 50$</div>
                </div>
                <div className="singleImage">
                    <img src={dressImg} alt="" />
                    <p>dress under 50$</p>
                </div>
                <div className="singleImage">
                    <img src={shoeImg} alt="" />
                    <p>shoe under 50$</p>
                </div>
                <div className="singleImage">
                    <img src={topImg} alt="" />
                    <div>top under 50$</div>
                </div>
            </div>
            <div className="description">
            <div>
            <div class="price">
                <p>Offers on Products</p>
                </div>
          </div>
          <div>
            <div class="price"><p>Offers on Products</p></div>
          </div>
          <div>
            <div class="price"><p>Offers on Products</p></div>
          </div>
          <div>
            <div class="price">
                <p>Offers on Products</p></div>
          </div>
          </div>
            </ul>
            
            
    );
}

export default ShoppingCard;