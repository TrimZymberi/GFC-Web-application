<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function getOrders(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $userId = $request->input('user_id');
        $status = $request->input('status', 'pending');

        $query = Order::with('user', 'orderItems.product', 'orderItems');

        if ($userId) {
            $query->whereHas('user', function ($q) use ($userId) {
                $q->where('id', $userId);
            });
        }

        $query->where(function ($q) {
            $q->whereNull('driver_id');
        });

        $query->where(function ($q) {
            $q->where('status', '!=', 'cancelled')
                ->whereNull('driver_id');
        });

        switch ($status) {
            case 'pending':
                $query->orderBy('status', 'desc');
                $query->orderBy('created_at', 'desc');
                break;
            case 'selected':
                $query->orderBy('status', 'desc');
                $query->orderBy('selected_at', 'desc');
                break;
            default:
                $query->orderBy('status', 'asc');
                break;
        }

        $orders = $query->paginate($perPage);

        $currentPage = $request->input('page', 1);

        return response()->json([
            'orders' => $orders->items(),
            'current_page' => $currentPage,
            'total' => $orders->total(),
            'per_page' => $orders->perPage(),
            'last_page' => $orders->lastPage(),
        ]);
    }

    public function getOrderItems($orderId)
    {
        $order = Order::with('user', 'orderItems.product')->find($orderId);

        if (!$order) {
            return response()->json(['error' => 'Order not found'], 404);
        }

        return response()->json(['order' => $order]);
    }

    public function getOrdersbyID(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $userId = $request->input('user_id');
        $query = Order::with('user', 'orderItems.product', 'orderItems');

        if ($userId) {
            $query->whereHas('user', function ($q) use ($userId) {
                $q->where('id', $userId);
            });
        }

        $orders = $query->paginate($perPage);

        $currentPage = $request->input('page', 1);

        return response()->json([
            'orders' => $orders->items(),
            'current_page' => $currentPage,
            'total' => $orders->total(),
            'per_page' => $orders->perPage(),
            'last_page' => $orders->lastPage(),
        ]);
    }

    public function editOrder(Request $request, $orderId)
    {
        $order = Order::find($orderId);

        if (!$order) {
            return response()->json(['error' => 'Unable to update order: Order not found.'], 404);
        }

        $order->status = $request->input('status');
        $order->employee_id = $request->input('employee_id');

        $status = $request->input('status');
        if ($status !== 'cancelled') {
            $driverName = $request->input('driver_id');
            $driver = User::where('name', $driverName)->first();
            if ($driver) {
                $order->driver_id = $driver->id;
            } else {
                return response()->json(['error' => 'Unable to update order: Driver not found.'], 404);
            }
        } else {
            $order->driver_id = null;
        }

        $order->save();
        $orderItems = $request->input('order_items');

        if (!empty($orderItems)) {
            foreach ($orderItems as $item) {
                $orderItem = OrderItem::find($item['id']);
                if ($orderItem) {
                    $orderItem->quantity = $item['quantity'];
                    $orderItem->save();
                } else {
                    return response()->json(['error' => 'Unable to update order: Order item not found.'], 404);
                }
            }
        }

        return response()->json(['message' => 'Order updated successfully.']);
    }

    public function ordertrack($id)
    {
        $order = Order::with('user', 'orderItems.product', 'orderItems')->find($id);
        if (!$order) {
            return response()->json([
                'status' => 'error',
                'message' => 'No order found'
            ], 404);
        }
        return response()->json([
            'status' => 'success',
            'order' => $order
        ]);
    }

    public function getLatestOrder(Request $request)
    {
        $userId = $request->input('user_id');

        $query = Order::with('user', 'orderItems.product', 'orderItems')
            ->whereHas('user', function ($q) use ($userId) {
                $q->where('id', $userId);
            })
            ->latest()
            ->first();

        if (!$query) {
            return response()->json(['error' => 'No order found for the user'], 404);
        }

        return response()->json(['order' => $query]);
    }
}
