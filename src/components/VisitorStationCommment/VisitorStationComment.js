import React from 'react';
import { VisitorSidebar } from 'components/VisitorStation/VisitorSidebar/VisitorSidebar';
import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';
import './visitorStationComments.scss'
import { VisitorStationCard } from './VisitorStationCard/VisitorStationCard';

export const VisitorStationComment = () => {
    return (
        <>
            <Navigation />
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        {/* left sidebar */}
                        <div className="col-md-2 col-12" >
                            <VisitorSidebar />
                        </div>
                        {/* main content */}
                        <div className="col-md-10 col-12 pt-5">
                            <div class="section-header">
                                <h2 class="sec-heading visitor_station_comm float-left"><b>Comments</b></h2>
                            </div>
                            <section className="row">
                                <div className="col-md-6 col-12">
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                </div>
                                <div className="col-md-6 col-12">
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                <VisitorStationCard/>
                                </div>
                            </section>
                            {/* main content end*/}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
