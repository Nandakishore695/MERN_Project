import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
    const [userEntery, setUserEntery] = useState({ name: "", description: "", price: "", image: "" });
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;
    const navigator = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserEntery({ ...userEntery, [name]: value });
    }
    
    const handleAddProduct = async (event) => {        
        event.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/product/add`, userEntery, { headers: { "Content-Type": "application/json" } }, { withCredentials: true });
            if (response.data.success === true) {
                toast.success(response.data.message);
                navigator("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <section>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleAddProduct}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input className="form-control" type="text" id="productName" name='name' onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Product Description</label>
                    <input className="form-control" type="text" id="productDescription" name='description' onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Product Price</label>
                    <input className="form-control" type="number" id="productPrice" name='price' onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImageUrl" className="form-label">Image Url</label>
                    <input className="form-control" type="password" id="productImageUrl" name='image' onChange={handleInput} />
                </div>
                <button type="submit" className="btn bg-success text-white">Add A Product</button>
            </form>
        </section>
    )
}

export default AddProduct;