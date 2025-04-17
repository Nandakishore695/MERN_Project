import React, { useState } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { login } from '../ReducComponent/feature/authSlice';

function Login() {
    const [userEntery, setUserEntery] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;
    const dispatch = useDispatch();

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserEntery({ ...userEntery, [name]: value.toLowerCase().trim().toString() })
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!userEntery.email && !userEntery.password) {
            toast.error("Please Enter Email and Password")
            return
        }
        else {
            try {
                const response = await axios.post(`${apiUrl}/user/login`, userEntery, { headers: { "Content-Type": "application/json" } },
                    { withCredentials: true })
                if (response.data.success === true) {
                    toast.success(response.data.message);
                    navigate("/product");
                    dispatch(login())
                }
                else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                // toast.error(error.response.data.message);
            }
        }
    };

    return (
        <div className='container mt-5 p-3 rounded w-25 border shadow'>
            <h1 className='text-center'>User Login</h1>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="loginUserName" className="form-label">Email address</label>
                    <input className="form-control" type="email" id="loginUserName" name='email' aria-describedby="emailHelp" autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginUserPassword" className="form-label">Password</label>
                    <input className="form-control" type="password" id="loginUserPassword" name='password' autoComplete="off" onChange={handleInput} />
                </div>
                <button type="submit" className="btn bg-success text-white">Login</button>
            </form>
        </div>
    )
}
export default Login;