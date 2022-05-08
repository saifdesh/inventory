import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../src/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <nav bg="primary">

            <Link to="/home">
                <img src={logo} />
            </Link>
            <Link to="/home">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/Orderreview">Order Review</Link>
            <Link to="/About">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>




        </nav>




    );
};

export default Header;