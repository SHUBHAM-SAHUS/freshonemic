import React from 'react'
import usergiven from "./userfivenmodule.module.scss"
import auther1 from "../../../assets/images/auther1.jpg"
// import  check from  "../../../assets/images/chec"
export const UserGivenComment = () => {
    return (
         <> 
 


<div className={`container `}>

           <div className={'shadow card mt-1 '}>
       <div className={` row  shadow px-2 py-2 ${usergiven.usercomment_mainapge}`}>
       
        <div className="col-md-1"> 
         
        <div className="media d-flex justify-content-center"> <img src={auther1} alt="John Doe" className="mr-3 rounded-circle" style={{"width":"65px"}} /> </div>
         
         
         </div>
         <div className="col-md-1  order-lg-3 "> </div> 
        <div className="col-md-10 order-lg-2">   <p className={usergiven.gray_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
        <p className="author pt-0"> 5 days ago</p> </div>
        

        </div>

        </div>

  
</div>
    
    
    


         </>
            
    
    )
}
