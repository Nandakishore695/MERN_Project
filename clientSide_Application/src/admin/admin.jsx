import React from 'react'
import { NavLink, useNavigate, Link } from "react-router";

const Admin = () => {
  const navigate = useNavigate();

  const handleUserList = (type) => {
    if (type === "allUser") {
      navigate("/admin/alluser")
    }
    else if (type === "addproduct") {
      navigate("/admin/addproduct")

    }
    else if (type === "product") {
      navigate("/admin/addproduct")

    }
  }
  return (
    <div>
      <button onClick={() => handleUserList("product")}>All Product</button>
      <button onClick={() => handleUserList("addproduct")}>Amin Add Product</button>
      <button onClick={() => handleUserList("allUser")}>All User Detail</button>
    </div>
  )
}

export default Admin;
