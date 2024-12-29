import React, { useEffect, useState } from "react";
import { DataCard } from "./Data";
import "./Home.css";

const Home = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="home-container">
      <h1>Welcome to TechCart</h1>
      <p>Your one-stop shop for all your favorite tech products.</p>

      <header className="home-header">
        <div className="banner">
          <div className="banner-overlay">
            <img
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K0VvSjFQM0pLN0VsK2pmbVJmK1hUZDhiZjRKRUJ6ZU96N3VHVCtXdS9WdVUzdWN4ZENIZEJCc01VOW1QK3BzTGVNdlIyKy9FMURXQmRzdk1KZVhnSDh1WjFlQndWT3ZmeW5zc3dRUHliS2dB&traceId=1"
              alt="iPhone 16 Pro"
              className="banner-image"
            />
            <div className="banner-text">
              <h1 className="iphone">Introducing iPhone 16 Pro</h1>
              <p>Explore the newest features in smartphone innovation.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="home-products">
        <h2>Featured Products</h2>
        <div className="products-container">
          {products.length > 0 ? (
            products
              .filter(
                (product) =>
                  product.title.toLowerCase().includes(query) ||
                  product.brand.toLowerCase().includes(query)
              )
              .map((product) => (
                <DataCard
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  brand={product.brand}
                  category={product.category}
                  price={product.price}
                  image={product.thumbnail}
                  rating={product.rating}
                />
              ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
