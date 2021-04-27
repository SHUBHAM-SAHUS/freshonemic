import React from 'react';
import './carousel.scss';
import {ReactCarousel} from 'components/NewHomePage/Carousel/ReactCarousel/ReactCarousel'


const Carousel = () => {
    

    return (
        <section>
            <div className="section-header">
                <h2 className="sec-heading float-left">Newly Added Topics</h2>
                <small className="float-right"> <a href="#">View all</a> </small>
                <div className="react-carousel">
                     <ReactCarousel/>
                </div>
            </div>
        </section>

    )
}

export default Carousel
