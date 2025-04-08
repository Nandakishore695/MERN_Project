import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAdd } from "../redux/slice.jsx"
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function Product() {
    const [apiData, setApiData] = useState([]);
    const [cartData, setCartData] = useState([])
    const dispatch = useDispatch();
    const count = useSelector((state) => state.login?.value);
    const navigate = useNavigate();

    useEffect(() => {
        getProduct();
    }, [])

    // const handleAddCart = (item) => {
    //     if (count) {
    //         dispatch(cartAdd())
    //     setCartData(item)

    //     }
    // }

    const handleViewProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const getProduct = async () => {
        try {
            const apiResponse = await axios.get("/api/product/all");
            setApiData(apiResponse.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const handleAddCart = async (item) => {
        try {
            const apiResponse = await axios.post(`/api/carts/add`, item, {
                headers: { "Content-Type": "application/json" }
            });


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='container mt-2'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="row ">
                {apiData.map((item, index) => {
                    return <div className="col-xl-3 col-lg-2 " key={index}>
                        <div className="card shadow">
                            <img src={item?.image} className="card-img-top rounded" alt="mobile" width={200} onClick={() => handleViewProduct(item._id)} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <button className="btn btn-primary " >₹ {item.price}</button>
                                <button className="btn bg-warning m-1" onClick={() => handleAddCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}
export default Product;