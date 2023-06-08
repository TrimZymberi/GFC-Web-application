import {Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest/GuestLayout"
import CustomerLayout from "./layouts/Customer/CustomerLayout"
import EmployeeLayout from "./layouts/Employee/EmployeeLayout"
import ManagerLayout from "./layouts/Manager/ManagerLayout"
import GuestHome from "./layouts/Customer/views/Home";
import CustomerHome from "./layouts/Customer/views/Home";
import AboutUs from "./layouts/Universal/views/AboutUs";
import Login from "./layouts/Guest/views/Login";
import Signup from "./layouts/Guest/views/Signup";
import Dashboard from "./layouts/Manager/views/Dashboard";
import CategoryList from "./layouts/Manager/views/CategoryList";
import CategoryRegister from "./layouts/Manager/components/CategoryRegister";
import CategoryEdit from "./layouts/Manager/components/CategoryEdit";
import ProductList from "./layouts/Manager/views/ProductList";
import ProductRegister from "./layouts/Manager/components/ProductRegister";
import { useStateContext } from "./contexts/ContextProvider";
import ProductEdit from "./layouts/Manager/components/ProductEdit";
import Order from "./layouts/Customer/Order"
import OrderInvoice from "./layouts/Customer/views/OrderInvoice";
import OrderHistory from "./layouts/Customer/views/OrderHistory";
import ManageOrder from "./layouts/Employee/views/ManageOrder";
import OurLocations from "./layouts/Universal/views/OurLocations";
import OrderList from "./layouts/Manager/views/OrderList"
import OrderRegister from "./layouts/Manager/components/OrderRegister"
import EmployeeDashboard from "./layouts/Employee/views/Dashboard";
import ManagerPage from "./layouts/Manager/components/ManagerPage"
import UserList from "./layouts/Manager/views/UserList"
import UserEdit from "./layouts/Manager/components/UserEdit"
import UserCreate from "./layouts/Manager/components/UserCreate"
import DriverLayout from "./layouts/Driver/DriverLayout"
import DriverDashboard from "./layouts/Driver/views/DriverDashboard"
import OrderTrack from "./layouts/Customer/components/OrderTrack";
import DriverOrder from "./layouts/Driver/components/DriverOrder";
import DriverManageOrder from "./layouts/Driver/views/DriverManageOrder";
import DoneOrders from "./layouts/Driver/components/DoneOrders";
import Calendar from "./layouts/Driver/components/Calendar";
import Checkout from "./layouts/Customer/components/Chechout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="home" />
            },
            {
                path: 'home',
                element: <GuestHome />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'ourlocations',
                element: <OurLocations />
            }
        ]
    },
    {
        path: '/app',
        element: <CustomerLayout />,
        children: [
            {
                path: '/app',
                element: <Navigate to="home" />
            },
            {
                path: 'home',
                element: <CustomerHome />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
            {
                path: 'order',
                element: <Order />
            },
            {
                path: 'orderinvoice',
                element: <OrderInvoice />
            },
            {
                path: 'orderhistory/:page',
                element: <OrderHistory />
            },
            {
                path: 'orderhistory/ordertrack/:id',
                element: <OrderTrack />
            },
            {
                path: 'checkout',
                element: <Checkout />
            },
           
        ]
    }, {
        path: '/workspace',
        element: <EmployeeLayout />,
        children: [
            {
                path: '/workspace',
                element: <Navigate to="dashboard" />
            },
            {
                path: 'dashboard',
                element: <EmployeeDashboard />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
            {
                path: 'manageorders/:page',
                element: <ManageOrder />
            },
            {
                path: 'manageorders/orders/:id/items',
                element: <ManageOrder />
            },
        ]
    },
    {
        path: '/workdrive',
        element: <DriverLayout />,
        children: [
            {
                path: '/workdrive',
                element: <Navigate to="dashboard" />
            },
            {
                path: 'dashboard',
                element: <DriverDashboard />
            },
            {
                path: 'dashboard/driverorder',
                element: <DriverManageOrder />
            },
            {
                path: 'dashboard/doneoreder',
                element: <DoneOrders />
            },
            {
                path: 'dashboard/calendar',
                element: <Calendar />
            },

           
        ]
    },
    {
        path: '/management',
        element: <ManagerLayout />,
        children: [
            {
                path: '/management',
                element: <Navigate to="dashboard" />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'categorylist/:page',
                element: <CategoryList />
            },
            {
                path: 'categoryregister',
                element: <CategoryRegister />
            },
            {
                path: 'categorylist/categoryedit/:id',
                element: <CategoryEdit />
            },
            {
                path: 'productlist',
                element: <ProductList />
            },
            {
                path: 'productregister',
                element: <ProductRegister />
            },
            {
                path: 'productlist/productedit/:id',
                element: <ProductEdit />
            },
            {
                path: 'orderList',
                element: <OrderList />
            },
            {
                path: 'managerPage',
                element: <ManagerPage />
            },
            {
                path: 'orderregister',
                element: <OrderRegister />
            },
            {
                path: 'userlist',
                element: <UserList />
            },
            {
                path: 'userlist/useredit/:id',
                element: <UserEdit />
            },
            {
                path: 'userregister',
                element: <UserCreate />
            }
        ]
    }
])

export default router