import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import { UserContext } from '../../App';
import OrderInfo from '../OrderInfo/OrderInfo';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;

    useEffect(() => {
        fetch('https://whispering-wildwood-81901.herokuapp.com/orders?email=' + email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div className="container">
            <h2 className="mb-5">Welcome {name} Here is your order</h2>
            <div className="row mb-2 product-title-style">
                <div className="col col-md-7">
                    <h5>Product Name</h5>
                </div>
                <div className="col col-md-2">
                    <h5>Price</h5>
                </div>
                <div className="col col-md-3">
                    <h5>Order Time</h5>
                </div>
            </div>
            {
                orders.map(order => <OrderInfo key={order._id} order={order}></OrderInfo>)
            }
        </div>
    );
};

export default Orders;