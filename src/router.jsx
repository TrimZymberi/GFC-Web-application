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
import CategoryList from './views/CategoryList'
import Dashboard from './layouts/Dashboard/Dashboard'
import ProductList from './views/ProductList'
import UserList from './views/UserList';
import ProductRegister from "./layouts/Dashboard/ProductRegister";
import CategoryRegister from "./layouts/Dashboard/CategoryRegister";
import EditCategory from "./layouts/Dashboard/EditCategory";
import PreviewList from "./views/PreviewList";
import PreviewRegister from "./layouts/Dashboard/PreviewRegister";
import PreviewEdit from "./layouts/Dashboard/PreviewEdit";

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
                path: 'previewlist',
                element: <PreviewList />
            },
            {
                path: 'previewregister',
                element: <PreviewRegister />
            },
            {
                path: 'categorylist/:id/categoryedit',
                element: <PreviewEdit/>
            },
        ]
        },
        {
            path: 'prodReg',
            element: <ProductRegister />
        },
        {
            path: 'catReg',
            element: <CategoryRegister />
        },
        {
            path: '/preview/:id/edit',
            element: <PreviewEdit/>
        },
        
        {
            path: 'dash',
            element: <Dashboard />
        },
        {
            path: 'UserList',
            element: <UserList />
        },
        {
            path: 'ProductList',
            element: <ProductList />
        },
        {
            path: 'categorylist',
            element: <CategoryList />
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