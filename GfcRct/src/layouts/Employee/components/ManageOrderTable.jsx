import React, { useEffect, useState } from 'react';
import FoodIcon from '../../Universal/images/vakti1.png';
import axiosClient from '../../../axios';

export default function ManageOrderTable() {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [drivers, setDrivers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedOrderItems, setSelectedOrderItems] = useState([]);

    useEffect(() => {
        axiosClient.get('/orders')
            .then(response => {
                setOrders(response.data.orders);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch orders', error);
            });
    }, [loading]);


    useEffect(() => {
        axiosClient.get('driverls').then((res) => {
            if (Array.isArray(res.data.drivers)) {
                setDrivers(res.data.drivers);
            } else {
                console.error('Invalid response format');
            }
        }).catch((error) => {
            console.error('Failed to fetch drivers', error);
        });
    }, []);

    const openModal = (orderId) => {
        axiosClient.get(`/orders/${orderId}/items`)
            .then(response => {
                setSelectedOrderItems(response.data.order);
                setSelectedOrderId(orderId);
                setModalVisible(true);
            })
            .catch(error => {
                console.error('Failed to fetch order items', error);
            });
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    if (loading) {
        return (
            <div role="status" className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-95 max-w p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                </div>
            </div>
        )
    }

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
                        {orders && orders.length > 0 ? (
                            orders.map((order) => (
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
                                                <option value="" disabled selected>
                                                    Assign to a driver
                                                </option>
                                                {drivers.map((driver) => (
                                                    <option key={driver.id} value={driver.id}>
                                                        {driver.name}
                                                    </option>
                                                ))}
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7}>No orders found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {modalVisible && (
                <div
                    onClick={() => openModal(orders.id)}
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
                    <div
                        className="px-4 py-6 grid gap-2 sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {
                            selectedOrderItems.order_items.map((item) => (
                                <div key={item.id} className="grid grid-cols-2">
                                    <div className="grid grid-cols-1 border-y-2 gap-2 p-4 border-l-2 items-center">
                                        <img
                                            src={FoodIcon}
                                            alt="food icon"
                                            className="w-24 h-24 mx-auto rounded-md"
                                        />
                                        <h5 className="text-xl font-bold text-gray-800 dark:text-white text-center">
                                            {item.product.name}
                                        </h5>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                            {item.product.description}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 border-y-2 border-r-2 p-4">
                                        <div className="grid grid-cols-2 items-center">
                                            <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                Quantity
                                            </h5>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                {item.quantity}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 items-center">
                                            <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                Price
                                            </h5>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                {item.product.retail_price}EUR
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        {
                            selectedOrderItems.map((item) => (
                                <div key={item.id} className="grid grid-cols-2">
                                    <div className="grid grid-cols-1 border-y-2 gap-2 p-4 border-l-2 items-center">
                                        <h5 className="text-xl font-bold text-gray-800 dark:text-white text-center">
                                            Total of order
                                        </h5>
                                        <h3 className="font-bold text-gray-700">Comment / Request</h3>
                                        <h5 className="text-gray-500 bg-gray-100 border-gray-200 p-1 border-2">
                                            This is a typical order for this restaurant. If you want
                                            something custom or have any specific requests, please let us
                                            know in the comment section.
                                        </h5>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 border-y-2 border-r-2 p-4">
                                        <div className="grid grid-cols-2 items-center">
                                            <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                Order ID
                                            </h5>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                #{item.id}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 items-center">
                                            <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                City
                                            </h5>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                {item.user.city}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 items-center">
                                            <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                Address
                                            </h5>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                {item.user.address}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 items-center">
                                            <h5 className="text-sm font-bold text-gray-800 dark:text-white">
                                                Total
                                            </h5>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                {/* {calculateTotal(item.order_items.product).toFixed(2)}EUR */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            )}

        </div >
    );
}
