import * as React from 'react';
import { makeStyles, Container, Typography } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import new1 from '../images/new1.jpg'
import new2 from '../images/new2.jpg'
import new3 from '../images/new3.jpg'
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    padding: {
        paddingTop: theme.spacing(3),
        textAlign: "center"
    },
    bottomText:{
        bottom:"0",
        
    verticalAlign: "bottom",
    },
    relative:{
        
        verticalAlign: "bottom",
 verticalAlign: "bottom",

        
    },
    typogr:{
        height:"100px",
    }

}));


export default function News() {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%' }} className={classes.padding}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Item>
                        <Card sx={{ maxWidth: 355, height: 355  }}>
                            {/* <CardActionArea> */}
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={new1}
                                    alt="green iguana"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h6" component="div" className={classes.typogr}>
                                    ACADEMIC MOBILITY AT INNOPOLIS UNIVERSITY
                                    </Typography>
                                </CardContent>
                                <div className={classes.relative}>
                                  <Typography variant="body2" color="text.secondary" className={classes.bottomText}>
                                       July 8, 2021
                                    </Typography>
                                    </div>
                            {/* </CardActionArea> */}
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>

                        <Card sx={{ maxWidth: 355, height: 355  }}>
                            {/* <CardActionArea> */}
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={new2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" className={classes.typogr}>
                                    WE INVITE ALL STUDENTS TO THE VIRTUAL JOB FAIR
                                    </Typography>
                                   
                                </CardContent>
                                <div className={classes.relative}>
                                  <Typography variant="body2" color="text.secondary" className={classes.bottomText}>
                                       July 8, 2021
                                    </Typography>
                                    </div>
                            {/* </CardActionArea> */}
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>

                        <Card sx={{ maxWidth: 355, height: 355 }}>
                            {/* <CardActionArea> */}
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={new3}
                                    alt="green iguana"
                                />
                                <CardContent className={classes.relative}>
                                    <Typography gutterBottom variant="h6" component="div" className={classes.typogr}>
                                    IITU STUDENT ABOUT "COURSERA FOR CAMPUS"
                                    </Typography>
                                    
                                </CardContent>
                                <div className={classes.relative}>
                                  <Typography variant="body2" color="text.secondary" className={classes.bottomText}>
                                       July 8, 2021
                                    </Typography>
                                    </div>
                            {/* </CardActionArea> */}
                        </Card>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}