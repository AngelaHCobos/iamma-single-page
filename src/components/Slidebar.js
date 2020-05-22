import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slidebar = () => (
    <div >

        <div id="slider">
        </div>
        
        <Carousel 
        infiniteLoop autoPlay showArrows={false}
        showThumbs={false} showStatus={false} 
        showIndicators={true} useKeyboardArrows 
        className="presentation-mode">

            <div>
                <img src={require('../images/slider1.png')} />
            </div>
            <div>
                <img src={require('../images/slider2.png')} />
            </div>
            <div>
                <img src={require('../images/slider3.png')} />
            </div>

        </Carousel>

    </div>

    );
export default Slidebar;