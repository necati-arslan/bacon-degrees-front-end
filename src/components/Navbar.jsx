import React from 'react'
import companyLogo from "../assets/logo.png";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <div className="flex">
          <img src={companyLogo} alt="" />
          <div className="logo_text flex">
            Kevin Bacon Degree
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar