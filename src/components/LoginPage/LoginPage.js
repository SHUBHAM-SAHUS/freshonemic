import React,{useState} from "react";
import "./loginPage.scss";
import signinBtn from "assets/images/signin-btn.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import logo from "assets/images/logo.png";
import { useForm } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { Footer } from "components/commoncomponent/FooterLayout/Footer";
import classNames from "classnames";

export const LoginPage = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const update = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12 signin_main_container">
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
              <div className="signin_header pt-3 mt-5">
                <h5 className="signin_title text-center" id="exampleModalLabel">
                  <span className="title">Sign In</span>
                </h5>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(update)}>
                  <div className="form-group">
                    <label>Email or Phone</label>
                    <input
                      type="text"
                    
                      
                      autocomplete="off"
                      className={classNames("form-control", {
                        "is-invalid": errors.name,
                      })}
                      id="exampleInputEmail1"
                      name="name"
                      ref={register({
                        required: "This field is required.",
                      })}
                    />
                  </div>
                  {errors.name && (
              <p className="text-danger ">{errors.name.message}</p>
            )}
                  <div className="form-group">
                    <label>Password</label>
                    <div className="pst">
              <input
                type="password"
                className={classNames("form-control", {
                  "is-invalid": errors.password
                })}
                id="exampleInputPassword1"
                type={passwordShown ? "text" : "password"}
                name="password"
                type={passwordShown ? "text" : "password"}
                autocomplete="off"
                ref={register({
                  required: "You must  enter password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters"
                  }
                })}
              />
              <i className="eye" onClick={togglePasswordVisiblity}>{<BsEyeFill />}</i>
            </div>
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </div>
                  <div className="form-group text-center mt-4">
                    {/* <a className="btn-signin my-2 my-sm-0" type="submit" title="Sign In"><img src={signinBtn} /></a> */}
                    <button
                      className="btn-signin my-2 my-sm-0 bg-primary"
                      type="submit"
                    >
                      Login{" "}
                    </button>
                  </div>
                  <div className="form-group text-center">
                    <a className="signin_a" href="#" title="Forgot Password">
                      Forgot Your Password?
                    </a>
                  </div>
                  <div className="form-group text-center">
                    <p className="text-dark">
                      Not a member yet?{" "}
                      <Link to="signup">
                        <a
                          className="signin_a"
                          href="#"
                          title="Create an account"
                        >
                          Create an account
                        </a>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
