import React from 'react'
import { VisitorSidebar } from 'components/VisitorStation/VisitorSidebar/VisitorSidebar';
import { Post } from 'components/PostDetailsLayout/Post/Post';
import './visitorStationPost.scss'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';

export const VisitorStationPost = () => {
    return (
        <div>
            <Navigation />
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        {/* sidebar */}
                        <div className="col-md-2 col-12" >
                            <VisitorSidebar />
                        </div>
                        {/* posts */}
                        <div className="col-md-10 col-12 pt-5">
                            <div class="section-header">
                                <h2 class="sec-heading visitor_station_post"><b>Post</b></h2>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <Post />
                                    <Comments/>
                                </div>
                            </div>

                            <div className="section-body mb-3">
                                <div className="article">
                                    <Post />
                                    <Comments/>
                                </div>
                            </div>

                            <div className="section-body mb-3">
                                <div className="article">
                                    <Post />
                                    <Comments/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
