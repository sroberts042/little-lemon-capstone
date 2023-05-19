import Recent from "./icons_assets/restauranfood.jpg";

import "./CallToAction.css";

const CallToAction = () => {
    return(
        <div id="hero">
            <div id="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi. </h3>
            </div>
            <img src={Recent} alt="little lemon hero"/>
        </div>
    )
}

export default CallToAction;