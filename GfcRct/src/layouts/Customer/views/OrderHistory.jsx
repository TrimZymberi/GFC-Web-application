import React from 'react';
import FoodIcon from '../../Universal/images/vakti1.png';
import { Link } from 'react-router-dom';

export default function OrderHistory() {
    const orders = [
        {
          id: 1,
          product: 'Vakti II',
          description: '11x Crispy Strings, 2x L Fries, 1x Pepsi',
          amount: '13.99EUR',
          status: 'cancelled',
          address: '635 Gavran Rr.Zymberi, Gjilan 6000, KOS',
        },
        {
          id: 2,
          product: 'Burger Combo',
          description: '1x Cheeseburger, 1x Fries, 1x Cola',
          amount: '12.99EUR',
          status: 'pending',
          address: '123 Main St, Anytown, USA',
        },
        {
          id: 3,
          product: 'Pizza Party',
          description: '2x Margherita Pizza, 1x Garlic Bread, 1x Soda',
          amount: '24.99EUR',
          status: 'delivering',
          address: '456 Elm St, Anytown, USA',
        },
        {
          id: 4,
          product: 'Sushi Feast',
          description: '10x Sashimi, 6x California Rolls, 2x Miso Soup',
          amount: '39.99EUR',
          status: 'delivered',
          address: '789 Oak St, Anytown, USA',
        },
      ];

    const getStatusText = (status) => {
        switch (status) {
            case 'cancelled':
                return (
                    <div className="flex items-center justify-center bg-red-200 rounded-full px-2 text-red-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-6 mr-1"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Cancelled
                    </div>
                );
            case 'delivering':
                return (
                    <div className="flex items-center justify-center gap-1 bg-lime-200 rounded-full px-2 text-lime-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-6">
                            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                        </svg>
                        Delivering
                    </div>
                );
            case 'delivered':
                return (
                    <div className="flex items-center justify-center bg-green-200 rounded-full px-2 text-green-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-6 mr-1"
                        >
                            <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Delivered
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex items-center justify-center bg-yellow-200 rounded-full px-2 text-yellow-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-6 mr-1"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Pending
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-6 px-4 py-4 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
                <title>GFC | My Orders</title>
                <div className="bg-white rounded-md shadow-xl backdrop-filter p-5 backdrop-blur-lg bg-opacity-95">
                    <div className="orders-detail">
                        <div className="grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2">
                            <div className="grid grid-cols-3 sm:grid-cols-1 sm:mt-3">
                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                    <p className="text-l font-bold text-gray-700">Orders</p>
                                    <p className="text-l font-bold text-gray-700">Date of Placement</p>
                                    <p className="text-l font-bold text-gray-700">Amount</p>
                                </div>

                                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:mt-3">
                                    <p className="text-xs font-bold text-gray-500">#12</p>
                                    <p className="text-xs font-bold text-gray-500">April 4th, 2023</p>
                                    <p className="text-xs font-bold text-gray-500">55.97€</p>
                                </div>
                            </div>
                            <div className="flex justify-start sm:justify-end items-center sm:items-end">
                                <button
                                    type="button"
                                    className="focus:outline-none h-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    View Invoices
                                </button>
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
                                {orders.map((order) => (
                                    <tr key={order.id} className="bg-white">
                                        <th
                                            scope="row"
                                            className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <img className="w-10 h-10 rounded-md" src={FoodIcon} alt="Food image" />
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">{order.product}</div>
                                                <div className="font-normal text-gray-500">{order.description}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4 text-center">{order.amount}</td>
                                        <td className="px-6 py-4">{getStatusText(order.status)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{order.address}</td>
                                        <td className="px-6 py-4">
                                            <Link
                                                to="../orderinvoice"
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                            >
                                                Invoice
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
