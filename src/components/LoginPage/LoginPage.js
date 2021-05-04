import React from 'react';
import './loginPage.scss';
import signinBtn from 'assets/images/signin-btn.png';
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div>
            <section className="main">
                <div className="container-fluid">
                    <div className="row signin_main_container">
                        <div className="signin_header pt-3 mt-5">
                            <h5 className="signin_title text-center" id="exampleModalLabel">
                                <span className="title">Sign In</span></h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group ">
                                    <label>Email or Phone</label>
                                    <input type="text" name="email" className="form-control" placeholder="Enter Email or Phone" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="email" className="form-control" placeholder="Enter Password" />
                                </div>
                                <div className="form-group text-center mt-4">
                                    <a className="btn-signin my-2 my-sm-0" type="submit" title="Sign In"><img src={signinBtn} /></a>
                                </div>
                                <div className="form-group text-center">
                                    <a className="signin_a" href="#" title="Forgot Password">Forgot Your Password?</a>
                                </div>
                                <div className="form-group text-center">
                                    <p className="text-dark">Not a member yet? <Link to="signup"><a className="signin_a" href="#" title="Create an account">Create an account</a></Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
