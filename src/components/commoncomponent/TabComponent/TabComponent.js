import React from "react"
import PropTypes from 'prop-types';
// material component
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabsUI from "components/shared/ui-components/TabsUI";
import { LoginPage } from "components/LoginPage/LoginPage";
import { SignUp } from "components/SignUp/SignUp";

 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
          >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


export const TabComponent=()=>{

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  const labels = [
        
    'Sign up ',
    'Sign In',
  
    
  ];
  const tabs = {
    0: <SignUp/>,
    1:  <LoginPage/>,
   
  };

         return(
             <>
      
      <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fixed"
            scrollButtons="on"
            className = "recruiter-tab"
            aria-label="scrollable auto tabs example"
            >
          {
            labels && labels.map((label, index) => <Tab key={index} label={label} {...a11yProps(index)} />)
          }
        </Tabs>
        {
          tabs && labels.map((tabContent, index) => <TabPanel className="custom-pane" value={value} index={index} key={index}>{tabs[index]}</TabPanel>)
        }


             </>
         )
}