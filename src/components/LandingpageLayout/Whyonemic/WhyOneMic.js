import React from 'react'
import "./onemic.scss"
import onemicbg from "../../../assets/images/whyonemic-bg.jpg"
import iconplay from "../../../assets/images/icon-play.png"
import iconmic from "../../../assets/images/icon-mic.png"
import iconmusic from "../../../assets/images/icon-music.png"
import icongroup from "../../../assets/images/icon-group.png"

export const WhyOneMic = () => {
    return (
        <>
        <div className="mainonemic" style={{ backgroundImage:`url(${onemicbg})` }}>
        <div className="p-5" id="whyOnemic">
  <div className="container">
    <h2 className="section-heading text-center mb-5">Why OneMic?</h2>
    <div className="row ">
      <div className="col-md-3 col-md-mt-1">
        <div className="widget text-center">
          <div className="widget-icon">
            <img src={iconplay} />
          </div>
          <h4 className="widget-heading">Play your favorites</h4>
          <p className="widget-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. </p>
          <a href="#">more...</a>
        </div>
      </div>
      <div className="col-md-3 col-md-mt-2">
        <div className="widget text-center">
          <div className="widget-icon">
            <img src={iconmusic} />
          </div>
          <h4 className="widget-heading">Playlists made easy</h4>
          <p className="widget-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. </p>
          <a href="#">more...</a>
        </div>
      </div>
      <div className="col-md-3 col-md-mt-2">
        <div className="widget text-center">
          <div className="widget-icon">
            <img src={iconmic} />
          </div>
          <h4 className="widget-heading">Create Audio Room</h4>
          <p className="widget-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. </p>
          <a href="#">more...</a>
        </div>
      </div>
      <div className="col-md-3 col-md-mt-5">
        <div className="widget text-center">
          <div className="widget-icon">
            <img src={icongroup} />
          </div>
          <h4 className="widget-heading">Build a community</h4>
          <p className="widget-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.</p>
          <a href="#">more...</a>
        </div>
      </div>
    </div>
  </div>
</div> 
           
            </div> 

        </>
    )
}

