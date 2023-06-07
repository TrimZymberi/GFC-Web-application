import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import axiosClient from '../../../api/axios';
import Swal from 'sweetalert2';
import MOTableSkeleton from './core/MOTable_skeleton';
import MOLoadingModal from './core/MOLoadingModal_skeleton';
import Pagination from './core/MOTable_pagination';

export default function DriverOrder() {
    const { currentUser } = useStateContext();

    const [modalVisible, setModalVisible] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [reloadTable, setReloadTable] = useState(false);

    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [selectedOrderItems, setSelectedOrderItems] = useState([]);

    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedDriverId, setSelectedDriverId] = useState('');
    const [drivers, setDrivers] = useState([]);


    // ^ FUNCTIONS

  

 
    // const closeModal = () => {
    //     setLoadingModal(false);
    //     setModalVisible(false);
    // };

   

    // const convertImageURL = (items) => {
    //     let imageURL = null;
    //     const productQuantities = {};

    //     for (let i = 0; i < items.order_items.length; i++) {
    //         const item = items.order_items[i];
    //         const productId = item.product_id;
    //         const imageURL_raw = item.product.preview;
    //         if (productQuantities.hasOwnProperty(productId)) {
    //             productQuantities[productId] = imageURL_raw;
    //         } else {
    //             productQuantities[productId] = imageURL_raw;
    //         }
    //         imageURL = imageURL_raw.replace('../GfcRct', '');
    //         console.log(imageURL)
    //     }

    //     return imageURL;
    // };

    // const handleStatusChange = (orderId) => {

    //     const employeeId = currentUser.id;
    //     console.log(currentUser.id)
    //     axiosClient
    //         .put(`/orders/${orderId}`, { status: selectedStatus, driver_id: selectedDriverId, employee_id: employeeId })
    //         .then((res) => {
    //             Swal.fire({
    //                 icon: "success",
    //                 text: res.data.message,
    //             });
    //             setReloadTable(true);
    //         })
    //         .catch((error) => {
    //             console.error("Failed to update order status", error);
    //         });
    // };

    // const getStatusOptions = (status) => {
    //     const allStatuses = ["pending", "delivering", "delivered", "canceled"];
    //     const filteredStatuses = allStatuses.filter((s) => s !== status);
    //     return filteredStatuses.map((s) => (
    //         <option key={s} value={s} selected={s === status} disabled={s === status}>
    //             {s.charAt(0).toUpperCase() + s.slice(1)}
    //         </option>
    //     ));
    // };

    // const getStatusTableColor = (status) => {
    //     switch (status) {
    //         case 'canceled':
    //             return (
    //                 <div className='bg-red-400 h-20' >
    //                 </div>
    //             );
    //         case 'delivering':
    //             return (
    //                 <div className='bg-green-200 h-20' >
    //                 </div>
    //             );
    //         case 'delivered':
    //             return (
    //                 <div className='bg-green-500 h-20' >
    //                 </div>
    //             );
    //         case 'pending':
    //             return (
    //                 <div className='bg-yellow-200 h-20' >
    //                 </div>
    //             );
    //         default:
    //             return null;
    //     }
    // };

    // * LOADERS

    
        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div
                    className="bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-95"
                >
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border-gray-150 uppercase bg-white">
                            <tr className='bg-white'>
                                <th scope="col" className="p-4">

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
                                <th scope="col" className="px-6 py-3">
                                    City & Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                    <tr className="bg-white">
                                        <input type="hidden" name="employee_id"  />
                                        <td>
                                            dd
                                        </td>
                                        <td scope="row" className="flex items-center justify-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div class="text-center">
                                                <button
                                                   
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
                                                <div className="text-base text-gray-800 font-semibold">Syarta</div>
                                                <div className="font-normal text-gray-500">pajaziti</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className='flex justify-center'>
                                                <select
                                                    name="status"
                                                    className="rounded-xl h-8 text-xs text-gray-700 border-none bg-gray-100 focus:outline-none"
                                                   
                                                >
                                                    <option  disabled selected>ss</option>
                                                </select>
                                            </div>
                                        </td>
                                        
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="pl-3">
                                                <div className="text-base text-gray-800 font-semibold">Gjilan</div>
                                                <div className="font-normal text-gray-500">G 6</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                type='submit'
                                                className="font-medium bg-gray-50 p-3 rounded-md hover:bg-gray-200 text-gray-500 dark:text-red-500"
                                            >Finish</button>
                                        </td>
                                    </tr>
                           
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }

    
   

