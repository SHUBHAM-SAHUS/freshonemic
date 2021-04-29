import React from 'react'
import './filter.scss'
import filterIcon from 'assets/images/filter-icon.png';
import filterAll from 'assets/images/filter-all.png';
import fiterFollowed from 'assets/images/filter-followed.png';
import filterHot from 'assets/images/filter-hot.png';
import filterRecent from 'assets/images/filter-recent.png';
import {Dropdown} from 'react-bootstrap';

const allTopicSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grid float-left mt-1 mr-2" viewBox="0 0 16 16">
<path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
</svg>

const Filter = () => {
    return (

        <div className="section-header">

            <h2 className="sec-heading float-left underline">{allTopicSvg} All Topics</h2>
            <div className="dropdown float-right">

                <Dropdown className="dropdown">
                    <Dropdown.Toggle className="filter-btn dropdown-toggle" variant="" id="dropdown-basic" >
                    <img src={filterIcon} alt />  Filter 
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu filterdropdown">
                        <Dropdown.Item className="dropdown_item" href ="/"><img src={filterAll} alt />&nbsp;&nbsp;&nbsp; All</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item" href ="/"><img src={fiterFollowed} alt />&nbsp;&nbsp;&nbsp; Followed</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item" href ="/"><img src={filterHot} alt />&nbsp;&nbsp;&nbsp; Hot </Dropdown.Item>
                        <Dropdown.Item className="dropdown_item" href ="/"><img src={filterRecent} alt />&nbsp;&nbsp;&nbsp; Recent </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>


    )
}

export default Filter
