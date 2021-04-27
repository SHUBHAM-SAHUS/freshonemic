import React from 'react';
import './post.scss'
import authorOne from 'assets/images/author1.jpg';
import imgVoice from 'assets/images/voice-image.jpg';
import widgetOne from 'assets/images/widget-1.jpg';
import widgetTwo from 'assets/images/widget-2.jpg';
import widgetThree from 'assets/images/widget-3.jpg';
import widgetFour from 'assets/images/widget-4.jpg';
import dropdowncross from "assets/images/dropdown-cross-btn.png";

export const Post = () => {
    return (
        <div className="media p-3"> <img src={authorOne} alt="John Doe" className="mr-3 rounded-circle" style={{ width: 86 }} />
            <div className="media-body">
                <div className="article-title">
                    <h5>Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 mr-2 float-right">Follow</a> </h5>
                </div>
                <div className="article-body">
                    <h5>I Totally agree <a className="btn btn-outline-primary btn-round font-12 float-right create-post"><img className="dropdowncross" src={dropdowncross} alt="add" /> &nbsp; Create Post</a> </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small>more...</small></a></p>
                    <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                    {/**/}
                    <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> English </a> </div>
                    {/*//*/}
                    <img src={imgVoice} className="img-fluid mb-4" />
                    <div className="popup-images justify-content-start"> <a href="#" className="m-1"> <img src={widgetOne} className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src={widgetTwo} className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src={widgetThree} className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src={widgetFour} className="brd-rounded5 mb-2" /> </a> </div>
                </div>
            </div>
        </div>

    )
}


