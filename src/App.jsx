import { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ContextProvider, Productcontext } from "../context/product";
import { fetchdata } from "../API/axiosFetch.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ViewCart from "./pages/ViewCart.jsx";
import ProductDetails  from './pages/ProductDetails'
function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewcart" element={<ViewCart />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
