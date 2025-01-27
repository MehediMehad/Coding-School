import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";


const DashboardLayouts = () => {
    return (
        <div className=" min-h-screen md:flex">
            {/* Sidebar */}
            <Sidebar></Sidebar>
            {/* Outlet */}
            <div className="flex-1 md:ml-64 bg-white">
                <div className="p-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayouts;