<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Symfony\Component\HttpFoundation\Request;

class OrderController extends Controller
{
    public function getOrders()
    {
        $orders = Order::with('user', 'orderItems.product', 'orderItems')->get();

        return response()->json(['orders' => $orders]);
    }

    public function getOrderItems($orderId)
    {
        $order = Order::with('user', 'orderItems.product')->find($orderId);
    
        if (!$order) {
            return response()->json(['error' => 'Order not found'], 404);
        }
    
        return response()->json(['order' => $order]);
    }
}
