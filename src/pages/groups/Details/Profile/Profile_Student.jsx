import { useForm, Controller } from "react-hook-form";
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    TextField,
    Grid,
    makeStyles,
    Container,
    Button,
    Typography,
} from "@material-ui/core";
import { useParams, useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import new1 from '../../components/images/group1.jpg'
// import new2 from '../../components/images/group2.jpg'
import api from "../../../services/api";
import useAuth from "../../../hooks/useAuth";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AssessmentIcon from '@mui/icons-material/Assessment';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
         height: "100vh"
    },
    padding: {
        paddingTop: theme.spacing(3),
        textAlign: "center"
    },
    bottomText: {
        bottom: "0",

        verticalAlign: "bottom",
    },
 
    content: {
        marginTop: "20px",
        justifyContent: "center",
        display: "flex",
        // padding:"30px",
        // flexBasis: "50%",
        background:'white'
        
    }, link:{
        color:"white",
        textDecoration:"none",
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          color:"black"
      
    }
}

}));


function ProfileStudent() {
    const { id } = useParams();
    const classes = useStyles(); 
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const [open, setOpen] = React.useState(false);

    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container className={classes.paddingTop} spacing={2}>
                <Box sx={{ width: '100%' }} className={classes.padding}>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.flex}>Information about {group}</Typography>
                    </Grid>
                   
                </Box>
            </Grid>
        </Container>

    );

}