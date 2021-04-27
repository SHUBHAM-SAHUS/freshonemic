import React from 'react'
import dislikeIcon from '../../../assets/images/icon-dislike.png';
import likeIcon from '../../../assets/images/icon-like.png';
import commentIcon from '../../../assets/images/icon-comment.png';
import forwardIcon from '../../../assets/images/icon-forward.png';
import pinIcon from '../../../assets/images/icon-pin.png';
import flagIcon from '../../../assets/images/icon-flag.png';
import musicIcon from 'assets/images/icon-music.png';
import './comments.scss';

export const Comments = () => {
    return (

        <div className="comment p-3 mt-2 mb-3">
            <ul className="list-unstyled coments-use">
                <li> <a href="#" className="comment"><img src={likeIcon} /></a> <span className="total">1 K</span> </li>
                <li> <a href="#" className="comment"><img src={dislikeIcon} /></a> <span className="total">15</span> </li>
                <li> <a href="#"> <img src={commentIcon} /> </a> <span className="total">32</span> </li>
                <li> <a href="#" className="comment"><img src={forwardIcon} /></a> <span className="total">20</span> </li>
                <li> <a href="#" className="comment"><img src={pinIcon} /></a> <span className="total">08</span> </li>
                <li className="border-none" data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={flagIcon} /></a> <span className="total">01</span> </li>
                <li className="float-right" data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={musicIcon} /> <span className="total">Add to playlist</span> </a></li>
            </ul>
        </div>

    )
}
