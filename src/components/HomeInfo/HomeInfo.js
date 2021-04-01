import React from 'react';
import { useHistory } from 'react-router';
import './HomeInfo.css';

const HomeInfo = (props) => {
    const {name, price, imgURL, _id} = props.product;

    const history = useHistory();
    const handleClick = (useId) => {
        const url = `/product/${useId}`;
        history.push(url);
    }
    return (
        <div className="card home-info-style">
            <div className="text-center">
            <img className="card-img-top" src={imgURL} alt="" />
            </div>
            <div className="card-body">
                <p className="card-text">{name}</p>
                <div className="row justify-content-around">
                    <div className="">
                        <h4>${price}</h4>
                    </div>
                    <div className="">
                        <button className="btn btn-success"onClick={() => handleClick(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;