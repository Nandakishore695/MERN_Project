import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
    const cart = useSelector((state) => state.login?.cartValue);
    const [apiData, setApiData] = useState([]);
    const [apiDataLength, setCartDataLength] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getCarts();
    }, [])

    const getCarts = async () => {
        try {
            const apiResponse = await axios.get(`/api/carts/getCart`);
            setApiData(apiResponse.data);
            setCartDataLength(apiResponse.data.length);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckout = () => {
        navigate("/shippingAddress")
    }

    const handleDeleteCart = async (id) => {
        try {
            const response = await axios.delete(`/api/carts/deleteCart/${id}`);
            if (response.data.success === true) {
                toast.success(response.data.message);
                getCarts();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container text-center mt-5 w-50 '>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="d-flex justify-content-center">
                <p className="bg-info p-2 mx-3 rounded border-0 w-25">Total Qty :- {apiDataLength}</p>
                <p className="bg-warning p-2 rounded border-0 w-25">Total Price :- 8999</p>
            </div>
            {apiData?.map((item, index) => {
                return <div className='d-flex bg-success justify-content-center align-items-center p-3 rounded my-3 shadow bg-opacity-10' key={index}>
                    <div>
                        <img src={item.image} width={200} className='rounded' />
                    </div>
                    <div>
                        <p className='fs-4 p-2'>{item.description}</p>
                        <p className='fs-4 p-2'>₹ {item.price}</p>
                    </div>
                    <div>
                        <button className="btn bg-warning p-2 mx-3">Qty--</button>
                        <button className="bg-info p-2 rounded border-0">Qty++</button>
                        <button className="btn bg-danger p-2 mx-3" onClick={() => handleDeleteCart(item._id)}>Remove</button>
                    </div>

                </div>
            })}
            {apiDataLength !== 0 && <><button className="btn bg-success text-white m-3" onClick={handleCheckout} >Checkout</button>
                <button className="btn btn-danger">Clear Cart</button></>}

        </div >
    )
}
export default Cart;