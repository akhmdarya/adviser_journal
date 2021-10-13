import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import LoginPage from "../../pages/login/Login";
// import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
// import NotFound from "../../pages/NotFound";
// import {LoginPage} from '../../pages/login/Login'
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../../routes/PrivateRoute";
import GuestRoute from "../../routes/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Routes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Switch>
       
       <Route exact path="/">
        <Home />
      </Route>

        <PrivateRoute  path="/profile">
        <Profile />
      </PrivateRoute>

      <GuestRoute  path="/login">
        <LoginPage />
      </GuestRoute>
       
      {/* <Route exact path="/">
        <Home />
      </Route>

      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>

      <GuestRoute path="/login">
        <Login />
      </GuestRoute>
      <GuestRoute path="/registration">
        <Registration />
      </GuestRoute>

      <Route path="/not-found-404">
        <NotFound />
      </Route>
      <Redirect to="/not-found-404" /> */}
    </Switch>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Routes;