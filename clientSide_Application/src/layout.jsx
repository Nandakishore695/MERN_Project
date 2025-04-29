import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './component/ReducComponent/feature/authSlice';
import axios from "axios";

function Layout() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const cartItems = useSelector(state => state.cart.cartItems.length);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;

    const handleLogout = () => {
        toast('Successfully Logout!', { icon: '👏', });
        dispatch(logout())
        navigate("/")

    }
    const handleProfile = () => { navigate("/profile") }
    const handleAdmin = () => { navigate("/admin") }

    const handleSearchGlobal = (event) => {
        const searchValue = event.target.value.toLowerCase().trim();
        setSearchValue(searchValue);

    }
    const handleSubmitSearch = async (event) =>{
        event.preventDefault();
        console.log(searchValue);
        if(!searchValue){
           return toast.error("Please enter a search term");
        }
        else{
           const apiResponse = await axios.get(
                `${apiUrl}/product/searchProduct/${searchValue}`,
                { headers: { "Content-Type": "application/json" } },
                { withCredentials: true }
              );
            //   dispatch(productSearchView());
            navigate(`/search/${searchValue}`);
            setSearchValue("");
            toast.success("Search successfully")
        }
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-success shadow-sm">
                <div className="container">
                    <Toaster position="top-center" reverseOrder={false} />
                    <NavLink to="/product" className='text-white text-decoration-none fw-bold fs-2' > <span className='text-black'>MERN.</span> E-Commerce</NavLink>

                    {/* Mobile Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <form
                            className="d-flex mx-auto my-2 my-lg-0 w-50"

                        >
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search for products"
                                name='search'
                                autoComplete='off'
                                value={searchValue}
                                onChange={handleSearchGlobal}
                            />
                            <button className="btn btn-outline-light  ms-2" type="submit" onClick={handleSubmitSearch}>
                                <FaSearch />
                            </button>
                        </form>

                        <div className="d-flex align-items-center">
                            {!isAuthenticated ? <>
                                <NavLink to="/login" className="btn btn-light  mx-2" >Login</NavLink>
                                <NavLink to="/register" className="btn btn-light  mx-2">Register</NavLink>
                            </> : <>
                                <NavLink to="/cart" className="btn btn-light position-relative  mx-2"><FaCartPlus />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems}</span>
                                </NavLink>
                                <button className="btn btn-light  mx-2" onClick={handleProfile}>Profile</button>
                                <button className="btn btn-light  mx-2" onClick={handleLogout}>Logout</button>
                                <button className="btn btn-light  mx-2" onClick={handleAdmin}>Admin Dashboard</button></>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Layout