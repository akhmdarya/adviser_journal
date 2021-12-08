import { createStyles, useMediaQuery, Avatar, AppBar, BottomNavigationAction, Button, Container, IconButton, Toolbar, Typography, useTheme, BottomNavigation } from '@material-ui/core';
import React, { useContext,useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';


import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PolicyIcon from '@material-ui/icons/Policy';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>
    createStyles({

        root: {
        
            backgroundColor: "#87CEFA",
            // flex: "0 0 auto",
           
            flexWrap: "wrap"
        },
        footer:{
            position: "absolute",
            left: "0",
           // bottom: "0",
            width: "100%",
            height: "80px",
            backgroundColor: "#273a6b !important",
            // backgroundColor: "#4169E1",
            display:'flex',
            flexDirection:'column',
            // bottom: "0",
          //  bottom: "0",
            // position: "fixed",
            width: "100%",
        },
        text:{
            margin:'20px',
            
        }
    }))
const Footer = (props) => {

    
    const [value,setValue]=useState("Recents")
    const handleChange = (event,newValue) =>{
        setValue(newValue);
    }

   const classes = useStyles();
    return (
      
        <>
        
        


        <footer className={classes.footer}>
           {/* <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                label={<Link to='/cookies'>Cookies</Link>}
                value='cookies'
                icon={<Link to='/cookies'><ColorLensIcon></ColorLensIcon></Link>}
                ><Typography> Cookies
                </Typography>
                    </BottomNavigationAction>

                
               <BottomNavigationAction


                label={ <Link to='/policy'>Privacy Policy</Link>}
                value='policy'
                icon={<Link to='/policy'><PolicyIcon></PolicyIcon></Link>}
                >
                   <Typography> Privacy Policy
                       </Typography>
                    </BottomNavigationAction>



                <BottomNavigationAction
                label={ <Link to='/contact'>Contact Us</Link>}
                value='Contact'
                  icon={<Link to='/contact'><ContactMailIcon></ContactMailIcon></Link>}
                >
                 <Typography> Contact us
                       </Typography>
                       </BottomNavigationAction>
              
                </BottomNavigation> */}
                 <Typography className={classes.text} component='h6' variant='h6'>IITU Module, Adviser's journal © 2021. All rights reserved.</Typography>
        </footer>
        </>
    );
};
export default Footer