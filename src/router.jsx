import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from './layouts/GuestLayout'
import DefaultLayout from './layouts/DefaultLayout'
import Login from './views/Login'
import Signup from './views/Signup'
import Home from "./views/Home";
import NotFound from "./layouts/NotFound";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import Order from "./views/Order";
import Roles from "./views/roles";
import Dashboard from "./layouts/Dashboard/Dashboard";
import ProductRegister from "./layouts/Dashboard/ProductRegister";
import CategoryRegister from "./layouts/Dashboard/CategoryRegister";


const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home'/>
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/contactus',
                element: <ContactUs />
            },
            {
                path: 'Order',
                element: <Order />
            },
            {
                path: 'roles',
                element: <Roles />
            },
            {
                path: 'UserList',
                element: <UserList />
            },
            {
                path: 'ProductList',
                element: <ProductList />
            },
            
        ]
    },
    {
        path: '/default',
        element: <DefaultLayout />,
        children: [
            {
                path: '/default',
                element: <Navigate to='home' />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'default/about',
                element: <AboutUs />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;