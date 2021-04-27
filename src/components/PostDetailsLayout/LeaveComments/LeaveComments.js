import React from 'react'
import clock from '../../../assets/images/clock.png';
import likeIcon from '../../../assets/images/icon-like.png';
import authorOne from '../../../assets/images/author1.jpg';
import dislikeIcon from '../../../assets/images/icon-dislike.png';

export const LeaveComments = () => {
    return (
        <div >
            <section id="leave-comments">
                <div className="section-header">
                    <h2 className="sec-heading sec-heading-color float-left">Leave your comments</h2>
                </div>
                <div className="media-contant">
                    <div className="media border-0 p-2">
                        <img src={authorOne} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{ width: 60 }} />
                        <div className="media-body">
                            <div className="form-group pt-2">
                                <textarea placeholder="Write a response..." name="msg" id="msg" cols={40} rows={5} className="form-control shadow" defaultValue={"                         "} />
                                <div className="pt-3">
                                    <a href="#" className="btn btn-round prm-btn font-12 mr-2">POST COMMENT</a>
                                </div>
                            </div>
                            <div className="pt-4 pb-2 sec-heading-color">
                                <h5><b>Recent Comments</b></h5>
                            </div>
                            {/**/}
                            <div className="media border-0  p-2">
                                <img src={authorOne} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{ width: 60 }} />
                                <div className="media-body pt-3">
                                    <h6 className="comment-hed-color pt-2"><b>Trinity Fitzgerald</b><small className="gray-color-text"><img src={clock} alt="John Doe" className="pl-2 pr-2" />2 minutes ago</small></h6>
                                    <p className="media-p-color">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
                                    <div className="post-comment">
                                        <ul className="list-unstyled d-flex comments-use">
                                            <li className="pr-4 border-right"> <a href="#" className="comment"><img src={likeIcon} /></a> <span>1K</span></li>
                                            <li className="ml-4"> <a href="#" className="comment"><img src={dislikeIcon} /></a> <span>15K</span> </li>
                                        </ul>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            {/*//*/}
                            {/**/}
                            <div className="media border-0 p-2">
                                <img src={authorOne} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{ width: 60 }} />
                                <div className="media-body pt-3">
                                    <h6 className="comment-hed-color pt-2"><b>Trinity Fitzgerald</b><small className="gray-color-text"><img src={clock} alt="John Doe" className="pl-2 pr-2" />1 day ago</small></h6>
                                    <p className="media-p-color">Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</p>
                                    <div className="post-comment">
                                        <ul className="list-unstyled d-flex comments-use">
                                            <li className="pr-4 border-right"> <a href="#" className="comment"><img src={likeIcon} /></a> <span>1K</span></li>
                                            <li className="ml-4"> <a href="#" className="comment"><img src={dislikeIcon} /></a> <span>15K</span> </li>
                                        </ul>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            {/*//*/}
                            {/**/}
                            <div className="media border-0 p-2">
                                <img src={authorOne} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{ width: 60 }} />
                                <div className="media-body pt-3">
                                    <h6 className="comment-hed-color pt-2"><b>Gabriel Lamberts</b><small className="gray-color-text"><img src={clock} alt="John Doe" className="pl-2 pr-2" />2 day ago</small></h6>
                                    <p className="media-p-color">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                    <div className="post-comment">
                                        <ul className="list-unstyled d-flex comments-use">
                                            <li className="pr-4 border-right"> <a href="#" className="comment"><img src={likeIcon} /></a> <span>1K</span></li>
                                            <li className="ml-4"> <a href="#" className="comment"><img src={dislikeIcon} /></a> <span>15K</span> </li>
                                        </ul>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            {/*//*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
