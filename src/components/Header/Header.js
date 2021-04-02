import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect className="mb-5 mt-2 nav-style" expand="lg" bg="light" variant="light">
            <h2>Tech Shop</h2>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link className="nav" to="/home">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav" to="/orders">Orders</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav" to="/admin">Admin</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav" to="/deals">Deals</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav" to="/login">Login</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;