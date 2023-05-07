import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import navLinks from '../data/NavLinks'
import '../styles/tab-style.css';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios';

const Navbars = () => {
  // ^ stored data collection & makes logout functional
  const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();

  const navigate = useNavigate();

  const logout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
      navigate('/');
    })
  };

  let filteredLinks;
  if (userToken) {
    if (currentUser.role === 'customer') {
      filteredLinks = navLinks.customerLinks;
    } else if (currentUser.role === 'employee') {
      filteredLinks = navLinks.employeeLinks;
    } else if (currentUser.role === 'driver') {
      filteredLinks = navLinks.driverLinks;
    } else if (currentUser.role === 'manager') {
      filteredLinks = navLinks.managerLinks;
    }
  } else {
    filteredLinks = navLinks.guestLinks;
  }

  return (
    <Navbar className='bg-danger' variant="dark" expand="lg">
      <Navbar.Brand href="#">GFC</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto my-2 my-lg-2 gap-15 px-10" style={{ maxHeight: '100px' }} navbarScroll>
          {filteredLinks.map((link) => (
            <Nav.Link as={NavLink} key={link.to} to={link.to} onClick={(ev) => link.text === 'Log out' ? logout(ev) : null} isActive={() => link.to === location.pathname}>
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
