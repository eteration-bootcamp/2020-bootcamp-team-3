import React from "react";
import "./App.css";
import Header from "./Components/Header"
import Navbar from "./Components/NavBar"
import Carousel from "./Components/CarouselPage"
import ProductCards from "./Components/ProductCards"

function App() {
  return (
    <React.Fragment>
    <Header />
    <Navbar />
    <Carousel />
    <ProductCards />
    </React.Fragment>
  );
}



export default App;
