import React, { useContext } from "react";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Context } from "/home/salman/ПРОЕКТЫ/proect-chata/src/index.js";
import firebase from 'firebase';


const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style ={{width:400, background: 'lightgray'}}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помоью Google</Button>
                    </Box>
                </Grid>
            </Grid> 
        </Container>
    );
};

export default Login;