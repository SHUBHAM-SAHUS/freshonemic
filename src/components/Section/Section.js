import React from 'react'
import { SectionHeader } from './SectionHeader/SectionHeader'
import { SectionPost } from './SectionPostWithDelete/SectionPost'
import { SectionRightSideBar } from './SectionRightSideBar/SectionRightSideBar'
import './section.scss';
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';
import loading from 'assets/images/loading.png'

export const Section = () => {
    return (

        <section className="main">
            <div className="container-fluid">
                <div className="row">
                    {/* Right Sidebar */}
                    <SectionRightSideBar />
                    <div className="col-md-10 pt-5">
                        <SectionHeader />
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
