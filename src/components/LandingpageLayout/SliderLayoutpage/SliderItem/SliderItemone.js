import React from 'react'
import "./sliderstyle.scss"
import backgroundone from "../../../../assets/images/black.jpg"

export const SliderItemone = (props) => {
    console.log(props)
    return (
        <>
          
          <div>
          
          <div id="content-wrapper" className="py-5 main_slider_back-first"  style={{ backgroundImage: `url(${props.black})` }}>
  <div className="container justify-content-center text-center">
    <div className="page-header mb-3"><h1>Giving Voice To Your Stories</h1></div>
    <h4 className="subheading mb-5">Share your stories by creating amazing audios that anyone can listen to anytime, anywhere.<br /> We are redefining podcast.</h4>
    <p>Ready for a whole new world of <a href="#">Storytelling?</a> Enter your email or mobile number to start your journey.</p>
    <form className="form-inline justify-content-center mt-5">
      <input type="text" name="email" placeholder="Enter Email or Mobile Number" className="mr-3 getstarted" />
      <button type="submit" className="btn btn-primary-gradiant btn-getstarted">Get Started</button>
    </form>
  </div>{/* End Well */}
</div>


          </div>


        </>
            
        
    )
}

