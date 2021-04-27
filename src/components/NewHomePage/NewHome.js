import React from 'react';
import Carousel from './Carousel/Carousel';
import Filter from './Filter/Filter';
import './newHome.scss';
import { HomePost } from './HomePost/HomePost'
import { Comments } from 'components/PostDetailsLayout/Comments/Comments';
import { Post } from 'components/PostDetailsLayout/Post/Post';
import banner2 from 'assets/images/banner-2.jpg';
import banner3 from 'assets/images/banner-3.jpg';
import { RightSidebar } from './RightSidebar/RightSidebar';
import { InviteCard } from 'components/HomepageLayout/InviteCard/InviteCard';
import { SideAdvertisement } from 'components/HomepageLayout/Sisebaraddvertisement/SideAdvertisement';


const NewHome = () => {
    return (
        <div>
            <section className="main">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-9 pt-5">
                            <Carousel />
                            <Filter />
                            <div className="section-body mb-3">
                                <div className="article">
                                    <Post />
                                    <Comments />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <HomePost />
                                    <Comments />
                                </div>
                            </div>
                            <div class="section mb-3"> <img src={banner2} class="img-fluid center-block rounded" /> </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <Post />
                                    <Comments />
                                </div>
                            </div>
                            <div className="section-body mb-3">
                                <div className="article">
                                    <HomePost />
                                    <Comments />
                                </div>
                            </div>
                            <div class="section mb-3"> <img src={banner3} class="img-fluid center-block rounded" /> </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <RightSidebar/>
                            </div>
                            <InviteCard/>
                            <SideAdvertisement/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewHome
