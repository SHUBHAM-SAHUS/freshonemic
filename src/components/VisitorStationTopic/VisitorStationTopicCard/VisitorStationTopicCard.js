import React from 'react';
import author1 from 'assets/images/author1.jpg';
import lockIcon from 'assets/images/lock-icon.png';
import one from './vStationTopicCard.module.scss';
import dropdownDis from 'assets/images/dropdown-cross-dbtn.png'

export const VisitorStationTopicCard = () => {
    return (
        <div>
            <div className="media p-3 border-0"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{ width: 52 }} />
                <div className="media-body">
                    <div className="article-title border-0 pb-0">
                        <h5 className="float-left">What Weird food combinations do you really enjoy? <span className={`locked ${one.alert_bg}`}><img src={lockIcon} /></span>
                            <p className="author">Created on <a href="#">sep 25 2020 </a> <span className="ml-4 text-dark">Posts</span> <a href="#">33</a></p>
                        </h5>
                        <div className="float-right">
                            <button className={`btn ${one.btn_vs_create} btn-round font-12 float-right disabled mt-3`}> <img src={dropdownDis} alt="" /> &nbsp; Create Post</button> 
                            <button href="#" className="btn btn_outline_follow btn-round prm-btn font-12 mr-2 mt-3">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
