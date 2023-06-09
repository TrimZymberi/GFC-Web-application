import React from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import {MdChevronRight} from 'react-icons/md'
import { Link } from "react-router-dom";

export default function DashboardView() {
    const{currentUser, }=useStateContext();
  return (
    <div className='flex items-center justify-between bg-[#F9F5F6]  h-[70px] shadow-lg px-[25px]'>
        
            <div className='flex items-center gap-[15px] relative'>
                <h2>Driver Order</h2>
                <p>{currentUser.name}</p>
                <div className='ml-[1120px]'>
                <button className="rounded-xl bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] px-3 py-1 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FF416C]/50">
                <Link to='doneoreder'> Done Orders<MdChevronRight className="text-lg" /></Link>
                </button>
                
                </div>
            </div>
        </div>

  );
}
