import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router"

const ViewProduct = () => {
  const [apiData, setApiData] = useState({});
  let params = useParams();


  useEffect(() => {
    getProductById();
  }, [])

  const getProductById = async () => {
    try {
      const apiResponse = await axios.get(`/api/product/${params.id}`);
      setApiData(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <div className="card ">
          <img src={apiData.image} alt={apiData.name} width={200} />
        </div>
        <div className="mx-5">
          <h1>{apiData.name}</h1>
          <p>{apiData.description}</p>
          <h2>₹ {apiData.price}</h2>
          <button className="btn btn-danger">Buy Now</button>
          <button className="btn bg-warning m-1">Add to Cart</button>
        </div>
      </div>
    </>
  )
}
export default ViewProduct;