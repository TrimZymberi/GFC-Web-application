import React, { useState } from 'react';
import FoodIcon from '../../Universal/images/vakti1.png';

export default function ManageOrderTable() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const openModal = (orderId) => {
        setModalVisible(true);
        setSelectedOrderId(orderId);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const orders = [
        {
            id: 1,
            user: {
                name: "Arlind",
                email: "arlindmaliqi28@gmail.com",
                address: "635 Gavran Rr.Zymberi, Gjilan 6000, KOS",
                city: "Prishtine",
            },
            products: [
                {
                    id: 1,
                    name: "Cheeseburger",
                    description: "1x Cheeseburger",
                    quantity: 2,
                    price: 3.99,
                    estTime: "5 mins",
                },
                {
                    id: 2,
                    name: "Vakti I",
                    description: "12x Spicy Wings, 4x Crispy Strings, 2x Large Fries, 2x Coca Cola",
                    quantity: 1,
                    price: 24.99,
                    estTime: "15 mins",
                },
            ],
        },
        {
            id: 2,
            user: {
                name: "John",
                email: "john@example.com",
                address: "123 Main St",
                city: "New York",
            },
            products: [
                {
                    id: 3,
                    name: "Pizza",
                    description: "1x Margherita Pizza",
                    quantity: 1,
                    price: 12.99,
                    estTime: "30 mins",
                },
            ],
        },
        {
            id: 3,
            user: {
                name: "Jane",
                email: "jane@example.com",
                address: "456 Elm St",
                city: "Los Angeles",
            },
            products: [
                {
                    id: 4,
                    name: "Salad",
                    description: "1x Caesar Salad",
                    quantity: 1,
                    price: 8.99,
                    estTime: "15 mins",
                },
                {
                    id: 5,
                    name: "Drink",
                    description: "1x Coca Cola",
                    quantity: 1,
                    price: 2.99,
                    estTime: "5 mins",
                },
            ],
        },
    ];

    const calculateTotal = (products) => {
        return products.reduce(
            (total, product) => total + product.quantity * product.price,
            0
        );
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div
                className="bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-95"
            >
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs border-gray-150 uppercase bg-white">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Order
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ordered by
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
                        {orders.map((order) => (
                            <tr key={order.id} className="bg-white">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td scope="row" className="flex items-center justify-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class="text-center">
                                        <button
                                            onClick={() => openModal(order.id)}
                                            className="text-red-500 hover:underline px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                                            type="button"
                                            data-drawer-target="drawer-swipe"
                                            data-drawer-show="drawer-swipe"
                                            data-drawer-placement="bottom"
                                            data-drawer-edge="true"
                                            data-drawer-edge-offset="bottom-[60px]"
                                            aria-controls="drawer-swipe"
                                        >
                                            View Order
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-start">
                                    <div className="pl-3">
                                        <div className="text-base text-gray-800 font-semibold">{order.user.name}</div>
                                        <div className="font-normal text-gray-500">{order.user.email}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex justify-center'>
                                        <select name="status" className='rounded-xl h-8 text-xs text-gray-700 border-none bg-gray-100 focus:outline-none'>
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
                                    {order.user.address}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium bg-gray-50 p-3 rounded-md hover:bg-gray-200 text-gray-500 dark:text-red-500">Finish</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modalVisible && (
                <div
                    id="drawer-swipe"
                    className="fixed z-40 w-full overflow-y-auto max-h-screen bg-white border-t-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 top-90 left-0 right-0"
                    tabIndex="-1"
                    aria-labelledby="drawer-swipe-label"
                >
                    <div className="flex justify-between px-4 py-3">
                        <h5
                            onClick={closeModal}
                            className="text-sm font-semibold text-gray-600 cursor-pointer dark:text-gray-400"
                        >
                            Close
                        </h5>
                        <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            Order Details
                        </h5>
                        <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            &nbsp;
                        </h5>
                    </div>
                    {orders.map((order) => {
                        if (order.id === selectedOrderId) {
                            return (
                                <div key={order.id} className="px-4 py-6 grid gap-2 sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {order.products.map((product) => (
                                        <div key={product.id} className='grid grid-cols-2'>
                                            <div className="grid grid-cols-1 border-y-2 gap-2 p-4 border-l-2 items-center">
                                                <img src={FoodIcon} alt="food icon" className="w-24 h-24 mx-auto rounded-md" />
                                                <h5 className="text-xl font-bold text-gray-800 dark:text-white text-center">
                                                    {product.name}
                                                </h5>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                                    {product.description}
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 gap-6 border-y-2 border-r-2 p-4">
                                                <div className='grid grid-cols-2 items-center'>
                                                    <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                        Quantity
                                                    </h5>
                                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                        {product.quantity}
                                                    </p>
                                                </div>
                                                <div className='grid grid-cols-2 items-center'>
                                                    <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                        Price
                                                    </h5>
                                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                        {product.price}EUR
                                                    </p>
                                                </div>
                                                <div className='grid grid-cols-2 items-center'>
                                                    <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                        est.Time
                                                    </h5>
                                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                        {product.estTime}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='grid grid-cols-2'>
                                        <div className="grid grid-cols-1 border-y-2 gap-2 p-4 border-l-2 items-center">
                                            <h5 className="text-xl font-bold text-gray-800 dark:text-white text-center">
                                                Total of order
                                            </h5>
                                            <h3 className='font-bold text-gray-700'>Comment / Request</h3>
                                            <h5 className='text-gray-500 bg-gray-100 border-gray-200 p-1 border-2 '>This is a typical request or a comment from a customer</h5>
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 border-y-2 border-r-2 p-4">
                                            <div className='grid grid-cols-2 items-center'>
                                                <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                    Order ID
                                                </h5>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                    #{order.id}
                                                </p>
                                            </div>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                    City
                                                </h5>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                    {order.user.city}
                                                </p>
                                            </div>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                    Address
                                                </h5>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                    {order.user.address}
                                                </p>
                                            </div>
                                            <div className='grid grid-cols-2 items-center'>
                                                <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                    Total
                                                </h5>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                    {calculateTotal(order.products).toFixed(2)}EUR
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    );
                                }
                                return null;
                            })}
                </div>
            )}
        </div >
    );
}
