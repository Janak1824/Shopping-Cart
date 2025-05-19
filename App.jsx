import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Fav from "./Components/Fav";
import Singleproduct from "./Components/Singleproduct";

function App() {

    const[product ,setProduct] = useState([])

    useEffect(()=>{
      fetch(" https://fakestoreapi.com/products/").then((res)=>{
          return res.json()
      }).then((data)=>{
          setProduct(data)
      })
    }, [])

  return (
   <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage productdata ={product}/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Fav/>} />
        <Route path="/singleproduct/:id" element={<Singleproduct/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
