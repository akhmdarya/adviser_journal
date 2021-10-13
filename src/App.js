import './App.css';
import './pages/login/Login';
import Routes from "./routes/Routes/Routes";
import useAuth from "./hooks/useAuth";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
} from "@material-ui/core";

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
}));

function App() {
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const onLogOut = () => {
    auth.logOut();
    history.push("/login");
  };

  return (
    <div className={classes.root}>
    

    <Routes />
  </div>
  );
}

export default App;
