import React from 'react';
import driver from '../image/driver.png'
import SideBar from '../components/SideBar';


export default function DriverDashboard() {
  return (
   <div className='flex'>
    <div className='basis-[12%] h-[100vh] '>
        <SideBar/>
    </div>
   </div>
  );
}
