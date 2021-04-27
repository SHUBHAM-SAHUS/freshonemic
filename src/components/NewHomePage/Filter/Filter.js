import React from 'react'
import './filter.scss'
import filterIcon from 'assets/images/filter-icon.png';
import filterAll from 'assets/images/filter-all.png';
import fiterFollowed from 'assets/images/filter-followed.png';
import filterHot from 'assets/images/filter-hot.png';
import filterRecent from 'assets/images/filter-recent.png';

const Filter = () => {
    return (

        <div className="section-header">
            
            <h2 className="sec-heading float-left"> All Topics</h2>
            <div className="dropdown float-right">
                <button className="btn filter-btn dropdown-toggle" type="button" data-toggle="dropdown">
                    <img src={filterIcon} alt /> &nbsp;&nbsp;<strong>Filter</strong>  &nbsp;&nbsp;&nbsp;&nbsp;{/* <i class="fa fa-angle-down" aria-hidden="true"></i> */}
                </button>
                {/**/}
                <div className="dropdown-menu filterdropdown filter-position" aria-labelledby="dropdownMenuLink">
                    <ul className="list-unstyled">
                        <li><a className="dropdown_item" href="#"><img src={filterAll} alt />&nbsp;&nbsp;&nbsp; All </a> </li>
                        <li><a className="dropdown_item" href="#"><img src={fiterFollowed} alt />&nbsp;&nbsp;&nbsp; Followed </a></li>
                        <li><a className="dropdown_item" href="#"><img src={filterHot} alt />&nbsp;&nbsp;&nbsp; Hot </a></li>
                        <li><a className="dropdown_item" href="#"><img src={filterRecent} alt />&nbsp;&nbsp;&nbsp; Recent </a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Filter
