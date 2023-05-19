import React from "react";
import OrderMenu from "./OrderMenu";
import {CartProvider} from "react-use-cart";

export default function Order() {
    return(
        <div class='wrapper bg-white backdrop-filter backdrop-blur-lg bg-opacity-90'>
            <CartProvider>
            <OrderMenu/>
            </CartProvider>
        </div>

    );
}