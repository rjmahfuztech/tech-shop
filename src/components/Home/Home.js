import React, { useEffect, useState } from 'react';
import HomeInfo from '../HomeInfo/HomeInfo';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-wildwood-81901.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    // const products = [
    //     {
    //         id: 1,
    //         key: 'KFDEIDVN1DFSD',
    //         name:'iPhone 12 Pro',
    //         img: 'iPhone 12 Pro.png',
    //         price: 1002
    //     },
    //     {
    //         id: 2,
    //         key: 'KFDEIDVN2DFSD',
    //         name:'Samsung Electronics Samsung Galaxy S21 5G',
    //         img: 'Samsung Electronics Samsung Galaxy S21 5G.jpg',
    //         price: 890
    //     },
    //     {
    //         id: 3,
    //         key: 'KFDEIDVN3DFSD',
    //         name:'Samsung Galaxy S20 FE 5G',
    //         img: 'Samsung Galaxy S20 FE 5G.jpg',
    //         price: 605
    //     }
    // ]
    console.log(products);
    return (
        <div className="row">
            {
                products.map(product => <HomeInfo key={product._id} product={product}></HomeInfo>)
            }
        </div>
    );
};

export default Home;