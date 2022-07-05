import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Newslaetter from "../components/Newslaetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newslaetter />
      <Footer/>
    </div>
  );
}

export default Home;
