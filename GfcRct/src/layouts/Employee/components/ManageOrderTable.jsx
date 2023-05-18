import React from 'react'
import FoodIcon from '../../Universal/images/vakti1.png';

export default function ManageOrderTable() {
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <title>GFC | My Orders</title>
            <div className="bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-95">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs border-gray-150 uppercase bg-whitebackdrop-filter backdrop-blur-lg bg-opacity-95">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ordered by
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Assign to
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
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-md" src={FoodIcon} alt="Food image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Vakti II</div>
                                    <div className="font-normal text-gray-500">11x Crispy Strings, 2x L Fries, 1x Pepsi</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-start">
                                <div className="pl-3">
                                    <div className="text-base text-gray-800 font-semibold">Arlind</div>
                                    <div className="font-normal text-gray-500">arlindmaliqi28@gmail.com</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                13.99EUR
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex justify-center'>
                                    <select name="status" className='rounded-xl h-8 text-xs text-gray-700 outline-none border-none bg-gray-100'>
                                        <option value="pending" disabled selected>Pending</option>
                                        <option value="delivering" >Delivering</option>
                                        <option value="delivered" >Delivered</option>
                                        <option value="canceled" >Canceled</option>
                                    </select>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex justify-center'>
                                    <select name="status" className='rounded-xl h-8 text-xs text-gray-700 outline-none border-none bg-blue-100'>
                                        <option value="pending" disabled selected>Assign to a driver</option>
                                        <option value="canceled" >Trim</option>
                                        <option value="delivered" >Rion</option>
                                        <option value="delivering" >Florent</option>
                                    </select>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                635 Gavran Rr.Zymberi, Gjilan 6000, KOS
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium bg-gray-50 p-3 rounded-md hover:bg-gray-200 text-gray-500 dark:text-red-500">Finish</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
