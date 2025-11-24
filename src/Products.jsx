import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card.jsx";

const Products = ({ onAddToCart, search }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://8836dd67e871e710.mokky.dev/products");
        const data = await res.json();
        console.log("Загруженные продукты:", data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Фильтрация по категории и поиску
  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search && search.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, search, category]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Загрузка товаров...</p>;
  }

  if (filteredProducts.length === 0) {
    return <p style={{ textAlign: "center" }}>Нет доступных товаров</p>;
  }

  return (
    <section className="products-section">
      <h2 className="products-title">Товары</h2>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <Card
            key={product._id || product.id}
            product={product}
            index={index}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
