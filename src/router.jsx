import { createBrowserRouter } from "react-router-dom";
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
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
            {
                path: 'contactus',
                element: <ContactUs />
            },
        ]
    },
    {
        path: '/default',
        element: <DefaultLayout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'aboutus',
                element: <AboutUs />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;