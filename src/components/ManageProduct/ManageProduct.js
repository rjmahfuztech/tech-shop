import React, { useEffect, useState } from 'react';
import ManageProductInfo from '../ManageProductInfo/ManageProductInfo';
import './ManageProduct.css';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);

    useEffect(() => {
        fetch('https://whispering-wildwood-81901.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data));
    }, []);


    return (
        <div className="manage-style">
            <h2 className="mb-5">Manage Product</h2>
            <div className="row mb-2 product-title-style">
                <div className="col col-md-7"><h5>Product Name</h5></div>
                <div className="col col-md-2"><h5>Price</h5></div>
                <div className="col col-md-3"><h5>Action</h5></div>
            </div>
            {
                manageProduct.map(managePdInfo => <ManageProductInfo key={managePdInfo._id} managePdInformation={managePdInfo}></ManageProductInfo>)
            }
        </div>
    );
};

export default ManageProduct;