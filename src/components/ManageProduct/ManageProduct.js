import React, { useEffect, useState } from 'react';
import ManageProductInfo from '../ManageProductInfo/ManageProductInfo';
import './ManageProduct.css';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);

    useEffect(() => {
        // fetch('https://whispering-wildwood-81901.herokuapp.com/products')
        fetch('http://localhost:5500/products')
            .then(res => res.json())
            .then(data => setManageProduct(data));
    }, []);

    // const managePd = document.getElementById('manage-pd');
    // manageProduct.forEach(pd => {
        // const p = document.createElement('p');
        // p.innerHTML = `${pd.name}`;
        // managePd.appendChild(p);
        // p.innerHTML = `
        // <td>${pd.name}</td>
        // <td>${pd.price}</td>
        // <button onClick="deleteProduct('${pd._id}')">Delete</button>
        // `;
        // managePd.appendChild(p);
    //     console.log(pd.name);
    // });

    // console.log(manageProduct);

    return (
        <div className="manage-style">
            <h2>Manage here</h2>
            {/* <div id="manage-pd">

            </div> */}
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
                manageProduct.map(managePdInfo => <ManageProductInfo key={managePdInfo._id} managePdInfo={managePdInfo}></ManageProductInfo>)
            }
        </div>
    );
};

export default ManageProduct;