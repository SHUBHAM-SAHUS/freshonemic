
import React from 'react'
import { AboutOneMic } from './aboutonemic/AboutOneMic'
import { AccordianLayout } from './AccordianLayout/AccordianLayout'
import { ExperienceOneMic } from './ExperienceOnemic/ExperienceOneMic'
import { LandingpageHeader } from './LandingpageHeader/LandingpageHeader'
import { SliderLayout } from './SliderLayoutpage/SliderLayout'
import { WhyOneMic } from './Whyonemic/WhyOneMic'

export const LandingPageLayout = () => {
    return (
        <div>
             <div> 

     <LandingpageHeader/> 
     <SliderLayout/> 
     <WhyOneMic/>
     <AboutOneMic/>
     <ExperienceOneMic/>
     <AccordianLayout/>
     
         
             </div>

        </div>
    )
}


