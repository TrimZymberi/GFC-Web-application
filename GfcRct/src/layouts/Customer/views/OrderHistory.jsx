import React from 'react'
import FoodIcon from '../../Universal/images/vakti1.png';

export default function OrderHistory() {
    return (
        <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-20'>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-4 px-4 py-4 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
                <title>GFC | My Orders</title>
                    <div className="bg-white rounded-md shadow-xl backdrop-filter p-5 backdrop-blur-lg bg-opacity-95">
                        <div className='orders-detail'>
                            <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 sm:mt-3'>
                                <div className='mt-2 grid grid-cols-1 sm:grid-cols-1 sm:mt-3'>
                                    <div className='mt-2 grid grid-cols-1 sm:grid-cols-3 sm:mt-3'>
                                        <p className='text-xl font-bold'>Orders</p>
                                        <p className='text-xl font-bold'>Date of Placement</p>
                                        <p className='text-xl font-bold'>Amount</p>
                                    </div>

                                    <div className='mt-2 grid grid-cols-1 sm:grid-cols-3 sm:mt-3'>
                                        <p className='text-l text-gray-700'>#12</p>
                                        <p className='text-l text-gray-700'>April 4th, 2023</p>
                                        <p className='text-l text-gray-700'>55.97€</p>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center sm:items-end'>
                                    <button type="button" class="focus:outline-none h-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">View Invoices</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-95">
                        <table cellSpacing="0">
                            <tr>
                                <th className='table-my-header'>#</th>
                                <th className='table-my-header'>Product</th>
                                <th className='table-my-header'>Amount</th>
                                <th className='table-my-header'>Status</th>
                                <th className='table-my-header'>Address</th>
                                <th className='table-my-header'>Info</th>
                            </tr>
                            <tr>
                                <td className='table-my-cell'>
                                    <img className='product-my-image' src={FoodIcon} alt="" />
                                </td>
                                <td className='table-my-cell'>
                                    <h2 className="product-my-header">Offer Vakti 1</h2>
                                    <p className="product-my-paragraph">11x Spicy Wings, 11x Crispy Strings</p>
                                </td>
                                <td className='table-my-cell'>
                                    <p for="price" className="product-my-price">EUR 22.99€</p>
                                </td>
                                <td className='table-my-cell'>
                                    <p className="order-my-status-delivered">
                                        Cancelled</p>
                                </td>
                                <td className='table-my-cell'>
                                    <p className="order-my-address">Apr 6th, 2023</p>
                                </td>
                                <td className='table-my-cell'>
                                    <a href="#" className='order-my-invoice'>Invoice</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
        </div>
    )
}
