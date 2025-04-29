import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import { incrementQuantity } from "../ReducComponent/feature/acrtSlice";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;

  useEffect(() => {
    getProduct();
  }, []);

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const getProduct = async () => {
    try {
      const apiResponse = await axios.get(
        `${apiUrl}/product/all `,
        { headers: { "Content-Type": "application/json" } },
        { withCredentials: true }
      );
      setApiData([...apiResponse.data].reverse());
    } catch (error) {
      // console.log(error.response.data.message);
    }
  };

  const handleAddCart = async (item) => {
    const data = {
      productId: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: 1,
      image: item.image,
    };
    try {
      await axios.post(
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

  return (
    <section className="container mt-2">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="row ">
        {apiData.map((item, index) => {
          return (
            <div className="col-xl-3 col-lg-2 " key={index}>
              <div className="card shadow">
                <img
                  src={item?.image}
                  className="card-img-top rounded"
                  alt="mobile"
                  width={200}
                  onClick={() => handleViewProduct(item._id)}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary ">₹ {item.price}</button>
                  <button
                    className="btn bg-warning m-1"
                    onClick={() => handleAddCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Product;
