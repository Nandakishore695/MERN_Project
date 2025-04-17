import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Layout from './layout.jsx';
import Login from "./component/User/Login.jsx";
import Register from "./component/User/Register.jsx";
import Product from './component/Product/ShowProduct.jsx';
import Cart from "./component/Cart/Cart.jsx"
import ShippingAddress from './component/Cart/ShippingAddress.jsx';
import CheckoutAddress from './component/Cart/CheckoutAddress.jsx';
import UserProfile from './component/User/UserProfile.jsx';
import ViewProduct from './component/Product/ViewProduct.jsx';
import { store } from './component/ReducComponent/store.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ViewProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shippingAddress" element={<ShippingAddress />} />
        <Route path="checkoutAddress" element={<CheckoutAddress />} />
      </Routes>
    </BrowserRouter>
  </Provider>

  ,
)