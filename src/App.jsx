import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Homepage from './pages/Homepage'
// import Home from './components/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Home from './components/Home.jsx'
import Categories from './components/categories.jsx'
import Signup from './components/Signup.jsx'
import Navbar from './components/navbar.jsx'
import ProductList from './components/ProductList.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Order from './components/Order.jsx'

function App() {
 

  return (
    <>
    <Navbar/>
    <ToastContainer />
    {/* <ProductList/> */}
    <Routes>
      {/* <Navbar/> */}
         
       <Route   path='/' element={<Home/>}/>
       {/* <Route   path='/Categories' element={<Categories/>}/> */}
       <Route   path='/Signup' element={<Signup/>}/>
       <Route   path='/Homepage' element={<Homepage/>}/>
       <Route   path='/mobiles' element={<Categories/>}/>
       <Route   path='/order' element={<Order/>}/>
     

       
       
       


    </Routes>
      
    </>
  )
}

export default App
