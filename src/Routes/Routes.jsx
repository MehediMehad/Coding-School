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
import Details from "../Pages/Dashboard/HR/Details/Details";
import Progress from "../Pages/Dashboard/HR/Progress/Progress";
import AllEmployee from "../Pages/Dashboard/Admin/AllEmployee/AllEmployee";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminContact from "../Pages/Dashboard/Admin/AdminContact/AdminContact";

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
            {
                path:'/contactUs',
                element: <ContactUs></ContactUs>
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
                element:<PrivateRoute><WorkSheet></WorkSheet></PrivateRoute>,
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
            {
                path:'details/:slug',
                element:<Details></Details>,
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>,
            },
            {
                path:'progress',
                element:<Progress></Progress>
            },
            // Admin
            {
                path:'all-employee-list',
                element:<AllEmployee></AllEmployee>
            },
            {
                path:'adminContact',
                element:<AdminContact></AdminContact>
            },

        ]
    }

]);