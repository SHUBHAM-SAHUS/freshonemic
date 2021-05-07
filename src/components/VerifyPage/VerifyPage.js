import React from 'react';
import './verifyPage.scss';
import submitBtn from 'assets/images/submit2-btn.png'
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import logo from "assets/images/logo.png"
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';

export const VerifyPage = () => {
    return (
        <>
            <section className="main">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-4 offset-lg-4 col-12 verify_main_container">
                            <Navbar className="nav-fixed" bg="dark" expand="lg px-3 fixed-top">
                                <Navbar.Brand href="/"> <img src={logo} /></Navbar.Brand>
                            </Navbar>
                            <div className="verify_header pt-3 mt-5">
                                <h5 className="verify_title text-center" id="exampleModalLabel">
                                    <span className="title">Verification Code</span></h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group text-18 mt-3" id="verifyCode">
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
                                    <div className="form-group text-center mt-5">
                                        <a className="btn-signin my-2 my-sm-0" type="submit"><img src={submitBtn} /></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>

    )
}
