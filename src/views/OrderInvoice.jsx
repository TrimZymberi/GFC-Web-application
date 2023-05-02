import React from 'react'
import OrderProgress from '../components/OrderProgress'
import '../styles/order-progress-style.css'
function OrderInvoice() {
    return (
        <div className="parent">
            <title>GFC | Track my Order</title>
            <OrderProgress />
        </div>
    )
}
export default OrderInvoice