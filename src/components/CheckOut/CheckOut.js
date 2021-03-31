import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {byId} = useParams();
    const [pdInfo, setPdInfo] = useState([]);

    useEffect(() => {
        fetch(`https://whispering-wildwood-81901.herokuapp.com/products/${byId}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);
    return (
        <div>
            <h2>Check Out here: {byId}</h2>
        </div>
    );
};

export default CheckOut;