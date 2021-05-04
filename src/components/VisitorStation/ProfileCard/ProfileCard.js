import React from 'react'

export const ProfileCard = () => {
    return (
        <div>
            <section className="row">
                <div className="col-md-12">
                    <div className="card profile-card-2">
                        <div className="card-img-block">
                            <figure className="figure h-100"> <img className="img-fluid" src="images/profile-bg1.png" alt="Card image cap" />
                                <figcaption className="text-center">
                                    <div className="d-flex offset-md-2">
                                        <h2 className="mr-auto ml-3">Doeband&amp;co</h2>
                                        <div>
                                            <a href="#" className="prm-btn btn btn-round mx-3 font-semibold font-12" data-toggle="modal" data-target="#requestrecomModal">Request a Recommendation</a>
                                            <a href="#" className="btn btn-outline-light btn-round mx-3 font-semibold font-12 btn-giverecom" data-toggle="modal" data-target="#writerecomModal">Give Recommendation</a> </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="card-body pt-2"> <img src="images/user-image200.jpg" alt="profile-image" className="profile" />
                            <div className="row clearfix">
                                <div className="col-lg-4 col-12 offset-sm-2">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-8 visitor_profilename">
                                            <h3 className="card-title">John Doe </h3>
                                            <h5 className="sub-title">Johnjoeonemic</h5>
                                        </div>
                                        <div className="col-lg-6 col-4">
                                            <a className="prm-btn btn nav-item mt-2 btn-round font-12">Follow</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 text-right">
                                    <ul className="feedback list-unstyled text-uppercase">
                                        <li> Followers <span className="followers">220</span> </li>
                                        <li> Following <span className="followers">100</span> </li>
                                    </ul>
                                </div>
                                {/* <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div> */}
                            </div>
                        </div>
                    </div>
                </div></section>

        </div>
    )
}
