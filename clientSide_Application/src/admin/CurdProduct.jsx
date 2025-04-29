import React, { useEffect, useMemo, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
const AddProduct = () => {
    const [userEntery, setUserEntery] = useState({ name: "", description: "", price: "", image: "" });
    const [rowData, setRowData] = useState([]);
    const [colDefs] = useState([{ field: "name" }, { field: "description" }, { field: "price" }, { field: "image" }, { field: "createDate" }, { field: "Actions" }]);
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;
    const navigator = useNavigate();
    ModuleRegistry.registerModules([AllCommunityModule]);

    useEffect(() => {
        getProduct();
    }, []);

    const rowSelection = useMemo(() => {
        return { mode: "multiRow" };
    }, []);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            editable: true,
            filter: true,
            enableCellChangeFlash: true,
        };
    }, []);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserEntery({ ...userEntery, [name]: value });
    }

    const handleAddProduct = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${apiUrl}/product/add`,
                userEntery,
                {
                    headers: {
                       
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    withCredentials: true
                }
            );
    
            if (response.data.success === true) {
                toast.success(response.data.message);
                // navigator("/"); // fixed typo: navigator → navigate
                getProduct()
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };
    

    const getProduct = async () => {
        try {
            const apiResponse = await axios.get(`${apiUrl}/product/all `, { headers: { "Content-Type": "application/json" } },
                { withCredentials: true });
            setRowData([...apiResponse.data].reverse());
        } catch (error) {
            // console.log(error.response.data.message);
        }
    }


    return (
        <>
            <section className='container mt-5 p-3 rounded w-25 border shadow'>
                <h1 className='text-center'>Add Product</h1>
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
                        <input className="form-control" type="url" id="productImageUrl" name='image' onChange={handleInput} />
                    </div>
                    <button type="submit" className="btn bg-success text-white">Create Product</button>
                </form>
            </section>

            <section className='container-fluid w-75 py-5' style={{ height: 400, }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    rowSelection={rowSelection}
                    defaultColDef={defaultColDef}
                />
            </section>
        </>
    )
}

export default AddProduct;