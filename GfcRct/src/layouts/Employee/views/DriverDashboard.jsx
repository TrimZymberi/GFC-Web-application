import React from "react";
import driver from "../image/driver.png";
import SideBar from "../components/SideBar";
import DashboardView from "../components/DashboardView";
import DashboardMain from "../components/DashboardMain";

export default function DriverDashboard() {
    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh] ">
                <SideBar />
            </div>
            <div className="basis-[88%] border">
                <DashboardView />

                <DashboardMain />
            </div>

            <div></div>
        </div>
    );
}
