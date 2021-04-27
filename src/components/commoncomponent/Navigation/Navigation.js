import React from 'react'
import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import logo from "../../../assets/images/logo.png"
import "./navigation.scss";
import './mediaNavigation.scss'
import { FaRegUser } from "react-icons/fa"
import Sidebar from '../Sidebar/Sidebar';
import dropdowncrossbtn from "../../../assets/images/dropdown-cross-btn.png";
import NotificationsIcon from '@material-ui/icons/Notifications';
import untitled1 from 'assets/images/Untitled-1.png';
import iconHelp from 'assets/images/icon--help.png';
import iconSetting from 'assets/images/icon-setting.png';
import iconLogout from 'assets/images/icon-logout.png';
import search from "../../../assets/images/search-btn.png"
import { TopicModal } from '../Modal/TopicModal'
import { PostModal } from '../PostModal/PostModal'

export const Navigation = () => {
  return (
    <div className="">

      <Navbar collapseOnSelect expand="lg" className="shadow">
        <Sidebar />
        <Navbar.Brand href="#home"> <img className="nav_logo" src={logo} alt="logo" /> </Navbar.Brand>
        <form className="form-inline my-2 my-lg-0 search-form">
          <input className="form-control mr-sm-2 ml-auto search-input" type="search" placeholder="Search" aria-label="Search..." />
          <img src={search} alt="pic" />
        </form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">

            <NavDropdown className="nav_padding" title={<img src={dropdowncrossbtn} alt />} id="collasible-nav-dropdown">
              <div className="create_dropdown">
                <h4 className="dropdown-heading"><b>Create</b></h4>
                <NavDropdown.Item className="create_item"><TopicModal /></NavDropdown.Item>
                <p className="dropdown_p">Create a topic of interest</p>
                <NavDropdown.Item className="create_item"><PostModal /></NavDropdown.Item>
                <p className="dropdown_p">Share a post on your OneMic feed</p>
              </div>
            </NavDropdown>
            <Nav.Link href="#notification" className="nav_padding">< NotificationsIcon /></Nav.Link>

            <NavDropdown className="nav_padding" title={<FaRegUser />} id="collasible-nav-dropdown">
              <div className="profile_dropdown">
                <h5 className="profile_header"><FaRegUser />&nbsp;My Station</h5>
                <NavDropdown.Item href="#action/3.2"><img src={untitled1} alt />&nbsp;&nbsp;FAQ'S</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><img src={iconHelp} alt />&nbsp;&nbsp;Help & Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><img src={iconSetting} alt />&nbsp;&nbsp;User Setting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><img src={iconLogout} alt />&nbsp;&nbsp;Logout</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
          <button className="rm-btn">upgrade</button>
        </Navbar.Collapse>
      </Navbar>



    </div>
  )
}


