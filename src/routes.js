import {HOME_ROUTE, LOGIN_ROUTE, TEST_ROUTE} from "./utils/consts";
import Login from "./components/pages/Login";
import TestPage from "./components/pages/TestPage";
import HomePage from "./components/pages/HomePage";
import Sections from "./components/pages/section/Sections";
import LearnPage from "./components/pages/LearnPage/LearnPage";

export const publicRoutes = [
    {path: TEST_ROUTE, element: <TestPage/>},
    {path: HOME_ROUTE, element: <HomePage/>},
    {path: LOGIN_ROUTE, element: <Login/>},
    {path: '/section/:type', element: <Sections/>},
    {path: '/learn/:type', element: <LearnPage/>},
]

export const privateRoutes = [

]
