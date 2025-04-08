import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";


const ShippingAddress = () => {
    const [userEntery, setUserEntery] = useState({ name: "", country: "", state: "", city: "", postalCode: "", phone: "", address: "" });
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserEntery({ ...userEntery, [name]: value.toLowerCase().trim().toString() });
    }

    const handleAddressCollect = async (event) => {
        event.preventDefault();
        if (!userEntery.name && !userEntery.country && !userEntery.state && !userEntery.city && !userEntery.postalCode && !userEntery.phone && !userEntery.address) {
            toast.error("Please Enter All Fields");
        }
        else {
            try {
                const response = await axios.post("/api/shippingAddress/add", userEntery, {
                    headers: { "Content-Type": "application/json" }
                });
                if (response.data.success === true) {
                    toast.success(response.data.message);
                    navigate("/checkoutAddress");
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleCheckoutAddressPage = (event) => {
        event.preventDefault();
        navigate("/checkoutAddress")

    }

    return (
        <div className='container mt-5 p-3 rounded w-50 border shadow'>
            <h1>Shipping Address</h1>
            <form className='row' onSubmit={handleAddressCollect}>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUserName" className="form-label">Name</label>
                    <input className="form-control" type="email" id="shippingUserName" name='name' aria-describedby="emailHelp" autoComplete="off" onChange={handleInput} />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUserCountry" className="form-label">Country</label>
                    <input className="form-control" type="password" id="shippingUserCountry" name='country' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUsereState" className="form-label">State</label>
                    <input className="form-control" type="password" id="shippingUsereState" name='state' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUserCity" className="form-label">City</label>
                    <input className="form-control" type="password" id="shippingUserCity" name='city' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUserPostalCode" className="form-label">Postal Code</label>
                    <input className="form-control" type="password" id="shippingUserPostalCode" name='postalCode' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUserPhoneNumber" className="form-label">PhoneNumber</label>
                    <input className="form-control" type="password" id="shippingUserPhoneNumber" name='phone' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="col-xl-3 mb-3">
                    <label htmlFor="shippingUserAddress" className="form-label">Address</label>
                    <input className="form-control" type="text-area" id="shippingUserAddress" name='address' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="text-center">
                    <div>
                        <button type="submit" className="btn bg-success rounded text-white mb-3 w-25" onClick={handleAddressCollect}>Submit </button>
                    </div>
                    <div>
                        <button type="submit" className="btn bg-success text-white w-25" onClick={handleCheckoutAddressPage}>Use Old Address</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddress;
