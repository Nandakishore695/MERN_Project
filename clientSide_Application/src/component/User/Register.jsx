import React, { useState } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [userEntery, setUserEntery] = useState({ name: "", email: "", password: "", re_password: "" });
    const navigator = useNavigate();
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserEntery({
            ...userEntery,
            [name]: name === "" || name === "userEmailAddress"
                ? value.toLowerCase().trim().toString()
                : value.trim().toString()
        });
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!userEntery.name && !userEntery.email && !userEntery.password && !userEntery.re_password) {
            toast.error("Please Enter All Fields");
            return;
        }
        else if (userEntery.password !== userEntery.re_password) {
            toast.error("Password and Re-Password Not Matched");
            return;
        }
        else {
            try {
                const response = await axios.post(`${apiUrl}/user/register`, userEntery, { headers: { "Content-Type": "application/json" } },
                    { withCredentials: true });
                if (response.data.success === true) {
                    toast.success(response.data.message);
                    navigator("/");
                }
                else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log({ message: error.message });
            }
        }
    };

    return (
        <div className='container mt-5 p-3 rounded w-25 border shadow'>
            <h1 className='text-center'>User Register</h1>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="register" className="form-label">User Name</label>
                    <input className="form-control" type="text" id="register" name='name' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerUserEmailAddress" className="form-label">Email address</label>
                    <input className="form-control" type="email" id="registerUserEmailAddress" name='email' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerUserPassword" className="form-label">Password</label>
                    <input className="form-control" type="password" id="registerUserPassword" name='password' autoComplete="off" onChange={handleInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerRePassword" className="form-label">Re-Password</label>
                    <input className="form-control" type="password" id="registerRePassword" name='re_password' autoComplete="off" onChange={handleInput} />
                </div>
                <button type="submit" className="btn bg-success text-white">Register Now</button>
            </form>
        </div>
    );
}
export default Register;