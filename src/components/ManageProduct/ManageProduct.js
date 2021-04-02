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

    // const deleteProduct = (event) => {
    //     console.log('delete');
    // }

    // const managePd = document.getElementById('manage');
    // managePd.innerHTML = '';
    // manageProduct.forEach(pd => {
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <strong>${pd.name}</strong>
    //     Price: ${pd.price}
    //     <button onclick="{deleteProduct(event, '${pd._id}')}">Delete</button>
    //     `;
    //     managePd.appendChild(div);
    //     console.log(pd.name);

    // });

    // manageProduct.map(pd => {
    //     const li = document.createElement('li');
    //     li.innerText = pd.name;
    //     managePd.appendChild(li);
    // })
    

    return (
        <div className="manage-style">
            <h2 className="mb-5">Manage Product</h2>
            <div className="row mb-2 product-title-style">
                <div className="col col-md-7"><h5>Product Name</h5></div>
                <div className="col col-md-2"><h5>Price</h5></div>
                <div className="col col-md-3"><h5>Action</h5></div>
            </div>
            {/* <table>
                <thead>
                    <tr>
                        <th><b>Product Name</b></th>
                        <th><b>Product Price</b></th>
                        <th><b>Action</b></th>
                    </tr>
                </thead>
                <tbody id="manage-pd">
                    
                </tbody>
            </table> */}
            {
                manageProduct.map(managePdInfo => <ManageProductInfo key={managePdInfo._id} managePdInformation={managePdInfo}></ManageProductInfo>)
            }
        </div>
    );
};

export default ManageProduct;