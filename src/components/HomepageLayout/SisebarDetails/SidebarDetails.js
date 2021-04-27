import React from 'react'
import side1 from "../../../assets/images/image-side1.jpg"
import side2 from "../../../assets/images/image-side2.png"
import side3 from "../../../assets/images/image-side3.png"
import side4 from "../../../assets/images/image-side4.png"
import "./sidedetails.scss"
const SidebarDetails = () => {
    return (
        <>
            
      {/* Right Sidebar */}
<div className="row">
  <div className=" clearfix"> 
    {/* Top rated widget*/}
    <div className="widget-section blue-bg col-12 pt-4">
      <section>
        <div className="section-header">
          <h2 className="sec-heading widgetheading">Top Rated Topics</h2>
          <small className=""> <a  className="clearfix_clr" >View all</a> </small> </div>
        <div className="topic-list">
          <ul className="list-unstyled">
            <li>
              <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side1} alt="Generic placeholder image" />
                <div className="media-body mt-2">
                  <h6 className="mt-0 topic-title"><a  className="clearfix_clr">What is your openion on commercial Ads</a></h6>
                </div>
              </div>
            </li>
            <li>
              <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side2} alt="Generic placeholder image" />
                <div className="media-body mt-2">
                  <h6 className="mt-0 topic-title"><a  className="clearfix_clr">Conflict in your aptitude &amp; 
                      qualification?</a></h6>
                </div>
              </div>
            </li>
            <li>
              <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side3} alt="Generic placeholder image" />
                <div className="media-body mt-2">
                  <h6 className="mt-0 topic-title"><a  className="clearfix_clr">Storiyoh | Core Purpose</a></h6>
                </div>
              </div>
            </li>
            <li>
              <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side4} alt="Generic placeholder image" />
                <div className="media-body mt-2">
                  <h6 className="mt-0 topic-title"><a  className="clearfix_clr">Little Storiyohs</a></h6>
                </div>
              </div>
            </li>
            <li>
              <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side2} alt="Generic placeholder image" />
                <div className="media-body mt-2">
                  <h6 className="mt-0 topic-title"><a  className="clearfix_clr" >Thoughts on IoT</a></h6>
                </div>
              </div>
            </li>
            <li>
              <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side2} alt="Generic placeholder image" />
                <div className="media-body mt-2">
                  <h6 className="mt-0 topic-title"><a  className="clearfix_clr" >Fundamentals of c progra-
                      mming-test</a></h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    {/*//*/} 
    {/**/}
    

    {/*//*/} 
  </div>
</div>


     </>
    )
}

export default SidebarDetails

          
