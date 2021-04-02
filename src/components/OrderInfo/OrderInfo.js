import React from 'react';
import './OrderInfo.css';

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
            <p><b>{(new Date(orderTime).toDateString('dd/MM/yyyy'))}</b></p>
            </div>
        </div>
    );
};

export default OrderInfo;