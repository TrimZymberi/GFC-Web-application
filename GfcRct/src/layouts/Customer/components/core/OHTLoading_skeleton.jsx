import React from 'react'

export default function OHTLoading_skeleton() {
    return (
        <div className="relative overflow-x-auto sm:rounded-lg">
            <div className='grid gap-2 bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-40'>
                <div className='m-10 grid sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                    <div className="bg-white rounded-md shadow-xl backdrop-filter p-5 backdrop-blur-lg bg-opacity-95">

                        <div className="orders-detail animate-pulse">
                            <div className="grid gap-5 grid-cols-1">
                                <div className="grid grid-cols-2 justify-between sm:mt-3">
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                                        <p className="text-l font-bold text-gray-700"><div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-20"></div></p>
                                        <p className="text-l font-bold text-gray-700"><div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-40"></div></p>
                                        <p className="text-l font-bold text-gray-700"><div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-20"></div></p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 sm:mt-3">
                                        <p className="text-xs font-bold text-gray-500"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div></p>
                                        <p className="text-xs font-bold text-gray-500"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div></p>
                                        <p className="text-xs font-bold text-gray-500"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div></p>
                                    </div>
                                </div>
                                <div className="flex justify-start sm:justify-end items-center sm:items-end">
                                    <button
                                        onClick={() => openModal(order.id)}
                                        type="button"
                                        className="focus:outline-none h-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        View Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}
