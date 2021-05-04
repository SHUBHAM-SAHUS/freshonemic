import React from 'react';
import image1 from 'assets/images/image-1.jpg'
import './mediareactCarousel.scss'
import './reactCarousel.scss'
import dropdowncross from "assets/images/dropdown-cross-btn.png" ;

export const Item = () => {
  return (
    <>
      <div id={0} className="sc-furvIG iJrzWF rec rec-item-wrapper rec_main_div" >
        <div className="item bg-white">
          <div className="media pt-3 pb-3"> <img src={image1} alt="John Doe" className="mr-2 rounded rec-image" />
            <div className="media-body">
              <h5 className="carousel_h5">What weird food combinations do you really enjoy?</h5>
              <p className="author">Created by <a href ="/">John_deo</a></p>
              <div style={{ width: '100%' }}> <a href ="/" className="btn btn-round mb-1 btn_carousel_follow font-12 mr-1">Follow</a>
                <button type="button" className=" btn-carousel_create create-post btn btn-round font-12" data-target="#createPost"><img className="dropdowncross_carousel" src={dropdowncross} alt="add"/> Create Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}