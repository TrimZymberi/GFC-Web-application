import React, { useEffect, useState } from 'react';
import ManageOrderSkeleton from './core/MOValidation_skeleton';
import axiosClient from '../../../api/axios';
import { useStateContext } from '../../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import DriverOrder from '../components/DriverOrder';

export default function DriverManageOrder() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   

       
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between p-2 bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-90 dark:bg-gray-800">
                <div className='flex items-center'>
                    <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        className="inline-flex items-center text-gray-500 bg-gray-100 border border-none focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        <span className="sr-only">Options</span>
                        Options
                        <svg
                            className={`w-3 h-3 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                                }`}
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div
                            id="dropdownAction"
                            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownActionButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Cancelled orders
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Finished orders
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Delivering orders
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Pending orders
                                    </a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Finish selected orders
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <label for="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search-orders" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl w-60 h-8 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search for orders" />
                </div>
            </div>
            <DriverOrder />
        </div>
    )
}
