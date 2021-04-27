import React from 'react'
import authorOne from 'assets/images/author1.jpg';
import './topicPost.scss'

export const TopicPost = () => {
    return (
        <div  className="media top-media-box p-3"> 
            <div className="media-body">
                <div className="article-body">
                    <h5><img src={authorOne} alt="John Doe" className="mr-3 rounded-circle" style={{ width: 60 }} /> I Totally agree </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small>more...</small></a></p>
                    <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                    {/**/}
                    <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> English </a> </div>
                    {/*//*/}
                </div>
            </div>
        </div>
    )
}
