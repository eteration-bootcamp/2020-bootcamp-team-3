import React from "react";
import "./App.css";
import Header from "./Components/Header"
import Navbar from "./Components/NavBar"
import Carousel from "./Components/CarouselPage"
import ProductCarts from "./Components/ProductCarts"

function App() {
  return (
    <React.Fragment>
    <Header />
    <Navbar />
    <Carousel />
    <ProductCarts />
    </React.Fragment>
  );
}



export default App;
