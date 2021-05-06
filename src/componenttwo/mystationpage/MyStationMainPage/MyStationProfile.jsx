import { Footer } from 'components/commoncomponent/FooterLayout/Footer'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation'
import { SectionRightSideBar } from 'components/Section/SectionRightSideBar/SectionRightSideBar'
import React from 'react'
import { UserProFileTop } from '../UserprofileTop/UserProFileTop'
import mystation from './mystationprofile.module.scss'
export const MyStationProfile = () => {
    return (
        <>
        <Navigation/>
           <div className="row border p-0 m-0">
               <div className="col-md-2">
     <SectionRightSideBar/>
               </div>
               <div className='col-md-10'>
                 <div>
                    <div className="container">
                  

                    </div>


                 </div>



                 <UserProFileTop/>
               </div>

               </div>


         <Footer/>
        </>        
    
    )
}
