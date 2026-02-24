import React from 'react'
import "../styles/navbar.css"
import {    Link   } from 'react-router-dom'
import Signup from './Signup.jsx'

  
const Navbar = () => {
  return (
    <>
 
     



   <nav className="navbar navbar-expand-lg sticky-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">SHOPSi</Link >
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    
    <div>
      <form className="d-flex" role="search">
        <input className="form-control me-3" type="search" placeholder="search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit" style={{ display:"flex",justifyContent:"center", alignItems:"center"}}>Search</button>
      </form>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-0   " id="med">
        <li className="nav-item">
     <Link className="nav-link active" aria-current="page" to="/Homepage">Home</Link>
        </li>
        <li className="nav-item drpdown">
          <Link className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Mobiles</Link></li>
            <li><Link className="dropdown-item" to="/">Sports</Link></li>
            {/* <li><Link className="dropdown-divider" href='#'/></li> */}
            {/* <li><Link className="dropdown-item" to="/">Clothings</Link></li> */}
            <li><Link className="dropdown-item" to="/">Groceries</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">  
          <Link className="nav-link dropdown-toggle" to="/cart" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cart
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/order">Orders</Link></li>
            <li><Link className="dropdown-item" href="#">Payments </Link></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><Link className="dropdown-item" href="#">Tracking</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" ="true">Disabled</a>
        </li> */}
      </ul>
    <div className='' id='medi'>
      
      <Link  className='btn btn-warning' to="/Signup" id='btn1'>
      Login
      
      </Link>
      
    </div>

    </div>
  </div>



  
</nav>
  



</> ) }

export default Navbar
