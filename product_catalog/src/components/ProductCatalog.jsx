import { useState } from "react";
import "./Products.css";

function ProductCatalog() {
  const allProducts = [
    { name: "Hotplate", price: 20000, inStock: true, category: "Electronics" },
    { name: "Denim Jacket", price: 12000, inStock: true, category: "Fashion" },
    { name: "Nike AIRFORCE One", price: 25000, inStock: true, category: "Fashion" },
    { name: "Golden Penny Spaghetti", price: 1500, inStock: false, category: "Food items" },
  ];

  const [products, setProducts] = useState(allProducts);

  function showAll() {
    setProducts(allProducts);
  }

  function filterByCategory(category) {
    const filtered = allProducts.filter((product) => product.category === category);
    setProducts(filtered);
  }

  return (
    <ProductDisplay
      products={products}
      showAll={showAll}
      filterByCategory={filterByCategory}
    />
  );
}

function ProductDisplay({ products, showAll, filterByCategory }) {
  return (
    <div className="list">
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={index}
            className={`product-card ${product.inStock ? "inStock" : "out_of_stock"}`}
          >
            <p><strong>{product.name}</strong></p>
            <p>₦{product.price.toLocaleString()}</p>
            <p>{product.category}</p>
            {product.inStock && <button>Add to cart</button>}
          </div>
        ))}
      </div>

      <div className="filter-buttons">
        <button className="filter-button" onClick={showAll}>
          All
        </button>
        <button className="filter-button" onClick={() => filterByCategory("Electronics")}>
          Electronics
        </button>
        <button className="filter-button" onClick={() => filterByCategory("Fashion")}>
          Fashion
        </button>
        <button className="filter-button" onClick={() => filterByCategory("Food items")}>
          Food
        </button>
      </div>
    </div>
  );
}

export { ProductCatalog, ProductDisplay };
