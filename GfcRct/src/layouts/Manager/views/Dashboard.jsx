import React, { useState, useEffect } from 'react';
import StatisticsSummary from '../components/StatisticsSummary';
import StatisticsCharts from '../components/StatisticsCharts';
import QuickAdd from '../components/QuickAdd';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../../contexts/ContextProvider';
import axiosClient from '../../../api/axios';
import ManagerValidationSkeleton from './core/ManagerValidation_skeleton';

function Dashboard() {
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
                if (data.role !== 'manager') {
                    navigate('../../');
                }
                setValidatingUser(false);
            })
            .catch(() => {
                setValidatingUser(false);
            });
    }, [navigate, setCurrentUser]);

    if (validatingUser) {
        return <ManagerValidationSkeleton />;
    }

    return (
        <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 py-20 px-16'>
            <StatisticsSummary />
            <StatisticsCharts />
            <QuickAdd />
        </div>
    );

}
export default Dashboard;


// const { currentUser } = useStateContext();
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Check if the user's role has been loaded
//         if (currentUser.user_role === 'manager') {
//             setIsLoading(false);
//         }
//     }, [currentUser.role]);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (currentUser.user_role === 'manager') {

//     } else {
//         return <Navigate to='../../home' />;
//     }
// }