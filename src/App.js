import './App.css';
import React from 'react';
import './pages/login/Login';
import Routes from "./routes/Routes/Routes";
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import {
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  footer:{
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "80px",
  }
  
}));

function App() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Header />
      <Footer className={classes.footer}/>
    </div>

  );
}

export default App;
