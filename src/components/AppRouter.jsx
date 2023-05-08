import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import Navbar from "./Navbar";
import {HOME_ROUTE, LOGIN_ROUTE, TEST_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = true
    return (
        <BrowserRouter >
            <Navbar/>
            {isAuth
                ?
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    <Route
                        path="*"
                        element={<Navigate to={HOME_ROUTE} replace />}
                        key={HOME_ROUTE}
                    />
                </Routes>
                :
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />)}
                    <Route
                        path="*"
                        element={<Navigate to={LOGIN_ROUTE} replace />}
                        key={LOGIN_ROUTE}
                    />
                </Routes>}
        </BrowserRouter>
    );
};

export default AppRouter;