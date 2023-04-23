import React from 'react';
import '../styles/tab-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderCategories from "../components/OrderCategories"


export default function Order() {
  return (
    <div>
      <h1>Order Page</h1>
      <OrderCategories />
    </div>

  )
}
