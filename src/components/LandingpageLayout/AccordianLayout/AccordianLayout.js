import React from 'react'
import "./accordian.scss"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,

    },

    heading1: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
  
      },

  }));
  
export const AccordianLayout = () => {
    const classes = useStyles();
    return (
       <>
       <div className="px-5 py-5">
       <div className={classes.root}>
      <Accordion className="back_accordian">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="tick_arrow" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}  >01. What is Storiyoh OneMic aka “OneMic”?</Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading1}  >
    
          OneMic is an innovative public storytelling platform brought to you by Storiyoh. OneMic is a network of storytellers from all over the globe sharing their opinions and thoughts, their dreams and hopes, their worries and concerns. Everyone has a story to tell and we have the platform for you to record and post your story; photograph an image and upload; scribble your stories. Join this new movement.
              
          </Typography>
        </AccordionDetails>
      </Accordion>
     

      <Accordion className="back_accordian mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="tick_arrow" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}  > 02. How do I publish a topic in Onemic?  </Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading1}  >
    
          OneMic is an innovative public storytelling platform brought to you by Storiyoh. OneMic is a network of storytellers from all over the globe sharing their opinions and thoughts, their dreams and hopes, their worries and concerns. Everyone has a story to tell and we have the platform for you to record and post your story; photograph an image and upload; scribble your stories. Join this new movement.

          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className="back_accordian mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="tick_arrow" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}  > 02. How do I publish a topic in Onemic?  </Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading1}  >
    
          OneMic is an innovative public storytelling platform brought to you by Storiyoh. OneMic is a network of storytellers from all over the globe sharing their opinions and thoughts, their dreams and hopes, their worries and concerns. Everyone has a story to tell and we have the platform for you to record and post your story; photograph an image and upload; scribble your stories. Join this new movement.

          </Typography>
        </AccordionDetails>
      </Accordion>
    

      <Accordion className="back_accordian mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="tick_arrow" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}  >  03. How do I publish a post in Onemic?  </Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading1}  >
    
          OneMic is an innovative public storytelling platform brought to you by Storiyoh. OneMic is a network of storytellers from all over the globe sharing their opinions and thoughts, their dreams and hopes, their worries and concerns. Everyone has a story to tell and we have the platform for you to record and post your story; photograph an image and upload; scribble your stories. Join this new movement.


          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion className="back_accordian mt-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="tick_arrow" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}  >   04. How do I publish a post in Onemic?     </Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading1}  >
    
          OneMic is an innovative public storytelling platform brought to you by Storiyoh. OneMic is a network of storytellers from all over the globe sharing their opinions and thoughts, their dreams and hopes, their worries and concerns. Everyone has a story to tell and we have the platform for you to record and post your story; photograph an image and upload; scribble your stories. Join this new movement.



          </Typography>
        </AccordionDetails>
      </Accordion>
    



    

    


    
    </div>      
      </div>

       </>
    )
}

