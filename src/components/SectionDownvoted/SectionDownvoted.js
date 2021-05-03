import React from 'react';
import { SectionPost } from '../Section/SectionPostWithDelete/SectionPost'
import { SectionRightSideBar } from '../Section/SectionRightSideBar/SectionRightSideBar'
import '../Section/section.scss';
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';
import loading from 'assets/images/loading.png'
import { SectionDownvotedHeader } from './SectionDownvotedHeader/SectionDownvotedHeader';
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';

export const SectionDownvoted = () => {
    return (
        <>
            <Navigation />
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            {/* Right Sidebar */}
                            <SectionRightSideBar />
                        </div>

                        <div className="col-md-10 pt-5">
                            <SectionDownvotedHeader />
                            <div class="section-body mb-3">
                                <div class="article">
                                    <SectionPost />
                                    <Comments />
                                </div>
                            </div>
                            <div class="section-body mb-3">
                                <div class="article">
                                    <SectionPost />
                                    <Comments />
                                </div>
                            </div>
                            <div class="section-body mb-3">
                                <div class="article">
                                    <SectionPost />
                                    <Comments />
                                </div>
                            </div>
                            <div class="pt-5 pb-5 text-center">
                                <img src={loading} />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}