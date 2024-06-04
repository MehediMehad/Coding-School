import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayouts from "../Layout/DashboardLayouts";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import EmployeeList from "../Pages/Dashboard/HR/EmployeeList/EmployeeList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
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
            // HR 
            {
                path:'employee-list',
                element:<EmployeeList></EmployeeList>
            },

        ]
    }

]);