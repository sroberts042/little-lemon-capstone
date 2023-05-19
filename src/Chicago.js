import MA1 from "./icons_assets/Mario and Adrian A.jpg";
import MA2 from "./icons_assets/Mario and Adrian b.jpg";

import "./Chicago.css";

const Chicago = () => {
    return(
        <div id="about">
            <div id="about-left">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <h4>Vulputate ut pharetra sit amet aliquam id. Ornare massa eget egestas purus viverra accumsan in nisl. 
                    Viverra vitae congue eu consequat. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. 
                    At tempor commodo ullamcorper a. 
                    Tortor aliquam nulla facilisi cras fermentum. Sem viverra aliquet eget sit amet tellus.</h4>
            </div>
            <div id="about-right">
                <img src={MA1} alt="Mario and Adrian 1" />
                <img src={MA2} alt="Mario ad Adrian 2" />
            </div>
        </div>
    )
}

export default Chicago;