import Carousel from 'react-bootstrap/Carousel';
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../images/slide3.png'
import slide2 from '../images/slide5.png'
import slide3 from '../images/slide9.png'
// import slide4 from '../images/slide4.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      maxHeight: "477px",
      maxWidth: "1207px",
    },
    caption:{
        background: "#CDD6DB",
        opacity: ".9"
    }

  }));
function Slider() {
    const classes = useStyles();
  return (
<Carousel variant="dark">
  <Carousel.Item className={classes.root}>
    <img
      className="d-block w-100"
      src={slide1} 
      alt="First slide"
    />
    <Carousel.Caption className={classes.caption}>
      <h3>Connect with your students</h3>
      <p>Be in touch, exchange messages, post announcements</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={classes.root}>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Second slide"
    />

    <Carousel.Caption className={classes.caption}>
      <h3>Chat with other advisors</h3>
      <p>Exchange information with other advisors, as well as stream advisors, see trends in group ratings</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={classes.root}>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />

    <Carousel.Caption className={classes.caption}>
      <h3>Track student performance</h3>
      <p>View students progress and attendance</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
  }
  export default Slider;