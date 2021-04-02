import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit} = useForm();
    const [imgURL, setImgURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imgURL: imgURL
        }
        
        fetch('https://whispering-wildwood-81901.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => {
            console.log('product added', res);
        })
    };


    const handleImgUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1a22bc8f0079d4bfb66019a7d15dda3e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImgURL(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h2 className="mb-5">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" name="name" placeholder="Enter product name" ref={register({ required: true })} />
                <br />
                <input className="form-control" name="price" placeholder="Enter product price" ref={register({ required: true })} />
                <br />
                <input name="image" type="file" onChange={handleImgUpload} ref={register({ required: true })} />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;