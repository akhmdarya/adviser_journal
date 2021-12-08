import React,{ useEffect} from 'react'
import { useForm, Controller } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {
    TextField,
    Grid,
    makeStyles,
    Container,
    Button,
    Typography,
} from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import new1 from '../../components/images/group1.jpg'
import new2 from '../../components/images/group2.jpg'
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState } from "react";
import MyResponsiveBar from './Bars/Bar'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        height:"100vh"
    },
    padding: {
        paddingTop: theme.spacing(3),
        textAlign: "center"
    },
    bottomText: {
        bottom: "0",

        verticalAlign: "bottom",
    },
    relative: {

        verticalAlign: "bottom",
        verticalAlign: "bottom",


    },
    typogr: {
        height: "10px",
    },
    card: {
        display: "flex",
        justifyContent: "center",
    },
    content: {
        marginTop: "20px",
        justifyContent: "center",
        display: "flex",
        // padding:"30px",
        flexBasis: "50%",
    }

}));

function Groups() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();
    const [group, setgroup] = useState(
        
         '',
    
    );
    useEffect(() => {
        
        setgroup(group);
    
    
       
      
    }, [group])
      
    
 

    const handleClick = () => {
      setgroup(group);
    };


  const fieldChange = (fieldName, value) => {
    setgroup(oldState => ({
        ...oldState,
        [fieldName]: value
    }));
}

    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container className={classes.paddingTop} spacing={2}>
                <Box sx={{ width: '100%' }} className={classes.padding}>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.flex}>Your adviser's groups!</Typography>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} className={classes.content}>
                            <Item className={classes.card}>
                                <Card sx={{ maxWidth: 355, height: 555 }}>
                                    {/* <CardActionArea> */}
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={new1}
                                    // alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h6" component="div" className={classes.typogr}>
                                            SIS-2113
                                        </Typography>
                                    </CardContent>
                                    <div className={classes.relative}>
                                        <Button component={Link} to= {`/details/2113`}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                         
                                            onClick={handleClick}
                                            disabled={isLoading}>
                                            <Typography variant="body2" color="text.secondary" className={classes.bottomText}>
                                                Details
                                            </Typography>
                                        </Button>
                                        <MyResponsiveBar />
                                    </div>
                                    {/* </CardActionArea> */}
                                </Card>
                            </Item>
                        </Grid>
                        <Grid item xs={6} className={classes.content}>
                            <Item className={classes.card}>

                                <Card sx={{ maxWidth: 355, height: 555 }}>
                                    {/* <CardActionArea> */}
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={new2}
                                    // alt="green iguana"
                                    />
                                    <CardContent>
                                    
                                        <Typography gutterBottom variant="h6" component="div" className={classes.typogr}>
                                            SIS-2114
                                        </Typography>
                                      

                                    </CardContent>
                                    <div className={classes.relative}>
                                    <Button component={Link} to= {`/details/2114`}
                                            variant="contained"
                                            // onClick={onSubmit(2113)}
                                            color="primary"
                                            type="submit"
                                            disabled={isLoading}>
                                        <Typography variant="body2" color="text.secondary" className={classes.bottomText}>
                                            Details
                                        </Typography>
                                        </Button>
                                        <MyResponsiveBar />
                                    </div>
                                    {/* </CardActionArea> */}
                                </Card>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container>

    );
}

export default Groups;