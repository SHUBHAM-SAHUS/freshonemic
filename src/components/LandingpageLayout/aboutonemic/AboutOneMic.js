import React from 'react'
import "./aboutonemic.scss"
import abouticon from "../../../assets/images/about-1.png"
import aboutbgmic from "../../../assets/images/about-bg.png"
export const AboutOneMic = () => {
  return (
    <>
      <div>

        <div className="pt-5 main_aboutonemic" style={{ backgroundImage: `url(${aboutbgmic})` }}>
          <div className="container">
            <div className="row ">
              <div className="col-md-6 pt-5">
                <h2 className="section-heading mb-4 onemic_about_a">About OneMic</h2>
                <p className="onemic_about_b">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className="onemic_about_b"> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                <a href="#" className="btn btn btn-outline-light btn-rounded mt-4" title="Read More">Read More</a>
              </div>
              <div className="col-md-6">
                <img src={abouticon} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

      </div>


    </>


  )
}

