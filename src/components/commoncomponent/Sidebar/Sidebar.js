import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {CgMenuLeft} from 'react-icons/cg'
import { Container, Paper, Box, Typography,List,ListItem,ListItemText,ListItemIcon,Collapse} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PagesIcon from '@material-ui/icons/Pages';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop:theme.spacing(6),
  },
  sidebar:{
    position:"fixed",
    top:0,
    left:0,
    width:"30%",
    height:"100%"
  },

  nesteditem:{
     paddingLeft:theme.spacing(14)
  }
  
}));



const Nav = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-right: 1.5rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #7386D5;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const classes = useStyles();
  const [open,setopen]= useState(false)
  const [aboutt,setaboutt]= useState(false)
  const [pagg,setpagg]= useState(false)
  const [portt,setportt]= useState(false)
  const [contt,setcontt]= useState(false)
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <Nav>
          <NavIcon to='#'>
            <CgMenuLeft className="sidebar_icon" onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose className="sidebar_close" onClick={showSidebar} />
            </NavIcon>
                
            <List>
      
      <ListItem  button onClick={()=>setopen(!open)} >
           <ListItemIcon>
        <HomeIcon/>
      </ListItemIcon>
    
       

    <ListItemText  primary="Home"/>
    <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>
    </ListItem >

    <Collapse in={open}>
           
           <ListItem button className={classes.nesteditem}>
             
       <ListItemText  primary="two"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="three"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="four"/>
       </ListItem >
       </Collapse>

   
         
    <List disabledPadding>
      <ListItem button  onClick={()=>setaboutt(!aboutt)}>

              <ListItemIcon>
              <InfoIcon/>  

              </ListItemIcon>

       

        <ListItemText >
          About
        </ListItemText>

        <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>

      </ListItem>
           
      <Collapse in={aboutt}>
           
           <ListItem button className={classes.nesteditem}>
             
       <ListItemText  primary="two"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="three"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="four"/>
       </ListItem >
       </Collapse>


      <ListItem button onClick={()=>setpagg(!pagg)} >

     
       <ListItemIcon>
       <PagesIcon/>
      </ListItemIcon>


        <ListItemText >
          Pages
        </ListItemText>
        <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>
      </ListItem>

      <Collapse in={pagg}>
           
           <ListItem button className={classes.nesteditem}>
             
       <ListItemText  primary="two"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="three"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="four"/>
       </ListItem >
       </Collapse>


      <ListItem button  onClick={()=>setportt(!portt)}>
       
    
      <ListItemIcon>
      <AccountCircleIcon/>
      </ListItemIcon>


     
        <ListItemText>
          Portfolio
        </ListItemText>
           
      <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>
      </ListItem>
      <Collapse in={portt}>
           
           <ListItem button className={classes.nesteditem}>
             
       <ListItemText  primary="two"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="three"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="four"/>
       </ListItem >
       </Collapse>


    



      <ListItem button  onClick={()=>setcontt(!contt)} >
      <ListItemIcon>
             <ContactMailIcon/>
      </ListItemIcon>
        <ListItemText>
         Contact
        </ListItemText>
        <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>
      </ListItem>
      <Collapse in={contt}>
           
           <ListItem button className={classes.nesteditem}>
             
       <ListItemText  primary="two"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="three"/>
       </ListItem >
       
       <ListItem button className={classes.nesteditem}>
       
       <ListItemText  primary="four"/>
       </ListItem >
       </Collapse>


    </List>

     
    

    
   
       
     </List>



          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;