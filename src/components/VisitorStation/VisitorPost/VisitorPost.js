import React from 'react'

export const VisitorPost = () => {
    return (
        <div>
            <div className=" pt-1">
                {/* Section Body */}
                <div className="section-body mb-3">
                    <div className="section-header outer">
                        <h2 className="sec-heading float-left">Featured Posts</h2>
                        <small className="float-right font-view"> <a href="#"><b>View all</b></a> </small> </div>
                    <div className="article pt-0">
                        {/* Media */}
                        <div className="media p-3"> <img src="images/author1.jpg" alt="John Doe" className="mr-3 rounded-circle" style={{ width: 60 }} />
                            <div className="media-body">
                                <div className="article-title">
                                    <h5>Why Colleges now imposing uniforms? </h5>
                                </div>
                                <div className="article-body">
                                    <h5>I Totally agree</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                    <p className="author gray-p">Created on <a href="#">sep 25 2020 </a></p>
                                    <img src="images/voice-image.jpg" className="img-fluid mb-4" />
                                    <div className="popup-images d-flex justify-content-end"> <a href="#" className="m-1"> <img src="images/widget-1.jpg" className="brd-rounded5 img-fluid" /> </a> <a href="#" className="m-1"> <img src="images/widget-3.jpg" className="brd-rounded5 img-fluid" /> </a> <a href="#" className="m-1"> <img src="images/widget-2.jpg" className="brd-rounded5 img-fluid" /> </a> </div>
                                </div>
                            </div>
                        </div>
                        {/*//*/}
                        {/* Comments */}
                        <div className="comment p-3 mt-2 mb-3">
                            <ul className="list-unstyled coments-use">
                                <li> <a href="#" className="comment"><img src="images/icon-like.png" /></a> <span className="total">1 K</span> </li>
                                <li> <a href="#" className="comment"><img src="images/icon-dislike.png" /></a> <span className="total">15</span> </li>
                                <li> <a href="#"> <img src="images/icon-comment.png" /> {/* <sup><span class="locked alert-bg"><img src="images/lock-icon.png"></span></sup>  */}</a> <span className="total">32</span> </li>
                                <li> <a href="#" className="comment"><img src="images/icon-forward.png" /></a> <span className="total">20</span> </li>
                                <li> <a href="#" className="comment"><img src="images/icon-pin.png" /></a> <span className="total">08</span> </li>
                                <li className="border-none" data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src="images/icon-flag.png" /></a> <span className="total">01</span> </li>
                                <li className="float-right" data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src="images/icon-music.png" /> <span className="total">Add to playlist</span> </a></li>
                            </ul>
                        </div>
                        {/*//*/}
                    </div>
                </div>
                {/*//*/}
            </div>

        </div>
    )
}
