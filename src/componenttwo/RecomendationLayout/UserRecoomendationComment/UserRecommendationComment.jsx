import React from 'react'
import usercomment from "./Usercomment.module.scss"
import auther1 from "../../../assets/images/auther1.jpg"
// import  check from  "../../../assets/images/chec"
export const UserRecommendationComment = () => {
    return (
         <> 
 


<div className={`container `}>

           <div className={'shadow card mt-2 '}>
       <div className={` row  shadow px-2 py-2 ${usercomment.usercomment_mainapge}`}>
       
        <div className="col-md-1"> 
         
         <div className="media d-flex justify-content-center"> <img src={auther1} alt="John Doe" className="mr-3 rounded-circle" style={{"width":"65px"}} /> </div>
         
         
         </div>
         {/* <h5 data-toggle="modal" className="recommend-btn sentitem" data-target="#writeRecommendation"><a href="#" className="btn btn-round prm-btn font-14 float-right reco-btn"> Recommend</a></h5>  */}
        <div className="col-md-2 order-lg-3  "> <div className="d-flex justify-content-center mt-2"> <button className={`${usercomment.btn_clr}`}> Recommend </button>  </div> </div>
        <div className="col-md-9  order-lg-2  ">   <p className={usercomment.gray_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
        <p className="author pt-0"> 5 days ago</p> </div>
        

        </div>

        </div>

  
</div>
    
    
    


         </>
            
    
    )
}
