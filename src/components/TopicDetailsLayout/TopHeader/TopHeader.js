import React from 'react';
import './topHeader.scss';
import whiteCircleBtn from 'assets/images/white-circle-btn.png';
import topHeaderImg from 'assets/images/top-header-img.png';
import threeDots from 'assets/images/three-dots.png';
import share1 from 'assets/images/share1.png';
import repost1 from 'assets/images/repost1.png';
import {Dropdown} from 'react-bootstrap'

export const TopHeader = () => {
    return (
        <div className="bg-img-top rounded-top p-3" id="topheader">
            {/**/}
            <div className="row">
                <div className="col-md-2 col-12">
                    <img src={topHeaderImg} alt className="rounded-circle img-responsive" />
                </div>
                <div className="col-md-10 col-12">
                    <span className="float-right pt-3">
                        <a href="#" className="btn btn-round btn-outline-primary bg-white font_12 mr-2"> <b>Follow</b></a>
                        <a href="#"><img src={whiteCircleBtn} alt className="ml-3" /></a>
                        {/* User Dropdown */}
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                                <img src={threeDots} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown_menu pl3">
                                <Dropdown.Item className="dropdown-item pt-4"><img src={share1} className="pl-3 pr-3"/><span>Share</span></Dropdown.Item>
                                

                                <Dropdown.Item className="dropdown-item pt-4" ><img src={repost1} className="pl-3 pr-3"/><span>Share</span></Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                        {/*//*/}
                    </span>
                    <h5 className="text-white pt-3 mb-4">What weird food combinations do you<br /> really enjoy?</h5>
                    <ul className="list-unstyled list-left">
                        <li className="pl-0">
                            <small>FOLLOWERS <span className="font-white font-semibold pl-3">220</span></small>
                        </li>
                        <li>
                            <small>POST <span className="font-white font-semibold pl-3">18</span></small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
