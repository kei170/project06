import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Cart from "./component/Cart";

import React from 'react';


function App(){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  )
}



export default App;