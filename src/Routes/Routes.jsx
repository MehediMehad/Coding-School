import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayouts from "../Layout/DashboardLayouts";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
        ]
    },
    {path: '/login', element:<Login></Login>},
    { path: '/signUp', element: <SignUp /> },

    // Dashboard
    {
        path: '/dashboard',
        element: <DashboardLayouts></DashboardLayouts>,
        children:[

            // Employee Only
            {
                path:'work-sheet',
                element:<WorkSheet></WorkSheet>,
            },
            {
                path:'payment-history',
                element:<PaymentHistory></PaymentHistory>
            },

        ]
    }

]);