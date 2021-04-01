import React, { useEffect, useState } from 'react';
import HomeInfo from '../HomeInfo/HomeInfo';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('https://whispering-wildwood-81901.herokuapp.com/products')
        fetch('http://localhost:5500/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className="home-style">
            {
                products.map(product => <HomeInfo key={product._id} product={product}></HomeInfo>)
            }
        </div>
    );
};

export default Home;