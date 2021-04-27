import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
            <Navbar collapseOnSelect className="" expand="md" variant="light">
            <Navbar.Brand className="title-style" as={Link} to="/">Tech Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/orders">
                            Orders
                        </Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/admin">
                            Admin
                        </Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/deals">
                            Deals
                        </Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Header;