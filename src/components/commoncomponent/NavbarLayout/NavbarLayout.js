import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import "./navbar.scss";
import "./mediaNavigation.scss";
import { FaRegUser } from "react-icons/fa"
import logo from "../../../assets/images/logo.png"
import dropdowncrossbtn from "../../../assets/images/dropdown-cross-btn.png"
import searchbtn from "../../../assets/images/search-btn.png"
import { Dropdown } from 'react-bootstrap';
import { PostModal } from '../PostModal/PostModal';
import { TopicModal } from '../Modal/TopicModal';
import Sidebar from '../Sidebar/Sidebar';



const useStyles = makeStyles((theme) => ({
  grow: {
    // flexGrow: 0.5,
    [theme.breakpoints.up('sm')]:{
      flexGrow: 0.1,    
    },
    [theme.breakpoints.up('md')]:{
      flexGrow: 0.5,    
    },
    [theme.breakpoints.up('lg')]:{
      flexGrow: 0.5,    
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      height: '4vh'
    },
    // [theme.breakpoints.up('md')]: {
    //   width: '50ch',
    //   height: '4vh'
    // },
    [theme.breakpoints.up('xl')]: {
      width: '40ch',
      height: '4vh'
    },
    borderRadius: '25px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));


export const NavbarLayout = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [anchorE, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}> my stations  </MenuItem>
      <MenuItem onClick={handleMenuClose}> FAQ'S </MenuItem>
      <MenuItem onClick={handleMenuClose}> Help setting </MenuItem>
      <MenuItem onClick={handleMenuClose}> User setting </MenuItem>
      <MenuItem onClick={handleMenuClose}> Logout </MenuItem>
    </Menu>


  );




  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />

        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );





  return (
    <>
      {/* <div className="shadow py-5" > */}
      <AppBar className="nav-search" position="static" className="header_bg_main shadow">
        <Toolbar>
          
            <Sidebar/>
          
          <Typography className={classes.title} variant="h6" noWrap>

            <img src={logo} alt="logomenu" />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {/* <SearchIcon /> */}
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>  <img className="search_btn" src={searchbtn} alt="pic" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>



            
              {/* <AccountCircle /> */}
              
              <Dropdown>
                <Dropdown.Toggle  className="dropdown-btn" id="dropdown-basic">
                <img src={dropdowncrossbtn} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                  <h4 className="dropdown-heading"><b>Create</b></h4>
                  
                  <Dropdown.Item className="dropdown-item"><TopicModal/></Dropdown.Item>
                  <p>Create a topic of interest</p>                 
                  
                  <Dropdown.Item className="dropdown-item" ><PostModal/></Dropdown.Item>
                  <p>Share a post on your OneMic feed</p>
                  
                </Dropdown.Menu>
              </Dropdown>
            







            <IconButton aria-label="show 17 new notifications" color="inherit">
              {/* <Badge badgeContent={17} color="secondary"> */}
              <NotificationsIcon />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <FaRegUser />
            </IconButton>

          </div>

          <button className="rm-btn">upgrADE</button>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* </div> */}

    </>
  )
}


