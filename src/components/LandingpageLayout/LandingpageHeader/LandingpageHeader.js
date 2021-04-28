import React, { useState } from 'react'
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import "./landfingheader.scss"
import logo from "../../../assets/images/logo.png"
import CommonModal from 'components/shared/ui-components/common-modal'
import { SignUp } from 'components/SignUp/SignUp'
import { LoginPage } from 'components/LoginPage/LoginPage'
import { ForgotPage } from 'components/ForgotPage/ForgotPage'
import { VerifyPage } from 'components/VerifyPage/VerifyPage'
import { TabComponent } from 'components/commoncomponent/TabComponent/TabComponent'


export const LandingpageHeader = () => {
  let defaultForm = () => <div></div>;
  const [state, setState] = useState({ open: false });
  const [form, setForm] = useState({ defaultForm });

  const handelModal = (component) => {
    setState({ open: true });
    setForm(component);
  };

  const handelClose = () => {
    setState({ open: false });
  };

  return (
    <>
      <CommonModal open={state.open} handelClose={handelClose}>
        {form}
      </CommonModal>
      <Navbar bg="dark" expand="lg px-2">
        <Navbar.Brand href="/"> <img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-light" >Home</Nav.Link>
            <Nav.Link href="/" className="text-light">Contact</Nav.Link>
            <Nav.Link className="btn_header_landing ml-1 " onClick={() =>
              handelModal(<div> <TabComponent/>  </div>)
            } >signup</Nav.Link>
               
              


          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


