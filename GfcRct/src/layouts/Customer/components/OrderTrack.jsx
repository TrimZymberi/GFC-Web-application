import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import OrderData from '../data/OrderData';
import FoodIcon from '../../Universal/images/vakti1.png';

function OrderTrack() {
    useEffect(() => {
        const handleClick = () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButtonText: 'btn btn-success',
                    cancelButtonText: 'btn btn-danger',
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                    closeButton: 'btn btn-secondary',
                },
                buttonsStyling: true,
            });

            swalWithBootstrapButtons
                .fire({
                    title: 'Edit',
                    text: 'What is that you want to edit?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Add a comment!',
                    cancelButtonText: 'I want to, cancel!',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    reverseButtons: true,
                    showCloseButton: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons
                            .fire({
                                title: 'Add Comment',
                                html: '<input id="comment" class="swal2-input" placeholder="Enter your comment" type="text">',
                                icon: 'info',
                                showCancelButton: true,
                                confirmButtonText: 'Submit',
                                cancelButtonText: 'Cancel',
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                reverseButtons: true,
                                preConfirm: () => {
                                    const commentInput = Swal.getPopup().querySelector('#comment').value;
                                    if (!commentInput) {
                                        Swal.showValidationMessage('Please enter a comment');
                                    }
                                    return { comment: commentInput };
                                },
                            })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    const comment = result.value.comment;
                                    // TODO: Backend for using the comment
                                    swalWithBootstrapButtons.fire('Comment Added!', `Your comment "${comment}" has been added.`, 'success');
                                } else {
                                    // TODO: Backend for going back
                                    swalWithBootstrapButtons.fire('Go Back', 'You have chosen to go back.', 'info');
                                }
                            });
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons
                            .fire({
                                title: 'Cancel Order',
                                text: 'Are you sure you want to cancel the order?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Yes',
                                cancelButtonText: 'No',
                                confirmButtonColor: '#d33',
                                cancelButtonColor: '#3085d6',
                                reverseButtons: true,
                            })
                            .then((result) => {
                                if (result.isConfirmed) {
                                    // TODO: Backend for canceling the order
                                    swalWithBootstrapButtons.fire('Order Canceled!', 'Your order has been canceled.', 'success');
                                }
                            });
                    }
                });
        };

        const buttonElement = document.getElementById('myButton');
        buttonElement.addEventListener('click', handleClick);

        return () => {
            buttonElement.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className='bg-white backdrop-filter backdrop-blur-lg bg-opacity-20'>
            {
                OrderData.map(order => (
                    <div key={order.id} className='parent'>
                        <div className="flex flex-wrap justify-center gap-10 py-14 px-14">
                            <h1 className='text-3xl font-bold'>My Order Invoice #{order.id}</h1>
                            <div className="bg-white rounded-md shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-95">
                                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-4 gap-y-4 px-4 py-4  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                                    <div className='p-header'>
                                        <h2 className="font-bold tracking-tight text-gray-900 sm:text-4xl">{order.header}</h2>
                                        <p className="text-xs text-gray-500 sm:text-xl">{order.description}</p>
                                        <dl className="mt-2 grid grid-cols-1 sm:grid-cols-1 sm:mt-3">
                                            <p className="text-xs font-bold text-gray-900 dark:text-white sm:text-2xl">EUR {order.price}</p>
                                        </dl>
                                        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:text-1xl">
                                            <div className="border-t border-gray-200 pt-4">
                                                <h2 className="text-s font-semibold text-gray-900 mt-2 sm:text-2xl">Delivery Address</h2>
                                                <p className='text-xs text-gray-700 mt-1 sm:text-xl'>{order.delivery_address}</p>
                                                <h2 className="text-l font-semibold text-gray-900 mt-2 sm:text-2xl">Delivery Updates</h2>
                                                <h3 className='text-xs text-gray-700 mt-1 sm:text-xl'>{order.delivery_driver}</h3>
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:border-t sm:border-gray-200 pt-4">
                                                <div className='flex justify-center'>
                                                    <div className='rounded-md flex bg-transparent border-2 border-gray-400 items-center justify-center text-center rounded-10 w-20 h-10 sm:w-25 sm:h-10 hover:cursor-pointer active:scale-101'>
                                                        <button id="myButton" className='font-bold text-xl sm:w-50'>Edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className="grid grid-cols-1 w-100 grid-rows-1 sm:gap-6 lg:gap-8">
                                            <div className='flex justify-center'>
                                                <img
                                                    src={FoodIcon}
                                                    alt="Walnut card tray with white powder  coated steel divider and 3 punchout holes."
                                                    className="scale-50 bg-gray-100 sm:scale-75 rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reference">
                                    <p>Order is pending</p>
                                </div>
                                <div className="progress-box">
                                    <div className="progress-bar">
                                        <div className={`progress-bar-${order.status}`}></div>
                                    </div>
                                </div>
                                <div className="progress-text">
                                    <div className={`progress-item-${order.status}`}>
                                        <p className={`progress-item-${order.status}`}>Cancelled</p>
                                        <p className={`progress-item-${order.status}`}>Pending</p>
                                        <p className={`progress-item-${order.status}`}>Delivering</p>
                                        <p className={`progress-item-${order.status}`}>Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default OrderTrack