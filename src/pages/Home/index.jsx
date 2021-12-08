import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import  Slider  from "../../components/Slider/Slider";
import  News  from "../../components/News/News";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  padding:{
    paddingTop: theme.spacing(8),
    textAlign: "center"
  },

}));

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.padding}>
           Adviser's journal
          </Typography>
          <Slider />
          <Typography variant="h2"  className={classes.padding}>
          News
          </Typography>
           <News /> 
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;