import React from 'react'
import './filter.scss'
import filterIcon from 'assets/images/filter-icon.png';
import filterAll from 'assets/images/filter-all.png';
import fiterFollowed from 'assets/images/filter-followed.png';
import filterHot from 'assets/images/filter-hot.png';
import filterRecent from 'assets/images/filter-recent.png';
import {Dropdown} from 'react-bootstrap';

const Filter = () => {
    return (

        <div className="section-header">

            <h2 className="sec-heading float-left"> All Topics</h2>
            <div className="dropdown float-right">

                <Dropdown className="dropdown">
                    <Dropdown.Toggle className="filter-btn dropdown-toggle" variant="" id="dropdown-basic" >
                    <img src={filterIcon} alt />  Filter 
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu filterdropdown">
                        <Dropdown.Item className="dropdown_item" href="#"><img src={filterAll} alt />&nbsp;&nbsp;&nbsp; All</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item" href="#"><img src={fiterFollowed} alt />&nbsp;&nbsp;&nbsp; Followed</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item" href="#"><img src={filterHot} alt />&nbsp;&nbsp;&nbsp; Hot </Dropdown.Item>
                        <Dropdown.Item className="dropdown_item" href="#"><img src={filterRecent} alt />&nbsp;&nbsp;&nbsp; Recent </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>


    )
}

export default Filter
