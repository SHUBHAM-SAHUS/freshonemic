import React from 'react';
import './signUp.scss';
import './../NewHomePage/newHome.scss'
import signupBtn from 'assets/images/signup-btn.png'
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import logo from "assets/images/logo.png"

export const SignUp = () => {
  return (
    <>

      <section className="main">

        <div className="container-fluid">

          <div className="row">
            <div className="col-lg-4 offset-lg-4 signup_main mb-4">
              <Navbar className="nav-fixed" bg="dark" expand="lg px-3 fixed-top ">

                <Navbar.Brand href="/"> <img src={logo} /></Navbar.Brand>

              </Navbar>
              <div className="signup_header pt-3">
                <h5 className="signup_title text-center" >
                  <span className="">Sign Up</span></h5>
              </div>
              <div className="mt-4 modal-body">
                <form>
                  <div className="form-group">
                   
                      <label>Name</label>
                      <input type="text" name="name" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label>Email or Phone</label>
                      <input type="text" name="email" className="form-control" placeholder="Enter Email or Phone" />
                    </div>
                  
                  <div className="form-group">
                   
                      <label>Password</label>
                      <input type="password" name="email" className="form-control" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" name="email" className="form-control" placeholder="Enter Password" />
                   
                  </div>
                  <div className="form-group mb-5">
                    
                      <label>Invite Code</label>
                      <input type="text" name="email" className="form-control" placeholder="Enter Invite Code" />
                    </div>

                    <div className="form-group">                      
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">By creating an account, you agree to our <a className="signup_a" href="#">Terms of use</a></label>
                      </div>
                    </div>
                  <div className="form-group text-center mt-4">
                    <a className="btn-signin my-2 my-sm-0" type="submit" title="Sign Up"><img src={signupBtn} /></a>
                  </div>

                  <div className="form-group text-center mt-4">
                    <Link to="signin"><p className="text-dark">Already have an account? <a className="signup_a" href="#" title="Sign In">Sign In</a></p></Link>
                  </div>
                </form>
              </div>
              {/* <div className="modal-footer">
  </div> */}
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>

  )
}
