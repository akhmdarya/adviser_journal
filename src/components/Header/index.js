import './App.css';
import './pages/login/Login';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import LoginPage from './pages/login/Login';
import Routes from "./routes/Routes/Routes";
import useAuth from "./hooks/useAuth";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
function Header() {
return (
<AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Real App
        </Typography>
        <div className={classes.rightToolbar}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        </div>
        {auth.isLoaded &&
          (auth.user ? (
            <>
              <Button color="inherit" component={Link} to="/profile">
                {auth.user.firstName} {auth.user.lastName}
              </Button>
              <Button color="inherit" onClick={onLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              
            </>
          ))}
      </Toolbar>
    </AppBar>
     );
    }
    
    export default Header;