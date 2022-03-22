import React from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import '/home/salman/ПРОЕКТЫ/proect-chata/src/App.css'
import {LOGIN_ROUTE} from '/home/salman/ПРОЕКТЫ/proect-chata/src/utils/consts.js'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const user = false;

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                    <Button id = 'mobilButton1' variant={"outlined"}>Выйти</Button>
                    :
                    <NavLink to ={LOGIN_ROUTE}>
                        <Button id = 'mobilButton1' variant={"outlined"}>Логин</Button>
                    </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;