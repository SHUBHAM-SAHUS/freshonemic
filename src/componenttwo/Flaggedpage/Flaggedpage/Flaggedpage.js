
import { Footer } from 'components/commoncomponent/FooterLayout/Footer'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation'
import { SectionRightSideBar } from 'components/Section/SectionRightSideBar/SectionRightSideBar'
import React from 'react'
import { FlaggedMainPage } from '../FlaggedMainpage/FlaggedMainPage'

export const Flaggedpage = () => {
    return (
        <>
            <Navigation/>    
               <div style={{marginTop:"85px"}}>     
         <div className="row p-0 m-0">
                  <div className="col-md-2 ">  <SectionRightSideBar/>  </div>
                  <div className="col-md-10 ">  <FlaggedMainPage/>  </div>
                  </div>
    
              </div>
 
         <Footer/>
        </>
    )
}
