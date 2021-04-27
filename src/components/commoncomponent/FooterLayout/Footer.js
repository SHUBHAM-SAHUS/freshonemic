import React from 'react'
import "./footer.scss"
 import goggleplay from "../../../assets/images/google-play.png"
 import footerlogo from "../../../assets/images/footer-logo.png"
 import applestore from "../../../assets/images/apple-store.png"
export const Footer = () => {
    return (
        <>
      <footer className="mainfooter ">
  <div className="container-fluid">
    <div className="row clearfix">
      <div className="col-md-3"> <a href="#"> <img src={footerlogo} alt="footerlogo" /> </a>
        <div className="copy-right mt-2">
          <p>Copyright @ 2021. <a href="#">Storiyoh</a>.  All rights reserved</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row clearfix">
          <div className="col-md-4">
            <ul className="footer_ul">
              <li><a   className="footer_li_a"  >About Storiyoh OneMic</a></li>
              <li><a  className="footer_li_a"> FAQ's </a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="footer_ul">
              <li><a  className="footer_li_a" >Terms of Use</a></li>
              <li><a   className="footer_li_a">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul  className="footer_ul">
              <li><a  className="footer_li_a">Moderator Policy</a></li>
              <li><a   className="footer_li_a">Help &amp; Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <h5>Download the app from</h5>
        <a href="#" className="mr-1"><img src={goggleplay} alt="googleplay" /></a> <a href="#"><img src={applestore} alt="applestore" /></a> </div>
    </div>
  </div>
</footer>
        </>
            
        
    )
}

