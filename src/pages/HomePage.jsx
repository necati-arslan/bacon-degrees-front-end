import React from 'react'
import companyLogo from "../assets/logo.png";


function HomePage() {
  return (
    <section className="welcomePage">
      <div className="logo">
        <div className="flex">
          <img src={companyLogo} alt="" />
          <div className="logo_text">
            <span> Find</span>Recipe<span>By</span>Ingredients
          </div>
        </div>
      </div>

      <div className="container flex">
              

              
      </div>



    </section>
  )
}

export default HomePage