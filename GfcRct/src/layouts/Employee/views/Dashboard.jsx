import React, { useEffect, useState } from 'react'
import axiosClient from '../../../api/axios';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../../contexts/ContextProvider';
import ManageOrderSkeleton from './core/MOValidation_skeleton';

export default function Dashboard() {
    const { setCurrentUser, userToken } = useStateContext();
    const [validatingUser, setValidatingUser] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userToken) {
            navigate('../../');
            return;
        }
        
        axiosClient
            .get('/me')
            .then(({ data }) => {
                setCurrentUser(data);
                if (data.role === 'manager') {
                    navigate('../../management')
                } else if (data.role === 'customer') {
                    navigate('../../app')
                } else if (data.role === 'driver') {
                    navigate('../../workdrive')
                }
                setValidatingUser(false);
            })
            .catch(() => {
                setValidatingUser(false);
            });
    }, [navigate, setCurrentUser]);

    if (validatingUser) {
            return <ManageOrderSkeleton />;
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 py-14 px-14 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
            <h1 className='text-gray-800 text-xl font-bold'>Dashboard</h1>
        </div>
    )
}
