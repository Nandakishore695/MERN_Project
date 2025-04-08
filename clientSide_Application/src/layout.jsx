import React from 'react'
import { NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from './component/redux/slice';
import toast, { Toaster } from 'react-hot-toast';

function Layout() {
    const count = useSelector((state) => state.login?.value);
    const cart = useSelector((state) => state.login?.cartValue);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        toast('Successfully Logout!', { icon: '👏', });
        dispatch(logout());
    }
    const handleProfile = () => { navigate("/profile") }

    return (
        <>
            <header className=' container-fluid bg-success'>
                <Toaster position="top-center" reverseOrder={false} />
                <nav className='navbar navbar-expand-lg' >

                    <ul className='container d-flex list-unstyled text-decoration-none mt-2 '>
                        <li className='fs-2'><NavLink to="/product" className='text-white text-decoration-none fw-bold' > <span className='text-black'>MERN.</span> E-Commerce</NavLink></li>
                        <li><input className='p-2 rounded border-0' type='search' name="productSearch" placeholder='Search for any brand' /></li>
                        {!count ? <>
                            <li><NavLink to="/login" className='bg-secondary p-2 rounded text-white text-decoration-none' href='/login'>login</NavLink></li>
                            <li><NavLink to="/register" className='bg-info p-2 rounded text-white text-decoration-none'>register</NavLink></li> </>
                            : <>
                                <li><NavLink to="/cart" className='bg-primary p-2 rounded text-white text-decoration-none position-relative border-0'>Bag
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart}</span>
                                </NavLink></li>
                                <li><button className='bg-info p-2 rounded text-white text-decoration-none border-0' onClick={handleProfile}>Profile</button></li>
                                <li><button className='bg-danger p-2 rounded text-white text-decoration-none border-0' onClick={handleLogout}>Logout</button></li>
                            </>
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Layout