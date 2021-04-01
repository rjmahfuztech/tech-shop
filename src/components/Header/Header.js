import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-style">
            <nav>
                <ul className="d-flex justify-content-end">
                    <li>
                        <Link className="nav" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="nav" to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link className="nav" to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link className="nav" to="/deals">Deals</Link>
                    </li>
                    <li className="login">
                        <Link className="nav" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;