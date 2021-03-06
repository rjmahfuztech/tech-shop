import React from 'react';
import './Admin.css';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {

    const handleAddProduct = () => {
        const addProduct = document.getElementById('style-add-product');
        const manageProduct = document.getElementById('style-manage-product');
        manageProduct.style.display = 'none';
        addProduct.style.display = 'block';

    }

    const handleManageProduct = () => {
        const manageProduct = document.getElementById('style-manage-product');
        const addProduct = document.getElementById('style-add-product');
        manageProduct.style.display = 'block';
        addProduct.style.display = 'none';
    }

    return (
        <div className="container">
            <h2>Admin Panel</h2>
            <div className="btn-style row justify-content-end">
                <b onClick={handleAddProduct}>Add Product</b>
                <b onClick={handleManageProduct}>Manage Product</b>
            </div>
            <br />
            <br />
            <div id="style-add-product" className="style-addProduct">
                <AddProduct></AddProduct>
            </div>
            <div id="style-manage-product" className="style-manageProduct">
                <ManageProduct></ManageProduct>
            </div>
        </div>
    );
};

export default Admin;