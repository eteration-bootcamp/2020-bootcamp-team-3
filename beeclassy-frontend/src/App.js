import React from "react";
import "./App.css";
import Header from "./Components/Header"
import Navbar from "./Components/NavBar"
import Carousel from "./Components/CarouselPage"
import ProductCards from "./Components/ProductCards"
import Motto from './Components/Motto'
import Footer from './Components/Footer'


function App() {
  return (
    <React.Fragment>
    <Header />
    <Navbar />
    <Carousel />
    <ProductCards />
    <Motto />
    <Footer />
    </React.Fragment>
  );
}



export default App;
