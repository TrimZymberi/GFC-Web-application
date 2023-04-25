import React from 'react';
import '../styles/tab-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderCategories from "../components/OrderCategories"
import OrderCart from '../components/OrderCart';
import { CartProvider } from "react-use-cart";



export default function Order() {
  return (
    <div>
      <h1>Order Page</h1>
      <CartProvider>
      <OrderCategories />
      <OrderCart/>
      </CartProvider>
    </div>

  )
}
