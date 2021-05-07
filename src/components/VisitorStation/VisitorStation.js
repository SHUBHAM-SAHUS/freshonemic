import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';
import React from 'react';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { VisitorSidebar } from './VisitorSidebar/VisitorSidebar';
import 'components/NewHomePage/newHome.scss'
import { VisitorTopic } from './VisitorTopic/VisitorTopic';
import { VisitorPost } from './VisitorPost/VisitorPost';
import { AboutCard } from './AboutCard/AboutCard';
import { FollowedTopics } from './FollowedTopics/FollowedTopics';

export const VisitorStation = () => {
    return (
        <>
            <Navigation />
            <div>
                <section className="main">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left sidebar */}
                            <div className="col-md-2 col-12" >
                                <VisitorSidebar />
                            </div>
                            {/* main content */}
                            <div className="col-md-10 col-12 pt-5">
                                <ProfileCard />
                                <section className="row">
                                    <div className="col-md-8 col-12">
                                        {/* topic */}
                                        <VisitorTopic />
                                        {/* post */}
                                        <VisitorPost/>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        {/* About User */}
                                        <AboutCard/>
                                        {/* Followed topics */}
                                        <FollowedTopics/>
                                    </div>
                                </section>
                                {/* main content end*/}
                            </div>                            
                        </div>
                    </div>                    
                </section>
                <Footer />
            </div>

        </>
    )
}
