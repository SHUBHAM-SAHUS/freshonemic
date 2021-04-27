import React from 'react'
import auther1 from "../../../assets/images/auther1.jpg"
import lockicon from "../../../assets/images/lock-icon.png"
import dropdowncross from "../../../assets/images/dropdown-cross-btn.png" 
import widgetimg1 from "../../../assets/images/widget-1.jpg"
import widgetimg2 from "../../../assets/images/widget-2.jpg"
import widgetimg3 from "../../../assets/images/widget-3.jpg"
import widgetimg4 from "../../../assets/images/widget-4.jpg"
import voiceimg from "../../../assets/images/voice-image.jpg"
import "./userpost.scss"
export const UserPostLayout = () => {
    return (
      <>
      <div className='row'>
         <div className="col-12">
         <div className="section-userpost mb-3 mt-2 px-2">
  <div className="article"> 
    {/* Media */}
    <div className="media p-3"> <img src={auther1} alt="John Doe" className="mr-3 rounded-circle" style={{"width":"86px"}} />
      <div className="media-body">
        <div className="article-title">
          <h5>Why Colleges now imposing uniforms? <span className="locked alert-bg"><img src={lockicon} alt="pic" /></span> <a href="#" className="btn btn-round prm-btn font-12 mr-2 float-right">Follow</a> </h5>
        </div>
        <div className="article-body">
          <h5>I Totally agree <a className="btn btn-outline-primary btn-round font-12 float-right"><img src={dropdowncross} alt="pic" width={25} height={25} /> &nbsp; Create Post</a> </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small>more...</small></a></p>
          <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
          {/**/}
          <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> English </a> </div>
          {/*//*/} 
          <img src={voiceimg}  alt="voiceimg"  className="img-fluid mb-4" />
          <div className="popup-images d-flex"> <a href="#" className="m-1"> <img src={widgetimg1} alt="pic1"   className="brd-rounded5" /> </a> <a href="#" className="m-1"> <img src={widgetimg1} alt="pic2"  className="brd-rounded5" /> </a> <a href="#" className="m-1"> <img src={widgetimg3} alt="pic3"  className="brd-rounded5" /> </a> <a href="#" className="m-1"> <img src={widgetimg4} alt="pic4"  className="brd-rounded5" /> </a> </div>
        </div>
      </div>
    </div>
   
  </div>
</div> 

         </div>

  
</div>

      </>
            
        
    )
}


