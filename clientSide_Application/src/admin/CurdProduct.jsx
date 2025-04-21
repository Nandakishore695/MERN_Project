import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
const AddProduct = () => {
    const [userEntery, setUserEntery] = useState({ name: "", description: "", price: "", image: "" });
    const [rowData, setRowData] = useState([]);
    const [colDefs] = useState([{ field: "boolean"},{ field: "name" }, { field: "description" }, { field: "price" }, { field: "image" }, { field: "createDate" },{field: "Actions"}]);
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;
    const navigator = useNavigate();
    ModuleRegistry.registerModules([AllCommunityModule]);

    useEffect(() => {
        getProduct();
    }, []);

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

    const getProduct = async () => {
        try {
            const apiResponse = await axios.get(`${apiUrl}/product/all `, { headers: { "Content-Type": "application/json" } },
                { withCredentials: true });
            setRowData(apiResponse.data);
        } catch (error) {
            // console.log(error.response.data.message);
        }
    }

   
    return (
        <>
            <section>
                <Toaster position="top-center" reverseOrder={false} />
                <form onSubmit={handleAddProduct} className='w-75 d-flex'>
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
            <section style={{ height: 500, width: 1820 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </section>
        </>
    )
}

export default AddProduct;