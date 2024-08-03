import { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'

function App() {

  return (
   <>
   <div className='w-10/12 m-auto'>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/placeorder' element={<PlaceOrder/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App
