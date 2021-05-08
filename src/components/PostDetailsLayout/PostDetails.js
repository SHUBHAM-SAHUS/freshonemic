import React from 'react'
import { Comments } from './Comments/Comments'
import { LeaveComments } from './LeaveComments/LeaveComments'
import { Post } from './Post/Post'
import './postDetails.scss'
import { InviteCard } from 'components/NewHomePage/InviteCard/InviteCard'
import { SideAdvertisement } from 'components/NewHomePage/Sisebaraddvertisement/SideAdvertisement'
import { Footer } from 'components/commoncomponent/FooterLayout/Footer'
import { Header } from 'components/commoncomponent/HeaderLayout/Header'
import { Navigation } from 'components/commoncomponent/Navigation/Navigation'
import { RightSidebar } from 'components/NewHomePage/RightSidebar/RightSidebar'



export const PostDetails = () => {
    return (
        <>
        <Navigation/>
        <section className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 pt-5">
                        {/* section */}
                        <section>
                            {/* Section Body */}
                            <div className="section-body mb-3">
                                <div className="article">
                                    {/* Media */}
                                    <Post/>
                                    {/*//*/}
                                    {/* Comments */}
                                    <Comments/>
                                    {/*//*/}
                                </div>
                            </div>
                            {/*//*/}
                        </section>
                        {/*//*/}
                        {/* section Body Leave comments */}
                        <LeaveComments/>
                        {/*//*/}
                    </div>
                    {/* Right Sidebar */}
                    <div className="col-md-3">
                    <RightSidebar/>
                    <InviteCard/>
                    <SideAdvertisement/>
                    </div>
                    {/*//*/}
                </div>
            </div>
        </section>
        <Footer/>
</>
    )
}