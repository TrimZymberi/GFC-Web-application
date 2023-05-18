import React from 'react'
import FoodIcon from '../../Universal/images/vakti1.png';
import { Link } from 'react-router-dom';

export default function OrderHistory() {
    return (
            <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-20'>

                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-6 px-4 py-4 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
                    <title>GFC | My Orders</title>
                    <div className="bg-white rounded-md shadow-xl backdrop-filter p-5 backdrop-blur-lg bg-opacity-95">
                        <div className='orders-detail'>
                            <div className='grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2'>
                                <div className='grid grid-cols-3 sm:grid-cols-1 sm:mt-3'>
                                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
                                        <p className='text-l font-bold text-gray-700'>Orders</p>
                                        <p className='text-l font-bold text-gray-700'>Date of Placement</p>
                                        <p className='text-l font-bold text-gray-700'>Amount</p>
                                    </div>
                                    
                                    <div className='mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:mt-3'>
                                        <p className='text-xs font-bold text-gray-500'>#12</p>
                                        <p className='text-xs font-bold text-gray-500'>April 4th, 2023</p>
                                        <p className='text-xs font-bold text-gray-500'>55.97€</p>
                                    </div>
                                </div>
                                <div className='flex justify-start sm:justify-end items-center sm:items-end'>
                                    <button type="button" className="focus:outline-none h-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">View Invoices</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-95">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-md" src={FoodIcon} alt="Food image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">Vakti II</div>
                                            <div className="font-normal text-gray-500">11x Crispy Strings, 2x L Fries, 1x Pepsi</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        13.99EUR
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center bg-red-200 rounded-full px-2 text-red-700">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-700 mr-2"></div> Cancelled
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        635 Gavran Rr.Zymberi, Gjilan 6000, KOS
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to="../orderinvoice" className="font-medium text-red-600 dark:text-red-500 hover:underline">Invoice</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
