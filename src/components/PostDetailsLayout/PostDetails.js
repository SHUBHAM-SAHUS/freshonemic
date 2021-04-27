import React from 'react'
import { Comments } from './Comments/Comments'
import { LeaveComments } from './LeaveComments/LeaveComments'
import { Post } from './Post/Post'
import './postDetails.scss'
import SidebarDetails from 'components/HomepageLayout/SisebarDetails/SidebarDetails'
import { InviteCard } from 'components/HomepageLayout/InviteCard/InviteCard'
import { SideAdvertisement } from 'components/HomepageLayout/Sisebaraddvertisement/SideAdvertisement'


export const PostDetails = () => {
    return (
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
                    <SidebarDetails/>
                    <InviteCard/>
                    <SideAdvertisement/>
                    </div>
                    {/*//*/}
                </div>
            </div>
        </section>

    )
}