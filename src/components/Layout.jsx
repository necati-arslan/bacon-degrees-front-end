import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Navbar from './Navbar';


function Layout() {
  return (
    <div className="p-4">
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default Layout