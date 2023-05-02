import React from 'react'
import '../styles/order-progress-style.css'
import FoodIcon from '../images/vakti1.png'

import OrderData from '../data/OrderData'

function OrderProgress() {
    return (
        <>
        {
            OrderData.map(order => (
                <div className="order-p-list">
                    <div className="order-p-header">
                        <h1>My Order Invoice #{order.id}</h1>
                    </div>
                    <div className="order-p-tb">
                        <div className='order-p-hh-details'>
                            <div className='order-p-image'>
                                <img src={order.imgpreview}></img>
                                <div className='order-p-h-details'>
                                    <p className="product-p-header">{order.header}</p>
                                    <p className='product-p-price'>EUR <underline>{order.price}€</underline></p>
                                    <p className='product-p-paragraph'>{order.description}</p>
                                </div>
                            </div>
                            <div className='order-p-image'>
                                <div className='order-p-h-details'>
                                    <p className="customer-p-address">Delivery address</p>
                                    <p className='customer-p-details'>{order.delivery_address}</p>
                                </div>
                                <div className='order-p-h-details'>
                                    <p className="customer-p-address">Delivering updates</p>
                                    <p className='customer-p-details'>Gfriedchicken@example.com <br /> (307) 682-8835</p>
                                    <div className='edit-p-centre'>
                                        <div className='box-p-edit-bt'>
                                            <button className='edit-p-bt'>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="reference">
                            <p>{order.status_desc}</p>
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
            ))
        }
        </>
    )
}
export default OrderProgress