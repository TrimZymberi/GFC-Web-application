import React, { useState } from 'react';
import CategoryTab from "./CategoryTab"
import { CartProvider } from "react-use-cart";
import OrderCart from './OrderCart';
import "../Styles/styles.scss"



export default function Order() {
   return(
    <div className='wrapper'>
        <CartProvider>
        <div className='center'>
        <CategoryTab/>
        </div>
        <div className='right'>
            <OrderCart/>
        </div>
        </CartProvider>
    </div>
   )
}
