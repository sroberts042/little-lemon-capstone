import GreekSalad from './icons_assets/greek salad.jpg';
import Bruchetta from "./icons_assets/bruchetta.svg";
import LemonDessert from "./icons_assets/lemon dessert.jpg";

import  "./Specials.css";

const Specials = () => {
    return(
        <div id="specials">
            <h1>This weeks specials!</h1>
            <div id="card-1">
                <img src={GreekSalad} alt="greek salad" id="greek-salad" />
                <h4>Greek Salad     $12.99</h4>
                <h5>Tortor posuere ac ut consequat semper viverra nam libero. Egestas congue quisque egestas diam in arcu cursus euismod. 
                    Vel orci porta non pulvinar neque laoreet. 
                    Tempus urna et pharetra pharetra massa massa ultricies mi quis. 
                    Etiam sit amet nisl purus in. Risus pretium quam vulputate dignissim. </h5>
                <h6>Order for delivery</h6>
            </div>
            <div id="card-2">
                <img src={Bruchetta} alt="bruchetta" id="bruchetta" />
                <h4>Bruchetta     $12.99</h4>
                <h5>Tortor posuere ac ut consequat semper viverra nam libero. Egestas congue quisque egestas diam in arcu cursus euismod. 
                    Vel orci porta non pulvinar neque laoreet. 
                    Tempus urna et pharetra pharetra massa massa ultricies mi quis. 
                    Etiam sit amet nisl purus in. Risus pretium quam vulputate dignissim. </h5>
                <h6>Order for delivery</h6>
            </div>
            <div id="card-3">
                <img src={LemonDessert} alt="lemon dessert" id="lemon-dessert" />
                <h4>Lemon Dessert     $12.99</h4>
                <h5>Tortor posuere ac ut consequat semper viverra nam libero. Egestas congue quisque egestas diam in arcu cursus euismod. 
                    Vel orci porta non pulvinar neque laoreet. 
                    Tempus urna et pharetra pharetra massa massa ultricies mi quis. 
                    Etiam sit amet nisl purus in. Risus pretium quam vulputate dignissim. </h5>
                <h6>Order for delivery</h6>
            </div>
        </div>
    )
}

export default Specials;