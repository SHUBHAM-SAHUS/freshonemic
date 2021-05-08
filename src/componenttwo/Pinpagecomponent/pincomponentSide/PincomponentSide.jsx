import { SocialFeedBack } from 'components/HomepageLayout/SocialFeedback/SocialFeedBack'
import { UserPostLayout } from 'components/HomepageLayout/UserpostLayout/UserPostLayout'
import { Comments } from 'components/PostDetailsLayout/Comments/Comments'
import React from 'react'
import pinside from "./pinside.module.scss"

export const PincomponentSide = () => {
    return (
        <> 
          <div className={` shadow mt-3 mb-3 ${pinside.pin_main_rds}`}>
        

          <UserPostLayout/>
          <hr/>
            <Comments/>

          </div>
           
         </>
    )
}
