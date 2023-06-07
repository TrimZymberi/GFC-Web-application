import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideBar from './SideBar';

export default function Calendare() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
   
            
    <div className='flex justify-center mt-[50px] items-center mb-[50px]'>
      <Calendar className=' w-[650px] h-[450px]' onChange={onChange} value={value} />
    </div>
    </div>
  );
}