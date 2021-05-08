import React from 'react';
import imageSide1 from 'assets/images/image-side1.jpg'
import imageSide2 from 'assets/images/image-side2.png'
import imageSide3 from 'assets/images/image-side3.png'
import imageSide4 from 'assets/images/image-side4.png'

export const FollowedTopics = () => {
    return (
        <div>
            <div className="card">
                <div className="section-header outer-sidebar">
                    <h2 className="sec-heading float-left">Followed Topics</h2>
                </div>
                {/* Media */}
                <div className="media media-padding">
                    <ul className="list-unstyled">
                        <li>
                            <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imageSide1} alt="Generic placeholder image" style={{ width: 52 }} />
                                <div className="media-body mt-2">
                                    <h6 className="mt-0 topic-title text-dark"><a href="#">What is your openion on commercial Ads</a></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imageSide2} alt="Generic placeholder image" style={{ width: 52 }} />
                                <div className="media-body mt-2">
                                    <h6 className="mt-0 topic-title text-dark"><a href="#">Conflict in your aptitude &amp;
                qualification?</a></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imageSide3} alt="Generic placeholder image" style={{ width: 52 }} />
                                <div className="media-body mt-2">
                                    <h6 className="mt-0 topic-title text-dark"><a href="#">Storiyoh | Core Purpose</a></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imageSide4} alt="Generic placeholder image" style={{ width: 52 }} />
                                <div className="media-body mt-2">
                                    <h6 className="mt-0 topic-title text-dark"><a href="#">Little Storiyohs</a></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imageSide1} alt="Generic placeholder image" style={{ width: 52 }} />
                                <div className="media-body mt-2">
                                    <h6 className="mt-0 topic-title text-dark"><a href="#">Thoughts on IoT</a></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media mb-4"> <img className="mr-3 rounded-circle" src={imageSide2} alt="Generic placeholder image" style={{ width: 52 }} />
                                <div className="media-body mt-2">
                                    <h6 className="mt-0 topic-title text-dark"><a href="#">Fundamentals of c progra-mming-test</a></h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
