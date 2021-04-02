import React, { useContext, useEffect, useState } from 'react';
import './CheckOut.css';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { byId } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        fetch(`https://whispering-wildwood-81901.herokuapp.com/products/${byId}`)
            .then(res => res.json())
            .then(data => setProductDetail(data));
    }, [byId]);

    const {name, price} = productDetail;
    console.log(productDetail);

    const handleCheckOut = () => {
        const newOrder = {...loggedInUser, ...productDetail, orderTime: new Date()};
        fetch('https://whispering-wildwood-81901.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your order placed successfully');
            }
        })
    }

    return (
        <div className="checkOut-style">
            <h2 className="mb-5">CheckOut</h2>
            <table>
                <thead>
                    <tr>
                        <th><h4>Name</h4></th>
                        <th><h4>Quantity</h4></th>
                        <th><h4>Price</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h5>{name}</h5></td>
                        <td><h5 className="pl-3">1</h5></td>
                        <td><h5>${price}</h5></td>
                    </tr>
                </tbody>
            </table>
            <div className="btn-style">
                <button className="btn btn-success" onClick={handleCheckOut}>Check Out</button>
            </div>
        </div>
    );
};

export default CheckOut;