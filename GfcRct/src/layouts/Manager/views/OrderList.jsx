import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderTable from '../components/OrderTable'
import { useStateContext } from '../../../contexts/ContextProvider';
import axiosClient from '../../../api/axios';
import ManagerValidationSkeleton from './core/ManagerValidation_skeleton';

export default function OrderList() {
    const { setCurrentUser , userToken } = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (!userToken) {
            navigate('../../');
            return;
        }

      const timer = setTimeout(() => {
        setValidatingUser(false);
      }, 6000);
  
      axiosClient
        .get('/me')
        .then(({ data }) => {
          clearTimeout(timer);
          setValidatingUser(false);
          setCurrentUser(data);
          if (data.role !== 'manager') {
            navigate('../');
          }
        })
        .catch(() => {
          clearTimeout(timer);
          setValidatingUser(false);
        });
  
      return () => {
        clearTimeout(timer);
      };
    }, [navigate, setCurrentUser]);
  
    if (validatingUser) {
      return <ManagerValidationSkeleton />;
    }

    return (
        <div id="parent">
            <div className="flex justify-between p-1 bg-white">
                <div className="p-2">
                    <Link to="../orderregister" className='text-black font-bold gap-1 rounded-3xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:scale-110">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Link>
                </div>
                <div className="bg-gray w-100">
                    <button className="flex gap-2 m-1 bg-gray-200 rounded-xl" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 p-1 m-1 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input className='border-none rounded-xl focus:outline-none bg-gray-200 py-1' type="search" name="search" placeholder="Search Order" />
                    </button>
                </div>
            </div>
            <OrderTable />
        </div>
    )
}