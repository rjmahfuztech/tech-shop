import React from 'react';
import './OrderInfo.css';
 // (new Date(OrderTime).toDateString('dd/MM/yyyy'))
const OrderInfo = (props) => {
    const {name, price, orderTime} = props.order;
    return (
        <div className="row product-style">
            <div className="col-md-7">
            <p><b>{name}</b></p>
            </div>
            <div className="col col-md-2">
            <p><b>${price}</b></p>
            </div>
            <div className="col col-md-3">
            <p><b>{orderTime}</b></p>
            </div>
        </div>
    );
};

export default OrderInfo;