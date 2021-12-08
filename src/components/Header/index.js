
// import LoginPage './pages/login/Login';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
// import LoginPage from './pages/login/Login';
// import Routes from "../../routes/Routes";
import Routes from "../../routes/Routes/Routes";
import useAuth from "../../hooks/useAuth";
import { Link, useHistory } from "react-router-dom";
import {

  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';

import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  box:{
    background: "#cfe8ff",
    opacity: "1"
},
headerColor:{
  color:"#273a6b !important",
   background:"#273a6b !important",
  // backgroundColor:"#273a6b !important",
},
text:{
  color:"white",
 
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      color:"white",
  
  }
},
link:{
  color:"black",
  textDecoration:"none",
  "&:hover": {
    //you want this to be the same as the backgroundColor above
    color:"black",

}
},


}));
function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const onLogOut = () => {
    auth.logOut();
    history.push("/login");
  };

  return (
    auth.isLoaded &&
      auth.user ? (
      
      <Box sx={{ display: 'flex' }} className={classes.box}>
        <CssBaseline />

        <AppBar position="fixed" open={open}  classes={{root:classes.headerColor}}>
          <Toolbar >
            <IconButton className={classes.text}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon className={classes.text}/>
            </IconButton>
           
            <div className={classes.rightToolbar}>
              <Button color="inherit" component={Link} to="/"  className={classes.text}>
                IITU module
              </Button>
              
            </div>

            <>
              <Button color="inherit" component={Link} to="/profile"  className={classes.text}>
                {auth.user.firstName} {auth.user.lastName}
              </Button>
              <Button color="inherit" onClick={onLogOut}  className={classes.text}>
                Log out
              </Button>
            </>


          </Toolbar>
        </AppBar>
        <Drawer className={classes.text}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader className={classes.text}>
            <IconButton className={classes.text} onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List component={Link} to="/groups" className={classes.link}>
            {['My groups'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <GroupIcon /> 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List component={Link} to="/profile" className={classes.link} >
            {['Profile'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                   <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Messages'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes />
        </Main>

      </Box>
    )
      :
      (
        <Box sx={{ display: 'flex' }} className={classes.box}>
          <CssBaseline />

          <AppBar position="fixed" open={open}  classes={{root:classes.headerColor}} >
            <Toolbar   >

          
              <div className={classes.rightToolbar}>
                <Button   component={Link} to="/"  className={classes.text}>
                IITU module
                </Button>
              </div>



              <>
                <Button color="inherit" component={Link} to="/login"  className={classes.text}>
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/registration" className={classes.text}>
                  Registration
                </Button>
              </>




            </Toolbar>
          </AppBar>
      
          {/* <Main open={open}> */}
          {/* <DrawerHeader /> */}
          <Routes />
        {/* </Main> */}

        </Box>
      )
    


  );
}
export default Header;