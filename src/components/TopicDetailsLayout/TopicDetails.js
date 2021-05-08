import React from 'react';
import { TopHeader } from './TopHeader/TopHeader';
import './topicDetails.scss';
import { TopicPost } from './TopicPost/TopicPost';
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';
import { TopicPostTwo } from './TopicPostTwo/TopicPostTwo';
import { TopicPostThree } from './TopicPostThree/TopicPostThree';
import { InviteCard } from 'components/NewHomePage/InviteCard/InviteCard';
import { SideAdvertisement } from 'components/NewHomePage/Sisebaraddvertisement/SideAdvertisement';
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';
import { RightSidebar } from 'components/NewHomePage/RightSidebar/RightSidebar';

export const TopicDetails = () => {
    return (
        <>
        <Navigation/>
        <section className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 pt-5">
                        <section>
                            <div className="section-body mb-3">
                                <div className="article ">
                                    <TopHeader />
                                    <TopicPost />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <TopicPostTwo/>
                                    <Comments />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <TopicPostThree/>
                                    <Comments />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <TopicPostTwo/>
                                    <Comments />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <TopicPostThree/>
                                    <Comments />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <TopicPostTwo/>
                                    <Comments />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-3">
                    <RightSidebar/>
                    <InviteCard/>
                    <SideAdvertisement/>
                    </div>
                </div>
            </div>            
        </section>
        <Footer/>
        </>
    )
}
