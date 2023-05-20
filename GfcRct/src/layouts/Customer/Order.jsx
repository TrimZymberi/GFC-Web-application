import React from "react";
import OrderMenu from "./OrderMenu";
import {CartProvider} from "react-use-cart";

export default function Order() {
    return(
        <div class=' bg-white backdrop-filter '>
            <CartProvider>
            <OrderMenu/>
            </CartProvider>
        </div>

    );
}