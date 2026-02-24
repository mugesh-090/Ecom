import React, { useState } from 'react'
import '../styles/Signup.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
  e.preventDefault()

   

    toast.success("Signup Successful")
    

  

//   toast.success("Registered Successfully 🎉")
}

  return (
    
    <form onSubmit={handleSubmit} className="signup-wrapper">
  <div className="signup-card">
    <h2 className="signup-title">Create Account</h2>
    <p className="signup-subtitle">Join us and start shopping today</p>

    <div className="form-group">
      <label>Name</label>
      <input
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
        value={formData.name}
      />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input
        name="email"
        type="email"
        placeholder="example@gmail.com"
        onChange={handleChange}
        value={formData.email}
      />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="Minimum 8 characters"
        onChange={handleChange}
        value={formData.password}
      />
    </div>

    <button type="submit" className="signup-btn">
      Sign Up
    </button>
  </div>
</form>
  )
}

export default Signup
