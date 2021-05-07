import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./forgotPage.scss";
import classNames from "classnames";
import validateBtn from "assets/images/validate-btn.png";
import signinBtn from "assets/images/signin-btn.png";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import logo from "assets/images/logo.png";
import { Footer } from "components/commoncomponent/FooterLayout/Footer";
import { BsEyeFill } from "react-icons/bs";
import OtpInput from "react-otp-input";

export const ForgotPage = () => {
  const { register, errors, handleSubmit, watch, reset } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const password = useRef({});
  password.current = watch("password", "");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };


  const update = (data) => {
    console.log(data)
    
        }



  return (
    <>
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12 forgot_main_container">
              <Navbar
                className="nav-fixed"
                bg="dark"
                expand="lg px-3 fixed-top"
              >
                <Navbar.Brand href="/">
                  {" "}
                  <img src={logo} />
                </Navbar.Brand>
              </Navbar>
              <div className="forgot_header pt-3">
                <h5 className="forgot_title text-center" id="exampleModalLabel">
                  <span className="title">Forgot Your Password</span>
                </h5>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(update)}>
                  <div className="form-group">
                    <label
                      className="text-18"
                      htmlFor="validationServerUsername"
                    >
                      Username
                    </label>
                    <div className="input-group forgot_input">
                    <input
                      type="text"
                      name="email"
                      autocomplete="off"
                      placeholder="Enter Email or Password"
                      className={classNames("form-control", {
                        "is-invalid": errors.email,
                      })}
                      
                      id="name"
                      placeholder="Enter your full name here"
                      ref={register({
                        required: " This Field is Required",
                      })}
                    />
                      

                      <div className="valid-feedback">
                        <img src={validateBtn} />
                      </div>
                      <div className="invalid-feedback">
                        {/* <img src={validateBtn} /> */}
                      </div>
                    </div>
                    {errors.email && <p className="text-danger p-0 m-0">{errors.email.message}</p>}
                  </div>
                  <div className="form-group" id="verify">
                    <label className="text-18">Verification Code</label>
                    <br />
                    <OtpInput
          onChange={otp => console.log(otp)}
          numInputs={6}
          separator={<span>-</span>}
        />
                  </div>
                  <div className="form-group">
                    <label className="text-18">Password</label>
                    <div className="pst">
                      <input
                        type="password"
                        autocomplete="off"
                        className={classNames("form-control", {
                          "is-invalid": errors.newPassword,
                        })}
                        id="exampleInputPassword1"
                        name="newPassword"
                        type={passwordShown ? "text" : "password"}
                        ref={register({
                          required: "You must enter password",
                          minLength: {
                            value: 6,
                            message: "Password must have at least 6 characters",
                          },
                        })}
                      />
                      <i className="eye" onClick={togglePasswordVisiblity}>
                        {<BsEyeFill />}
                      </i>
                    </div>
                  </div>
                  {errors.newPassword && <p className="text-danger p-0 m-0">{errors.newPassword.message}</p>}
                  <div className="form-group">
                    <label className="text-18">Confirm Password</label>
                    <div className="pst">
            <input
              type="newPasswordConfirm"
              className={classNames("form-control", {
                "is-invalid": errors.newPasswordConfirm
              })}
              id="exampleInputPassword1"
              type={passwordShown1 ? "text" : "password"}
              name="newPasswordConfirm"
              ref={register({
                validate: value =>
                  value === password.current || "  Password  mismatch"
              })}
            />
              <i className="eye"   onClick={togglePasswordVisiblity1}>{ <BsEyeFill/>}</i>
           </div>
                
                  </div>
                  {errors.newPasswordConfirm && <p className="text-danger">{errors.newPasswordConfirm.message}</p>}
                  <div className="form-group text-center mt-4">
                    {/* <a className="btn-signin my-2 my-sm-0" type="submit">
                      <img src={signinBtn} />
                    </a> */}

                    <button className="btn-signin my-2 my-sm-0 bg-primary"> submit</button>
                  </div>
                  <div className="form-group text-center text-18">
                    <a className="forgot_a" href="#">
                      Resend OTP
                    </a>
                  </div>
                </form>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
