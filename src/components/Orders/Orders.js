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
    }, [email]);

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Welcome <span className="text-info">{name}</span> Here is your order</h3>
            {
                orders.length ?
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
            :
            <div className="text-center text-secondary">
                <h4>You haven't placed any orders yet</h4>
            </div>
            }
            <div>
                {
                    orders.map(order => <OrderInfo key={order._id} order={order}></OrderInfo>)
                }
            </div>
        </div>
    );
};

export default Orders;