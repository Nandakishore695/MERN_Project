import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router"
import toast, { Toaster } from "react-hot-toast";

const ViewProduct = () => {
  const [apiData, setApiData] = useState({});
  let params = useParams();
  const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;

  useEffect(() => {
    if(params.id){
      getProductById();
    }else if(params.searchValue){
      getSearchProduct();
    }
  }, [params.searchValue])

  const getProductById = async () => {
    try {
      const apiResponse = await axios.get(`${apiUrl}/product/${params.id}`, { headers: { "Content-Type": "application/json" } },
        { withCredentials: true });
      setApiData(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddCart = async (item) => {
    const data = {
      productId: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: 1,
      image: item.image,
    };
    try { await axios.post(
        `${apiUrl}/carts/cartAdd`,
        data,
        { headers: { "Content-Type": "application/json" } },
        { withCredentials: true }
      );
      toast.success("Item Added");
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchProduct = async () =>{
    try {
      const apiResponse = await axios.get(`${apiUrl}/product/searchProduct/${params.searchValue}`, { headers: { "Content-Type": "application/json" } },);
      setApiData(apiResponse.data.response[0]);
        } catch (error) {
      toast.error({message: error.message, success: false});
    }
  }
  
  return (
    <>
      <div className='d-flex justify-content-center my-5'>
              <Toaster position="top-center" reverseOrder={false} />
        <div className="card ">
          <img src={apiData.image} alt={apiData.name} width={200} />
        </div>
        <div className="mx-5">
          <h1>{apiData.name}</h1>
          <p>{apiData.description}</p>
          <h2>₹ {apiData.price}</h2>
          <button className="btn btn-danger">Buy Now</button>
          <button className="btn bg-warning m-1" onClick={() => handleAddCart(apiData)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}
export default ViewProduct;