import React from 'react'
import topicpage from  "./Topicpage.module.scss"
import auther1 from "../../../assets/images/auther1.jpg"
import dlt1 from "../../../assets/images/dlt1.png"
import voice1 from "../../../assets/images/voice-image.jpg"
import widget1 from "../../../assets/images/widget-1.jpg"
import flag1 from "../../../assets/images/icon-flag.png"

export const TopPageComponent = () => {
    return (
        <>
        <div>
             
        <div className={`section-body mt-2 ${topicpage.bdr_radius}`}    >
  <div className="article"> 
    {/* Media */}
    <div className="media border1 p-3"> <img src={auther1} alt="John Doe" className="mr-3 rounded-circle" style={{"width":"65px"}} />
      <div className="media-body"> 
        {/* */}
        <div className="accordion" id="accordion2">
          <div className="accordion-group">
            <div className="accordion-heading">
              <h5 className="top-padding">Why Colleges now imposing uniforms?<a href><img src={dlt1} alt="dlt" className="float-right deleteicon pl-3" /></a> <a href className="float-right"><img src={flag1} alt="flag" className="img-fluid" /><span className=" text-dark pl-2">01</span></a> 
             
              </h5>
              <p className="author">Created on <a href="#"> sep 25 2020 </a></p>
            </div>
            <div id="collapseOne" className="accordion-body collapse">
              <div className="accordion-inner">
                <div className="article-body">
                  
                 
                </div>
                {/**/}
                <hr />
              
                {/*//*/} 
              </div>
            </div>
          </div>
        </div>
        {/*//*/} 
      </div>
    </div>
  </div>
  {/*//*/} 
</div>

        </div>
            

        </>
    )
}
