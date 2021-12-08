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

const columns = [
  
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    // { field: 'profile', headerName: 'Profile', width: 150 },
    // { field: 'Attendans', headerName: 'Attendans', width: 150 },
    // { field: 'Grades', headerName: 'Grades', width: 150 }
    {
        field: "details",
        headerName: "Details",
        sortable: false,
        width: 130,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            const api= params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};
           
            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });
    
            // set to state rather then alert
            return alert(JSON.stringify(thisRow, null, 4));
          };
         
          return (
            
            <Button  
              variant="contained"
              color="primary"
              startIcon={<AccountCircleIcon />}
             // onClick={onClick}
            ><Link to={`/profile_student/30534`} style={{ color:"white", textDecoration:"none",
            "&:hover": {
              color:"black"
        }}}  target="_blank">
              Profile
              </Link>
            </Button>
          );
        }
      },
    {
        field: "attendans",
        headerName: "Attendans",
         width: 150,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          const onClick = () => {
            const api= params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};
    
            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });
    
            return alert(JSON.stringify(thisRow, null, 4));
          };
    
          return (
          <Button  
          variant="contained"
          color="primary"
          startIcon={<CheckBoxIcon />}
         // onClick={onClick}
        ><Link to={`/attend/30534`}  style={{ color:"white", textDecoration:"none",
        "&:hover": {
          color:"black"
    }}} target="_blank">
          check
          </Link>
        </Button>);
        }
    },
    {
        field: "grades",
        headerName: "Grades",
        width: 150,
        // disableClickEventBubbling: true,
        renderCell: (params) => {
            function handleSubmit(e) {
                e.preventDefault();
                console.log('Отправлена форма.');
              }
            
          return  (
            <Button  
            variant="contained"
            color="primary"
            startIcon={<AssessmentIcon />}
            // onClick={handleSubmit}
          >
               <Link to={`/grades/30534`}  style={{ color:"white", textDecoration:"none",
            "&:hover": {
              color:"black"
        }}} target="_blank">
            check
            </Link>
          </Button>);
        }
    }
    ];


const rows = [
    { id: 30534, lastName: 'Abdray', firstName: 'Nuraiym'},
    { id: 30523, lastName: 'Aitkazy', firstName: 'Ibragim' },
    { id: 30535, lastName: 'Arystanova', firstName: 'Akniyet' },
    { id: 30538, lastName: 'Beisembekov', firstName: 'Zhandiar' },
    { id: 30522, lastName: 'Bidakhmetov', firstName: 'Dias' },
    { id: 30521, lastName: 'Birlik', firstName: 'Arman' },
    { id: 30520, lastName: 'Ali', firstName: 'Alibi'},
    { id: 30530, lastName: 'Ashrapi', firstName: 'Yermakhan' },
    { id: 30539, lastName: 'Zhalelov', firstName: 'Miras' },
    // { id: 30534, lastName: 'Abdray', firstName: 'Nuraiym' },
    // { id: 30523, lastName: 'Aitkazy', firstName: 'Ibragim' },
    // { id: 30535, lastName: 'Arystanova', firstName: 'Akniyet' },
    // { id: 30538, lastName: 'Beisembekov', firstName: 'Zhandiar' },
    // { id: 30522, lastName: 'Bidakhmetov', firstName: 'Dias' },
    // { id: 30521, lastName: 'Birlik', firstName: 'Arman' },
    // { id: 30520, lastName: 'Ali', firstName: 'Alibi'},
    // { id: 30530, lastName: 'Ashrapi', firstName: 'Yermakhan' },
    // { id: 30539, lastName: 'Zhalelov', firstName: 'Miras' },
];






function GroupDetails() {
    const { group } = useParams();
    const classes = useStyles(); 
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container className={classes.paddingTop} spacing={2}>
                <Box sx={{ width: '100%' }} className={classes.padding}>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.flex}>Information about {group}</Typography>
                    </Grid>
                    <div style={{ height: '80vh', width: '860px' ,display:'flex',}} >
                        <DataGrid className={classes.content}
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            //getRowId={(row) => row._id}
                        />
                    </div>
                </Box>
            </Grid>
        </Container>

    );
}

export default GroupDetails;