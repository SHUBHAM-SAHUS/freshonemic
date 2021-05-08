import React from 'react';
import { VisitorSidebar } from 'components/VisitorStation/VisitorSidebar/VisitorSidebar'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { VisitorStationTopicCard } from './VisitorStationTopicCard/VisitorStationTopicCard';
import { VstationTopicCard } from './VisitorStationTopicCard/VstationTopicCard';

export const VisitorStationTopic = () => {
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
                                <h2 class="sec-heading visitor_station_topic"><b>Topics</b></h2>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <VisitorStationTopicCard/>
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                <VstationTopicCard/>
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <VisitorStationTopicCard/>
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                <VstationTopicCard/>
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <VisitorStationTopicCard/>
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                <VstationTopicCard/>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
