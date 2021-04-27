import React from 'react';
import imgaeSide1 from 'assets/images/image-side1.jpg'
import imgaeSide2 from 'assets/images/image-side2.png'
import imgaeSide3 from 'assets/images/image-side3.png'
import imgaeSide4 from 'assets/images/image-side4.png'
import './rightSidebar.scss'

export const RightSidebar = () => {
    return (          
          <div className="widget-section blue-bg col-md-12 pt-4">
            <section>
              <div className="section-header">
                <h2 className="sec-heading widget-heading text-white float-left">Top Rated Topics</h2>
                <small className="float-right"> <a href="#">View all</a> </small> </div>
              <div className="topic-list">
                <ul className="list-unstyled">
                  <li>
                    <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imgaeSide1} alt="Generic placeholder image" />
                      <div className="media-body mt-2">
                        <h6 className="mt-0 topic-title"><a href="#">What is your openion on commercial Ads</a></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imgaeSide2} alt="Generic placeholder image" />
                      <div className="media-body mt-2">
                        <h6 className="mt-0 topic-title"><a href="#">Conflict in your aptitude &amp; 
                            qualification?</a></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imgaeSide3} alt="Generic placeholder image" />
                      <div className="media-body mt-2">
                        <h6 className="mt-0 topic-title"><a href="#">Storiyoh | Core Purpose</a></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imgaeSide4} alt="Generic placeholder image" />
                      <div className="media-body mt-2">
                        <h6 className="mt-0 topic-title"><a href="#">Little Storiyohs</a></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imgaeSide1} alt="Generic placeholder image" />
                      <div className="media-body mt-2">
                        <h6 className="mt-0 topic-title"><a href="#">Thoughts on IoT</a></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imgaeSide2} alt="Generic placeholder image" />
                      <div className="media-body mt-2">
                        <h6 className="mt-0 topic-title"><a href="#">Fundamentals of c progra-
                            mming-test</a></h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
      
    )
}
