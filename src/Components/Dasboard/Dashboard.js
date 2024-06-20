import React from "react";
// import "../Dasboard/Style.css"
import { Outlet, Route, Routes } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
import Home from "../Dasboard/Pages/Home";
import Users from "./Pages/Users";
import Plans from "./Pages/Plans";

// export default function Dashboard() {
export default function Dashboard() {
    return(
        <>
            <div className="demo_note">
                <p>
                    <span>Note:</span> Explore all features, but be aware that certain functionalities are disabled in demo mode.
                </p>
            </div>
            <div className="bh_dashboard_wrapper">   
                <div className="bh_sidebar_wrapper"> 
                    <Leftsidebar />
                </div>
                <div className="bh_home_wrapper">
                    <Outlet />
                </div>
                {/* <Home /> */}
                {/* <Home /> */}
            </div>
       </>
    )
}
 function maincontent() {
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/plans" element={<Plans />} />
    </Routes>
}