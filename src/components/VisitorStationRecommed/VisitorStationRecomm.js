import React from 'react'
import { Footer } from 'components/commoncomponent/FooterLayout/Footer'
import { VisitorSidebar } from 'components/VisitorStation/VisitorSidebar/VisitorSidebar'

export const VisitorStationRecomm = () => {
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
                                <h2 class="sec-heading visitor_station_recom"><b>Recommendations</b></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
