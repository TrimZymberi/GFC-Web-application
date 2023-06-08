import React, { useEffect, useState } from 'react';
import ManageOrderTable from '../components/ManageOrderTable';
import ManageOrderSkeleton from './core/MOValidation_skeleton';
import axiosClient from '../../../api/axios';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

export default function ManageOrder() {
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
                }else if (data.role === 'customer') {
                    navigate('../../app')
                }else if (data.role === 'driver') {
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
        // {error.other && (
        //     <div
        //         id="alert-additional-content-2"
        //         class="grid justify-top items-top z-99 p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        //         role="alert"
        //     >
        //         <div class="flex items-center">
        //             <svg
        //                 aria-hidden="true"
        //                 class="w-5 h-5 mr-2"
        //                 fill="currentColor"
        //                 viewBox="0 0 20 20"
        //                 xmlns="http://www.w3.org/2000/svg"
        //             >
        //                 <path
        //                     fill-rule="evenodd"
        //                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        //                     clip-rule="evenodd"
        //                 ></path>
        //             </svg>
        //             <span class="sr-only">Info</span>
        //             <h3 class="text-lg font-medium">This is a danger alert</h3>
        //         </div>
        //         <div class="mt-2 mb-4 text-sm">
        //             <p dangerouslySetInnerHTML={{ __html: error.other }}></p>
        //         </div>
        //         <div class="flex">
        //             <button
        //                 type="button"
        //                 class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
        //                 data-dismiss-target="#alert-additional-content-2"
        //                 aria-label="Close"
        //             >
        //                 Dismiss
        //             </button>
        //         </div>
        //     </div>
        // )}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <title>GFC | Manage Order</title>
            <ManageOrderTable />
        </div>
    )
}
