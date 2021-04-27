import { CarouselItem } from 'components/HomepageLayout/CarouselItem/CarouselItem'
import React from 'react'
import {Carousel} from "react-bootstrap"
import { SliderItemone } from './SliderItem/SliderItemone'
import blackone from "../../../assets/images/black.jpg"
import blacktwo from "../../../assets/images/blacktwo.jpg"


 export const SliderLayout = () => {
    return (
        <>

        <div className="bg-dark ">
        <Carousel fade>
  <Carousel.Item interval={500}>

<SliderItemone black={blackone }/>

  </Carousel.Item>
  <Carousel.Item interval={500}>

  <SliderItemone black={blacktwo}/>

  </Carousel.Item>
 
</Carousel>

       </div>         



</>   

        
    )
}


