import React from 'react'
import { NavLink, useNavigate, Link } from "react-router";

const Admin = () => {
  const navigate = useNavigate();

  const handleUserList = (type) => {
    if (type === "allUser") {
      navigate("/admin/alluser");
    }
    else if (type === "addproduct") {
      navigate("/admin/addproduct");

    }
    else if (type === "manageProduct") {
      navigate("/admin/manageproduct");
    }
  }
  return (
    <div>
      <button onClick={() => handleUserList("addproduct")}>Admin Add Product</button>
      <button onClick={() => handleUserList("allUser")}>All User Detail</button>
      <button onClick={() => handleUserList("manageProduct")}>Manage Product</button>
    </div>
  )
}
export default Admin;