import React from 'react';
import './ManageProductInfo.css';

const ManageProductInfo = (props) => {
    // let {name} = props.managePdInf;
    // console.log(props.manageProduct)
    return (
        <div className="manageProduct-style">
            <table>
                <thead>
                    <tr>
                        <th><b>Product Name</b></th>
                        <th><b>Product Price</b></th>
                        <th><b>Action</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{name}</td> */}
                        {/* <td>{price}</td> */}
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageProductInfo;