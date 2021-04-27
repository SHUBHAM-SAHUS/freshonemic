import React from 'react';
import './signUp.scss';
import signupBtn from 'assets/images/signup-btn.png'


export const SignUp = () => {
    return (
        <>
  <div className="signup_header">
    <h5 className="signup_title text-center" >
      <span className="">Sign Up</span></h5>          
  </div>
  <div className="modal-body mt-4">
    <form>
      <div className="form-group row">
        <div className="col-lg-6">
          <label>Name Heelo</label>
          <input type="text" name="name" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="col-lg-6">
          <label>Email or Phone</label>
          <input type="text" name="email" className="form-control" placeholder="Enter Email or Phone" />
        </div>              
      </div>
      <div className="form-group row">
        <div className="col-lg-6">
          <label>Password</label>
          <input type="password" name="email" className="form-control" placeholder="Enter Password" />
        </div>
        <div className="col-lg-6">
          <label>Confirm Password</label>
          <input type="password" name="email" className="form-control" placeholder="Enter Password" />
        </div>
      </div>
      <div className="form-group row mb-5">
        <div className="col-lg-6">
          <label>Invite Code</label>
          <input type="text" name="email" className="form-control" placeholder="Enter Invite Code" />
        </div>
        <div className="col-lg-6">
          <label />
          <div className="form-check">                  
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">By creating an account, you agree to our <a className="signup_a" href="#">Terms of use</a></label>
          </div>
        </div>
      </div>
      <div className="form-group text-center mt-4">
        <a className="btn-signin my-2 my-sm-0" type="submit" title="Sign Up"><img src={signupBtn} /></a>
      </div>        		
      <div className="form-group text-center mt-4">	
        <p className="text-dark">Already have an account? <a className="signup_a" href="#" title="Sign In">Sign In</a></p>
      </div>
    </form>
  </div>
  <div className="modal-footer">
  </div>
</>

    )
}
