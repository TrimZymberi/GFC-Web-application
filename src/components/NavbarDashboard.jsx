import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/tab-style.css';

const NavbarDashboard = () => {
  const location = useLocation();
  const navLinks = [
    { to: '/home', text: 'Home' },
    { to: '/dash', text: 'Dashboard' },
    { to: '/UserList', text: 'Users' },
    { to: '/ProductList', text: 'Products' },
    { to: '/CategoryList', text: 'Category' },
  ];

  return (
    <Navbar className='bg-danger' variant="dark" expand="lg">
      <Navbar.Brand href="#">GFC</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto my-2 my-lg-2 gap-15 px-10" style={{ maxHeight: '100px' }} navbarScroll>
          {navLinks.map((link) => (
            <Nav.Link as={NavLink} key={link.to} to={link.to} isActive={() => link.to === location.pathname}>
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDashboard;