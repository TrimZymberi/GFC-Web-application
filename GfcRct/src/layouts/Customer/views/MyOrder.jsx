import React from 'react'
import '../styles/my-order-style.css'

import FoodIcon from '../images/vakti1.png'
import DeleteIcon from '../images/X-f.svg'
import OrdersIcon from '../images/NoteBlank-r.svg'
import DeliveredIcon from '../images/delivered.png'
import CancelledIcon from '../images/cancelled.png'
import PendingIcon from '../images/pending.png'

export default function MyOrder() {
    return (
        <div className="parent">
            <title>GFC | My Orders</title>
            <div className="order-my-list">
                <div className="header-tb">
                    <div className='orders-detail'>
                        <div className='orders-detail-btn'>
                            <div>
                                <div className='orders-header'>
                                    <p>Orders</p>
                                    <p>Date of Placement</p>
                                    <p>Amount</p>
                                </div>

                                <div className='orders-info'>
                                    <p>#12</p>
                                    <p>April 4th, 2023</p>
                                    <p>55.97€</p>
                                </div>
                            </div>
                            <button className="bt-all-invoices">View Invoices</button>
                        </div>
                    </div>
                </div>

                <div className="order-my-tb">
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
                            <p className="order-my-status-delivered"> <img className="img-delivered"
                                    src={DeliveredIcon} alt="icon" />
                                    Cancelled</p>                            </td>
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
