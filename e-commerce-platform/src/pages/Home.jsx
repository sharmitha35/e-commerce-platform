import React from "react";
import "./home.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ProductCard from "../components/productcard/productcard";
import Footer from "../components/footer/footer";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 1999,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Shoes",
      price: 1499,
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <h2 className="section-title">Featured Products</h2>

      <div className="products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;