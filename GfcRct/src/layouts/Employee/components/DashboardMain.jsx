import React from "react";
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import Chart from "./Chart";
import PieComponent from "./PieComponent";

export default function DashboardE() {
    return (
        <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
            <div className="flex items-center justify-between">
                <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
                    Dashboard
                </h1>
                <button className="bg-[#B70404] h-[35px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">
                    Generate Report
                </button>
            </div>
            <div className="grid grid-cols-4 gab-[50px] mt-[25px] pb-[15px]">
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#B70404] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B70404] text-[11px] leading-[17px] font-bold">
                            EARNINGS (MONTHLEY)
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            $40,000
                        </h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />
                </div>
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#B70404] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B70404] text-[11px] leading-[17px] font-bold">
                            EARNINGS (ANNUAL)
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            $240,000
                        </h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />
                </div>
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#B70404] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B70404] text-[11px] leading-[17px] font-bold">
                            TASKS
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            $40,000
                        </h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />
                </div>
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#B70404] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B70404] text-[11px] leading-[17px] font-bold">
                            PENDING REQUEST
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            $40,000
                        </h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />
                </div>
            </div>
            <div className="flex mt-[22px] w-full gap-[30px]">
                <div className="basisi-[70%] bg-white shadow-md cursor-pointer rounded-[4px]">
                    <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                        <h2>Earnings Overview</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer'/>
                    </div>
                    <div>
                    <Chart />
                    </div>
                </div>
                <div className="basisi-[30%] border  bg-white shadow-md cursor-poiter rounded-[4px]">
                    <div className="bg-[#F8F9FC] flex items-center  justify-between py-[15px] px-[20px] border-b-[3px] border-[#EDEDE]">
                        <h2>Reveue Resoureses</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer'/>
                    </div>
                    <div >
                            <PieComponent/>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
