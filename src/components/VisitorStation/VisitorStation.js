import { Footer } from 'components/commoncomponent/FooterLayout/Footer';
import { Navigation } from 'components/commoncomponent/Navigation/Navigation';
import React from 'react';
import { ProfileCard } from './ProfileCard/ProfileCard';
import { VisitorSidebar } from './VisitorSidebar/VisitorSidebar';
import 'components/NewHomePage/newHome.scss'

export const VisitorStation = () => {
    return (
        <>
        <Navigation/>
        <div>
             <section className="main">
                <div className="container-fluid">
                    <div className="row">
                    {/* left sidebar */}
                        <div className="col-md-2 col-12" >                            
                               <VisitorSidebar/>
                        </div>
                    {/* left sidebar end */}

                    {/* main content */}
                    <div className= "col-md-10 col-12 pt-5">
                        <ProfileCard/>
                    </div>
                    {/* main content end*/}
                    </div>
                </div>
                <Footer/>
            </section>
        </div>
        
        </>
    )
}
