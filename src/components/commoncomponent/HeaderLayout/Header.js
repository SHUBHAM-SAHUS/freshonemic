import React,{useState} from 'react'
import collapsebtn from "../../../assets/images/collapse-btn.png"
import Untitled from "../../../assets/images/Untitled-1.png"
import help from "../../../assets/images/icon--help.png"
import setting from "../../../assets/images/icon-setting.png"
import logout from "../../../assets/images/icon-logout.png"
import search from "../../../assets/images/search-btn.png"
import dropdownsearch from "../../../assets/images/dropdown-cross-btn.png"
import logo from "../../../assets/images/logo.png"
import alert from "../../../assets/images/alert-icon.png"
import userimages from "../../../assets/images/icon-user.png"
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Menu from "@material-ui/core/Menu";
import Sidebar from '../Sidebar/Sidebar';

 export const Header = () => {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
    
  
    return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light shadow" style={{"background":"#ffffff"}}>
  <div className="container-fluid"> <a id="sidebarCollapse"> <Sidebar /> {/*<img src={collapsebtn} alt="img" className="mr-4" />*/} </a> <a href="/"> <img src={logo} alt="logo" /> </a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="form-inline my-2 my-lg-0 ml-auto search-form">
        <input className="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search..." />
        <button className="search-btn my-2 my-sm-0" type="submit"> <img src={search} alt="pic" /> </button>
      </form>
      <ul className="nav navbar-nav ml-auto" >
        <li className="nav-item active dropdown "> <a className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" > <img src={dropdownsearch} alt="pic" /> </a> 

          {/* <div className="dropdown-menu createdropdown" aria-labelledby="dropdownMenuLink">
            <ul className="list-unstyled create-list">
              <li><h4>Create</h4></li>
              <li>
                <h4 data-toggle="modal" data-target="#createTopic">Topic</h4>
                <p>Create a topic of interest</p>
              </li>
              <li>
                <h4 data-toggle="modal" data-target="#createPost">Post</h4>
                <p>Share a post on your OneMic feed</p>
              </li>
            </ul>
          </div> */}
          {/*//*/} 
        </li>
        <li className="nav-item active"> <a className="nav-link" href="#"><img src={alert} alt="img" /></a> </li>
        {/* User */}
        <li className="nav-item border-none dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={userimages} alt="pic" /></a>&nbsp;&nbsp; 
          {/* User Dropdown */}
          <div className="dropdown-menu userdropdown" aria-labelledby="dropdownMenuLink"> 
            <h5><img src={userimages} alt="pic" /> &nbsp;&nbsp;My Station</h5>
          
          </div>
          {/*//*/}
        </li>
        <li className="nav-item "> <a className="prm-btn btn nav-item mt-2 btn-round">UPGRADE</a> </li>
      </ul>
    </div>
  </div>
</nav>
    

    </>

       
    
    )
}
