import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserTabs from "./tab.module.scss"

import tabstyle from "./tab.module.scss"
import { PostPageComponent } from '../PostPageComponent/PostPageComponent';
import { TopPageComponent } from '../TopicPageComponent/TopPageComponent';




 
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

export const TabcomponentUser = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
           <div>
           <h4 className="mt-2 mb-2">  Flagged </h4>
           <div className= {`${tabstyle.head_lower_recommendation}`}> </div>
            </div>
            <div className={classes.root}>
     
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Topic" {...a11yProps(0)}  className={classes.TabColor}/>
          <Tab label="Posts" {...a11yProps(1)}  className={classes.TabColor}/>
         
        </Tabs>
 
      <TabPanel value={value} index={0} className={classes.box}>
      <TopPageComponent/>
      <TopPageComponent/>

      <TopPageComponent/>
      <TopPageComponent/>


      </TabPanel>
      <TabPanel value={value} index={1}>
    <PostPageComponent/>
    <PostPageComponent/>
      </TabPanel>
      
    </div>

        </>    
        
    )
}
