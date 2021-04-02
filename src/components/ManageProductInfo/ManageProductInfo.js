import React from 'react';
import './ManageProductInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


const ManageProductInfo = (props) => {
    const { name, price, _id } = props.managePdInformation;
    // console.log(props.managePdInformation);

    const loadProduct = (id) => {
        fetch(`http://localhost:5500/products/${id}`)
            .then(res => res.json())
            .then(data => {
                const update = document.getElementById('update');
                update.innerHTML = `
                <h4>Update: ${data._id}</h4>
                Name: <input type="text" value="${data.name}" id="name">
                Price: <input type="text" value="${data.price}" id="price">
                <button onclick="updateProduct">Update</button>
                `;
            })
    }


    // document.getElementById('up').addEventListener('click', function(){
    //     console.log('clicked');
    // })

    // delete specific product
    const deleteProduct = (id) => {
        fetch(`http://localhost:5500/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className="product-style">
            <div className="row p-2">
                <div className="col-md-7">
                    <p>{name}</p>
                </div>
                <div className="col col-md-2">
                    <p>${price}</p>
                </div>
                <div className="col col-md-3 action-style">
                    <button onClick={() => loadProduct(_id)}><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="delete" onClick={() => deleteProduct(_id)}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
            <div id="update">

            </div>
        </div>
    );
};

export default ManageProductInfo;