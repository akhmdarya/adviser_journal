import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
  Snackbar,
  Avatar,
} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useCallback, useEffect, useState } from "react";
import avatar from "../../components/images/profile.png"
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
  ava: {
    width: "100px",
    height: "100px"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  center:{
    display: "flex",
  
  justifyContent: "center"
  },
  
}));

function Profile() {
  const classes = useStyles();
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: user } = await api.auth.updateProfile(data);

      auth.setUser(user);
      setIsOpen(true);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = useCallback(async () => {
    const { data } = await api.auth.getProfile();
    // {auth.user.firstName} {auth.user.lastName}

    reset({
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }, [reset]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
     <Container maxWidth="lg" className={classes.root}>
        <Item>
      <Grid container spacing={1}>
       
      <Grid item xs={4} className={classes.center}>
        <Grid item xs={4} className={classes.center}>
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            mt={{ width: 240, height: 240 }} className={classes.ava}
          />
        </Grid>
      </Grid>
      <Grid item xs={8} className={classes.center}>
        <Grid item xs={8}>


          <Typography gutterBottom variant="h6">Update profile</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue={auth.user.firstName}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.firstName?.message)}
                      fullWidth={true}
                      label="First name"
                      variant="filled"
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue={auth.user.lastName}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.lastName?.message)}
                      fullWidth={true}
                      label="Last name"
                      variant="filled"
                      helperText={errors.lastName?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isLoading}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
          <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={() => setIsOpen(false)}
            message="Profile updated successfully"
          />
        </Grid>
      </Grid>
      
      </Grid></Item>

     </Container>
  );
}

export default Profile;