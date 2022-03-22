import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import { privateRoutes, publickRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";


const AppRoute = () => {
    const  user = false;
    return user ?
     (
        <Routes>
            {privateRoutes.map(({path, Component}, index) =>
                <Route key={index} path = {path} element ={<Component />} exact = {true}/>
            )}
            <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
        </Routes>
    ) 
    : 
    (
        <Routes>
            {publickRoutes.map(({path, Component}, index) =>
                <Route key={index} path = {path} element ={<Component />} exact = {true}/>
            )}
            <Route path="*" element={<Navigate replace={true} to={LOGIN_ROUTE}/>} />
        </Routes>
    )
};

export default AppRoute;    