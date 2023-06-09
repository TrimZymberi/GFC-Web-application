import React from "react";
import {
    FaTachometerAlt,
    FaRegSun,
    FaChevronRight,
    FaWrench,
    FaStickyNote,
    FaRegChartBar,
    FaRegCalendarAlt,
    FaChevronLeft,
    FaBolt
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="bg-[#F15A59] h-screen px-[20px]">
            <div className="px-[10px] py-[25px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
                <h1 className="text-white text-[17px] leading-[24px] font-extrabold cursor-pointer">
                    Admin panel
                </h1>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
                <FaTachometerAlt color="white" />
                <p className="text-white text-[14px] leading-[24px] font-bold">
                    {" "}
                    <Link to='/workdrive/dashboard'>
                    Dashboard
                    </Link>
                </p>
            </div>
            <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
                <p className="text-white/[0.4] text-[10px] leading-[16px] font-extrabold">
                    INTERFACE
                </p>
                <div className="flex items-center justify-between gab-[10px] py-[15px] cursor-pointer">
                    <div className="flex items-center gap-[10px] ">
                        <FaRegSun color="white" />
                        <p className="text-[14px] leading-[20px] font-normal text-white">
                          <Link to='doneoreder'> Done Orders</Link> 
                        </p>
                    </div>
                    <FaChevronRight color="white" />
                </div>

                <div className="flex items-center justify-between gab-[10px] py-[15px] cursor-pointer">
                    <div className="flex items-center gap-[10px]">
                        <FaRegChartBar color="white" />
                        <p className="text-[14px] leading-[20px] font-normal text-white">
                          <Link to='driverorder'>Opcomming orders</Link>  
                        </p>
                    </div>
                    <FaChevronRight color="white" />
                </div>
            </div>

    
            </div>
    );
}
