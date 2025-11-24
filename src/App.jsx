import React, { useState } from "react";
import Header from "./Header.jsx";
import Products from "./Products.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState(""); 

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app">
      <Header cartCount={cartCount} search={search} setSearch={setSearch} />
      <Products onAddToCart={handleAddToCart} search={search} />
      <Footer />
    </div>
  );
}

export default App;






