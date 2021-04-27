import React from 'react';
import './sectionHeader.scss';

export const SectionHeader = () => {
    return (
        <div>
            <div className="section-header">
                <h2 className="sec-heading float-left">Posts</h2>
            </div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Published</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Saved</a>
                </li>
            </ul>
            
        </div>
    )
}
