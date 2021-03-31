import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL, setImgURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imgURL: imgURL
        }
        
        fetch('http://localhost:5500/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => {
            console.log('okkkk', res);
        })
    };


    const handleImgUpload = event => {
        console.log(event.target.files[0]);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Enter product name" ref={register({ required: true })} />
                <br />
                <input name="price" placeholder="Enter product price" ref={register({ required: true })} />
                <br />
                <input name="image" type="file" onChange={handleImgUpload} ref={register({ required: true })} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;