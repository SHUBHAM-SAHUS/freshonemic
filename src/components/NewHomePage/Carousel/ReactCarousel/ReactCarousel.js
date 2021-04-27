import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import {Item} from "./Item";
import "./reactCarousel.scss";

const breakPoints = [
  { width: 320, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

export const ReactCarousel = () => {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="react-container">
      <div className="carousel-wrapper">
        <Carousel className="carousasel_main" breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

