import React from 'react'
import "./experiencestyle.scss"
import appicon from "../../../assets/images/app-image.png"
import applebtn from "../../../assets/images/apple-btn.png"
import gplaylebtn from "../../../assets/images/gplay-btn.png"

export const ExperienceOneMic = () => {
    return (
        <>
        <div>

        <div  className=" pt-5 clearfix">
  <div className="container">
    <div className="row pt-5">
      <div className="col-md-6">
        <img src={appicon} className="img-fluid float-right" />
      </div>
      <div className="col-md-6 pt-5">
        <h2 className="section-heading mb-4 mt-4">Experience OneMic App On Mobile</h2>
        <p className="mb-4 text_body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <a href="#" title="Google Play Store">
          <img src={gplaylebtn} alt="gplay" />&nbsp;
        </a>
        <a href="#" title="Apple Store">
          <img src={applebtn} alty="apple" />
        </a>
      </div>
    </div>
  </div>
</div>


         </div>
        </>
            
        
    )
}

