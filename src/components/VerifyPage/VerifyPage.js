import React from 'react';
import './verifyPage.scss';
import submitBtn from 'assets/images/submit2-btn.png'

export const VerifyPage = () => {
    return (
        <>
        <section className="main">
            <div className="container-fluid">
            <div className="row signin_main_container">
                <div className="verify_header pt-3">
                    <h5 className="verify_title text-center" id="exampleModalLabel">
                        <span className="title">Verification Code</span></h5>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group text-18" id="verifyCode">
                            <label>Enter the OTP received on your registered Email ID/ Mobile Number</label><br />
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
                        <div className="form-group text-center mt-4">
                            <a className="btn-signin my-2 my-sm-0" type="submit"><img src={submitBtn} /></a>
                        </div>
                    </form>
                </div>
                </div>
                </div>
                </section>
            
        </>

    )
}
