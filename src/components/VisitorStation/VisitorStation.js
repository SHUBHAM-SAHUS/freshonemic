import React from 'react';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { VisitorSidebar } from './VisitorSidebar/VisitorSidebar';

export const VisitorStation = () => {
    return (
        <div>
             <section className="main">
                <div className="container-fluid">
                    <div className="row">
                    {/* left sidebar */}
                        <div className="col-md-2 col-12" id="">
                            <div className="row">
                               <VisitorSidebar/>
                            </div>
                        </div>
                    {/* left sidebar end */}

                    {/* main content */}
                    <div col-md-10 col-12 pt-5>
                        <ProfileCard/>
                    </div>
                    {/* main content end*/}
                    </div>
                </div>
            </section>
        </div>
    )
}
