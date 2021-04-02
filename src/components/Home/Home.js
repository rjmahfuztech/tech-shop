import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import HomeInfo from '../HomeInfo/HomeInfo';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-wildwood-81901.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <div className="text-center">
                {
                    products.length === 0 && <Spinner animation="border" variant="success" />
                }
            </div>
            <div className="home-style">
                {
                    products.map(product => <HomeInfo key={product._id} product={product}></HomeInfo>)
                }
            </div>
        </div>
    );
};

export default Home;