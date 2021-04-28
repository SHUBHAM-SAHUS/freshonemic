import React from 'react';
import './forgotPage.scss';
import validateBtn from 'assets/images/validate-btn.png'
import signinBtn from 'assets/images/signin-btn.png'

export const ForgotPage = () => {
    return (
        <div>
            
                <div className="forgot_header pt-3">
                    <h5 className="forgot_title text-center" id="exampleModalLabel">
                        <span className="title">Forgot Your Password</span></h5>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label className="text-18" htmlFor="validationServerUsername">Username</label>
                            <div className="input-group forgot_input">
                                <input type="text" className="form-control" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                                <div className="valid-feedback">
                                    <img src={validateBtn} />
                                </div>
                                <div className="invalid-feedback">
                                    <img src={validateBtn} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group" id="verify">
                            <label className="text-18">Verification Code</label><br />
                            {/* <input type="text" name="verificationCode" class="form-control" placeholder="Enter Email or Phone"> */}
                            {/**/}
                            <input className="verified" type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
                            <input className="verified" type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
                            <input className="verified" type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
                            <input className="verified" type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
                            <input className="verified" type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
                            <input className="verified" type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
                            {/*//*/}
                        </div>
                        <div className="form-group">
                            <label className="text-18">Password</label>
                            <input type="password" name="email" className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <label className="text-18">Confirm Password</label>
                            <input type="password" name="email" className="form-control" placeholder="Re-Enter Password" />
                        </div>
                        <div className="form-group text-center mt-4">
                            <a className="btn-signin my-2 my-sm-0" type="submit"><img src={signinBtn} /></a>
                        </div>
                        <div className="form-group text-center text-18">
                            <a className="forgot_a" href="#">Resend OTP</a>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                </div>
            </div>
    )
}
