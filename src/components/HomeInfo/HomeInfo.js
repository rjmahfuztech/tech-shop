import React from 'react';
import { useHistory } from 'react-router';
import './HomeInfo.css';

const HomeInfo = (props) => {
    const {name, imgURL, _id} = props.product;

    const history = useHistory();
    const handleClick = (useId) => {
        const url = `/product/${useId}`;
        history.push(url);
    }
    return (
        <div className="card home-info-style container col-md-3" style={{ width: "18rem"}}>
            <img className="card-img-top" src={imgURL} alt="" />
            <div className="card-body">
                <p className="card-text">{name}</p>
                <div className="row justify-content-between">
                    <div className="">
                        <p>$50</p>
                    </div>
                    <div className="">
                        <button onClick={() => handleClick(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;