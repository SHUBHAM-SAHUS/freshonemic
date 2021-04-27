import React from 'react';
import { TopHeader } from './TopHeader/TopHeader';
import './topicDetails.scss';
import { TopicPost } from './TopicPost/TopicPost';
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';
import { TopicPostTwo } from './TopicPostTwo/TopicPostTwo';
import { TopicPostThree } from './TopicPostThree/TopicPostThree';
import SidebarDetails from 'components/HomepageLayout/SisebarDetails/SidebarDetails';
import { InviteCard } from 'components/HomepageLayout/InviteCard/InviteCard';
import { SideAdvertisement } from 'components/HomepageLayout/Sisebaraddvertisement/SideAdvertisement';

export const TopicDetails = () => {
    return (
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
                    <SidebarDetails/>
                    <InviteCard/>
                    <SideAdvertisement/>
                    </div>
                </div>
            </div>            
        </section>
    )
}
