import React from 'react';
import { SectionPost } from '../Section/SectionPostWithDelete/SectionPost'
import { SectionRightSideBar } from '../Section/SectionRightSideBar/SectionRightSideBar'
import '../Section/section.scss';
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';
import loading from 'assets/images/loading.png'
import { SectionDownvotedHeader } from './SectionDownvotedHeader/SectionDownvotedHeader';

export const SectionDownvoted = () => {
    return (

        <section className="main">
            <div className="container-fluid">
                <div className="row">
                    {/* Right Sidebar */}
                    <SectionRightSideBar />
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
    )
}