import Logo from '../images/Logo.png'

const navLinks = {
    guestLinks: [
        { to: '/home', text: 'Home' },
        { to: '/aboutus', text: 'About' },
        { to: '/ourlocations', text: 'Our Locations' },
        { to: '/login', text: 'Login' },
        { to: '/signup', text: 'Signup' },
        { to: '/guest', text: 'Guest' },

    ],
    customerLinks: [
        { to: '/app', text: 'Home' },
        { to: 'aboutus', text: 'About' },
        { to: 'ourlocations', text: 'Our Locations' },
        { to: 'orderhistory', text: 'Order History' },
        { to: '/logout', text: 'Log out' },
        { to: 'order', text: 'Order' },


    ],
    employeeLinks: [
        { to: '/workspace', text: 'Home' },
        { to: '/aboutus', text: 'About' },
        { to: '/ourlocations', text: 'Our Locations' },
        { to: `/user`, text: `employee` },
        { to: '/logout', text: 'Log out' },
    ],
    driverLinks: [
        { to: '/workspace', text: 'Home' },
        { to: '/aboutus', text: 'About' },
        { to: '/ourlocations', text: 'Our Locations' },
        { to: `/user`, text: `driver` },
        { to: '/logout', text: 'Log out' },
    ],
    managerLinks: [
        { to: '/management', text: 'Dashboard' },
        { to: 'ourlocations', text: 'Our Locations' },
        { to: 'userlist', text: 'User List' },
        { to: 'productlist', text: 'Product List' },
        { to: 'categorylist', text: 'Category List' },
        { to: '/admin', text: `manager` },
        { to: '/logout', text: 'Log out' },
    ]
}

export default navLinks