import { Footer } from 'components/commoncomponent/FooterLayout/Footer'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation'
import { SectionRightSideBar } from 'components/Section/SectionRightSideBar/SectionRightSideBar'
import React from 'react'
import { PincomponentSide } from '../pincomponentSide/PincomponentSide'
import pincompo from "./pincompo.module.scss"

export const  PincomponentPage = () => {
    return (
        <>
            <Navigation/> 
          

               <div style={{marginTop:"85px"}}>
             
         <div className="row p-0 m-0">
                  <div className="col-md-2 ">  <SectionRightSideBar/>  </div>
                  <div className="col-md-10 ">  
                  <div>
           <h4 className="mt-2 mb-2 ml-3">      Pins </h4>
           <div className= {`ml-3 ${pincompo.head_lower_recommendation}`}> </div>
            </div>    
                  <PincomponentSide/> 
                  <PincomponentSide/> 

                  <PincomponentSide/> 
                  
                   </div>
                  </div>
    
              </div>
 
         <Footer/>
        </>
    )
}
