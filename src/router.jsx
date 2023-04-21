import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from './layouts/GuestLayout'
import DefaultLayout from './layouts/DefaultLayout'
import Login from './views/Login'
import Signup from './views/Signup'
import Home from "./views/Home";
import NotFound from "./layouts/NotFound";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";

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