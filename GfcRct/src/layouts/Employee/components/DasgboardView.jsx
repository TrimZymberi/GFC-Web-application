import React from 'react';
import {FaSearch,FaRegBell,FaEnvelope} from 'react-icons/fa'
import { useStateContext } from '../../../contexts/ContextProvider';

export default function DashboardView() {
    const{currentUser, }=useStateContext();
  return (
    <div className='flex items-center justify-between bg-[#F9F5F6]  h-[70px] shadow-lg px-[25px]'>
        <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#F8F9FC] h-[40px] border-none outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for ...' />
            <div className='bg-[#CD1818] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                <FaSearch color="white"/>
            </div>
        </div>

        <div className='flex items-center gap-[15px] relative'>
            <div className='flex items-center gap-[25px] border-r-[3px] pr-[25px]'>
                <FaRegBell/>
                <FaEnvelope/>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <p>{currentUser.name}</p>
            </div>
        </div>
    </div>
  );
}
