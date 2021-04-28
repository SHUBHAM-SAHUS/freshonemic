import React from 'react';
import './loginPage.scss';
import signinBtn from 'assets/images/signin-btn.png'

export const LoginPage = () => {
    return (
        <div>
            <div className="">
                <div className="signin_header pt-3">
                    <h5 className="signin_title text-center" id="exampleModalLabel">
                        <span className="title">Sign In</span></h5>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
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
                            <p className="text-dark">Not a member yet? <a className="signin_a" href="#" title="Create an account">Create an account</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
