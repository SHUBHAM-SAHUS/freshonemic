import { Footer } from 'components/commoncomponent/FooterLayout/Footer'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation'
import { SectionRightSideBar } from 'components/Section/SectionRightSideBar/SectionRightSideBar'
import React from 'react'
import { UserRecommendationComment } from '../UserRecoomendationComment/UserRecommendationComment'
import { UserTabComponent } from '../UserTabComponent/UserTabComponent'
import recomm from "./recommundation.module.scss"

 export const Recommendations = () => {
    return (
      <>  
      <Navigation/>
       

                <div className="row p-0 m-0">
                  <div className="col-md-2 ">  <SectionRightSideBar/>  </div>
                  <div className="col-md-10 ">  <UserTabComponent/> </div>



          
            </div>
          

      <Footer/>       
 
      </>
            
        
    )
}
