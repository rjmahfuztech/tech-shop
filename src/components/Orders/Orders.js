import React, { useEffect, useState } from 'react';

const Orders = () => {
    // const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/orders`)
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

    // console.log(orders);
    return (
        <div>
            <h2>This is orders</h2>
        </div>
    );
};

export default Orders;