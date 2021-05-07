import React,{useState,useRef} from "react";
import "./signUp.scss";
import "./../NewHomePage/newHome.scss";
import signupBtn from "assets/images/signup-btn.png";
import { Footer } from "components/commoncomponent/FooterLayout/Footer";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import logo from "assets/images/logo.png";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import {BsEyeFill} from "react-icons/bs";

export const SignUp = () => {
  const {register, errors, handleSubmit, watch ,reset} = useForm({ mode: "onBlur" });

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const password = useRef({});
  password.current = watch("password", "");


  const update = (val) => {
    console.log(val);
  };

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
                <h5 className="signup_title text-center">
                  <span className="">Sign Up</span>
                </h5>
              </div>
              <div className="mt-4 modal-body">
                <form onSubmit={handleSubmit(update)}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      autocomplete="off"
                      className={classNames("form-control", {
                        "is-invalid": errors.display_name,
                      })}
                      name="display_name"
                      id="name"
                      placeholder="Enter your full name here"
                      ref={register({
                        required: " Please enter your full name",

                        pattern: {
                          value: /^[a-zA-Z\s]*$/,
                          message: " Numeric values are not allowed",
                        },
                        maxLength: {
                          value: 25,
                          message: "Maximum 25 characters can be entered",
                        },
                      })}
                    />
                    {errors.display_name && (
                      <p className="text-danger  oom">
                        {errors.display_name.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Email or Phone</label>
                    <input
                      type="text"
                      name="name"
                      autocomplete="off"
                      placeholder="Enter Email or Password"
                      className={classNames("form-control", {
                        "is-invalid": errors.name,
                      })}
                      name="name"
                      id="name"
                      placeholder="Enter your full name here"
                      ref={register({
                        required: " This Field is Required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger  oom">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div className="mb-2 ">
            <label for="exampleInputPassword1" className="form-label">
              Create Password
            </label>
             <div className="pst">
               
            <input
              type="password"
              autocomplete="off"
              className={classNames("form-control", {
                "is-invalid": errors.password
              })}
              id="exampleInputPassword1"
              name="password"
              type={passwordShown ? "text" : "password"}
              
              ref={register({
                required: "You must enter password",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters"
                }
              })}
               
              />
              <i className="eye" onClick={togglePasswordVisiblity}>{ <BsEyeFill/>}</i>
              </div>
              {errors.password && <p className="text-danger p-0 m-0">{errors.password.message}</p>}
             </div>
      

       




                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <div className="pst">
            <input
              type="password"
              className={classNames("form-control", {
                "is-invalid": errors.password_confirm
              })}
              id="exampleInputPassword1"
              type={passwordShown1 ? "text" : "password"}
              name="password_confirm"
              ref={register({
                validate: value =>
                  value === password.current || "  Password  mismatch"
              })}
            />
              <i className="eye"   onClick={togglePasswordVisiblity1}>{ <BsEyeFill/>}</i>
           </div>
                  </div>
                
                  {errors.password_confirm && <p className="text-danger">{errors.password_confirm.message}</p>}

                  <div className="form-group mb-5">
                    <label>Invite Code</label>
                    <input
                      placeholder="Enter Invite Code"
                      type="text"
                      name="invite_code"
                      autocomplete="off"
                      placeholder="Enter Email or Password"
                      className={classNames("form-control", {
                        "is-invalid": errors.invite_code,
                      })}
                      ref={register({
                        required: " This Field is Required",
                      })}
                    />
                    {errors.invite_code && (
                      <p className="text-danger  oom">
                        {errors.invite_code.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        autocomplete="off"
                        type="checkbox"
                      
                        id="gridCheck"
                        ref={register({required:"Please tick the checkbox of T&C and Privacy Policy"
                        
                        })}
                        name="isAdmin"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        By creating an account, you agree to our{" "}
                        <a className="signup_a" href="#">
                          Terms of use
                        </a>
                      </label>
                    </div>
                  </div>
                  {errors.isAdmin && <p className="text-danger p-0 m-0">{errors.isAdmin.message}</p>}
                  <div className="form-group text-center mt-4">
                    {/* <a className="btn-signin my-2 my-sm-0" type="submit" title="Sign Up"><img src={signupBtn} /></a> */}
                    <button className="btn_signup my-2 my-sm-0 bg-primary">
                      {" "}
                      Sign Up{" "}
                    </button>
                  </div>

                  <div className="form-group text-center mt-4">
                    <Link to="signin">
                      <p className="text-dark">
                        Already have an account?{" "}
                        <a className="signup_a" href="#" title="Sign In">
                          Sign In
                        </a>
                      </p>
                    </Link>
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
  );
};
