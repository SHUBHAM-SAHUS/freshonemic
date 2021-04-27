import React from 'react';
import image1 from 'assets/images/image-1.jpg'

export const Item = () => {
  return (
    <>
      <div id={0} className="sc-furvIG iJrzWF rec rec-item-wrapper" style={{ width: 450, padding: 0 }}>
        <div className="item bg-white">
          <div className="media p-3"> <img src={image1} alt="John Doe" className="mr-3 rounded" style={{ width: 150 }} />
            <div className="media-body">
              <h5>What weird food combinations do you really enjoy?</h5>
              <p className="author">Created by <a href="#">John_deo</a></p>
              <div style={{ width: '100%' }}> <a href="#" className="btn btn-round prm-btn font-12 mr-1 float-left">Follow</a>
                <button type="button" className="float-left btn-outline-primary create-post btn btn-round font-12" data-toggle="modal" data-target="#createPost"> Create Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}