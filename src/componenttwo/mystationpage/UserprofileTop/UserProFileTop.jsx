import React from 'react'
import userprofiletop from "./userprofiletop.module.scss"
import profilebg1 from "../../../assets/images/profile-bg1.png"
import userimg from "../../../assets/images/user-image200.jpg"
export const UserProFileTop = () => {
    return (
        <div>
            <div className={`${userprofiletop.main_userprofrofile_cont}`}>
                  
            <section className="row ">
  <div className="col-md-12">
    <div className={` ${userprofiletop.profile_card_2}`}>
      <div className= {`${userprofiletop.card_img_block}`}  >
        <figure className= {`h-100  ${userprofiletop.figure }`}>
          <img className="img-fluid" src={profilebg1 } alt="Card image cap" />
          <figcaption className={`text-center ${userprofiletop.fixcaption}`}>
            <h2>Doeband&amp;co</h2>                          
          </figcaption>                          
        </figure>                     
      </div>
      <div className="card-body">
        <img src={userimg} alt="profile-image" className= {`${ userprofiletop.profile}`} profile />
        <div className="row ">
          <div className="col-4 offset-sm-2">
            <h3 className={`${userprofiletop.card_title}`} >John Doe</h3>
            <h5 className={`${userprofiletop.sub_title}`}>Johnjoeonemic</h5>
          </div>
          <div className="col-6 text-right">
            <div className= {`d-flex text-uppercase ${userprofiletop.feedback, userprofiletop.list_unstyled}`}>
              <div className={` ${userprofiletop.followers}`}>
                Followers <span className={`${userprofiletop.followers}`}>220</span>
              </div>
              <div className={`${userprofiletop.followers}`}>
                Following <span className={`${userprofiletop.followers}`}>100</span>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>       
  </div></section>

            </div>      
             
        </div>
    )
}
