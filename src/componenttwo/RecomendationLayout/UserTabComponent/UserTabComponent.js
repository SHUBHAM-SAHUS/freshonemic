import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserTabs from "./usertabcomponent.module.scss"
import { UserRecommendationComment } from '../UserRecoomendationComment/UserRecommendationComment';
import tabstyle from "./usertabcomponent.module.scss"

import { UserGivenComment } from '../UserGivenComment/UserGivenComment';
import { PenddingComment } from '../PendingComentPending/PenddingComment';

 
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    
    TabColor:{
        fontSize:'13px',
        fontWeight:"600",
        fontColor:'#180D0B',
        TextTranform:"lowercase"
    }
 

  }));

export const UserTabComponent = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
           <div>
           <h2 className="mt-2">  Recommendations </h2>
           <div className= {`${tabstyle.head_lower_recommendation}`}> </div>
            </div>
            <div className={classes.root}>
     
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Received" {...a11yProps(0)}  className={classes.TabColor}/>
          <Tab label="Given" {...a11yProps(1)}  className={classes.TabColor}/>
          <Tab label="Pending" {...a11yProps(2)}  className={classes.TabColor}/>
        </Tabs>
 
      <TabPanel value={value} index={0} className={classes.box}>
        <UserRecommendationComment/>
        <UserRecommendationComment/>
        <UserRecommendationComment/>
        <UserRecommendationComment/>
        <UserRecommendationComment/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <UserGivenComment/>
      <UserGivenComment/>
      <UserGivenComment/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <PenddingComment/>
       <PenddingComment/>
      </TabPanel>
    </div>

        </>    
        
    )
}
