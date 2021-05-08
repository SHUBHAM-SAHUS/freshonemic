import React from 'react'
import cardinvite from "../../../assets/images/card-invite.png"
import googleplay from "../../../assets/images/google-play.png"
import appleplay from "../../../assets/images/apple-store.png"
import downloadlink from "../../../assets/images/card2.png"
import "./sideadvertisemnet.scss"


export const SideAdvertisement = () => {
    return (
        <>
  <div className="figure mt-4 mr-2" style={{ backgroundImage: `url(${downloadlink})` }}  width="100%">
      <div className="img_a ml-2">
        
         <div className="mt-5">
          <img src={googleplay} alt="google" />
          </div>
          <div className="mt-2">
        <img src={appleplay} alt="apple" />
         </div>
      </div>
   </div>
        </>
      )
  }
  