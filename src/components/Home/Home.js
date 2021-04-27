import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import HomeInfo from '../HomeInfo/HomeInfo';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');

    useEffect(() => {
        // fetch('https://whispering-wildwood-81901.herokuapp.com/products')
        fetch('http://localhost:5500/products?search='+ searchProduct)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [searchProduct]);

    const handleSearch = e => {
        setSearchProduct(e.target.value);
    }

    return (
        <div>
            <div className="search-section mb-5">
                <div className="d-flex justify-content-center search-form">
                    <input onChange={handleSearch} className="input-size form-control" type="text" placeholder="Search product" />
                </div>
            </div>
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