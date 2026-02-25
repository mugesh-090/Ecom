import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">SHOPSi</Link>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* Search Bar */}
            <form className="d-flex my-2 my-lg-0 search-form" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>

            {/* Nav Links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/Homepage">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="/cart" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Cart
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/order">
                      Orders
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Login Button */}
              <li className="nav-item">
                <Link className="btn btn-warning ms-lg-3 login-btn" to="/Signup">
                  Login
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
