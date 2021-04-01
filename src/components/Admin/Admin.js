import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <div className="container">
            <h2>This is admin panel</h2>
            <AddProduct></AddProduct>
            <br/>
            <br/>
            <ManageProduct></ManageProduct>
        </div>
    );
};

export default Admin;