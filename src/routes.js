import {HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE, SECTION_A_ROUTE, TEST_ROUTE} from "./utils/consts";
import Login from "./components/pages/Login";
import TestPage from "./components/pages/TestPage";
import HomePage from "./components/pages/HomePage";
import SectionA from "./components/pages/section/SectionA";
import LearnPage from "./components/pages/LearnPage/LearnPage";

export const publicRoutes = [
    {path: TEST_ROUTE, element: <TestPage/>},
    {path: HOME_ROUTE, element: <HomePage/>},
    {path: LOGIN_ROUTE, element: <Login/>},
    {path: SECTION_A_ROUTE, element: <SectionA/>},
    {path: LEARN_ROUTE, element: <LearnPage/>},
]

export const privateRoutes = [

]
