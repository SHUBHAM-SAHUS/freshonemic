import React from 'react';
import './visitorTopics.scss'

export const VisitorTopic = () => {
    return (
        
            <div className="mb-3">
                <div className="card outer">
                    <div className="section-header">
                        <h2 className="sec-heading float-left">Featured Topics</h2>
                        <small className="float-right font-view"> <a href="#"><b>View all</b></a> </small> </div>
                    <div className="media p-3 media-bg-lightblue  media-box-border"> <img src="images/author1.jpg" alt="John Doe" className="mr-3 rounded-circle" style={{ width: 60 }} />
                        <div className="media-body">
                            <div className="article-title">
                                <h5 className="pt-2">Why Colleges now imposing uniforms?<a className="btn btn-outline-primary btn-round font-12 float-right mt-2 blue-create-post"> &nbsp; <b>Create Post</b></a></h5>
                            </div>
                            <p className="author">Created on <a href="#"> sep 25 2020 </a></p>
                        </div>
                    </div>
                    <div className="media p-3 media-bg-lightblue media-box-border"> <img src="images/image-side2.png" alt="John Doe" className="mr-3 rounded-circle" style={{ width: 60 }} />
                        <div className="media-body">
                            <div className="article-title">
                                <h5>Poet, Lyricist Anil Panachooran passed...<a className="btn btn-outline-primary btn-round font-12 float-right mt-2 blue-create-post"> &nbsp; <b>Create Post</b></a></h5>
                            </div>
                            <p className="author">Created on <a href="#"> sep 25 2020 </a></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
