import jollofImg from "../assets/NIGERIAN JOLLOF RICE.jpg";
import ankaraImg from "../assets/ankara_fabric.jpg";
import suyaImg from "../assets/suya.jpg";
import asoebiImg from "../assets/aso_ebi.jpg";
import palmwineImg from "../assets/palm_wine.jpg";
import puffImg from "../assets/puff_puff.jpg";
import chinImg from "../assets/chin_chin.jpg";
import agbadaImg from "../assets/agbada.jpg";

export default function HomePage() {
  const products = [
    { id: 1, name: "Jollof Rice", price: "₦1,500", imageUrl: jollofImg },
    { id: 2, name: "Ankara Fabric", price: "₦5,000", imageUrl: ankaraImg },
    { id: 3, name: "Suya", price: "₦1,000", imageUrl: suyaImg },
    { id: 4, name: "Aso-Ebi", price: "₦15,000", imageUrl: asoebiImg },
    { id: 5, name: "Palm Wine", price: "₦1,200", imageUrl: palmwineImg },
    { id: 6, name: "Agbada", price: "₦25,000", imageUrl: agbadaImg },
    { id: 7, name: "Chin Chin", price: "₦500", imageUrl: chinImg },
    { id: 8, name: "Puff Puff", price: "₦300", imageUrl: puffImg },
  ];

  const categories = [
    { id: 1, name: "Food", color: "bg-yellow-300" },
    { id: 2, name: "Clothing", color: "bg-red-300" },
    { id: 3, name: "Drinks", color: "bg-green-300" },
    { id: 4, name: "Snacks", color: "bg-blue-300" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Ajee's Corner</h1>
        <ul className="flex space-x-6 text-gray-700 font-semibold">
          <li className="hover:text-green-600 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors">Products</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors">Categories</li>
          <li className="hover:text-green-600 cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-green-100 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Ajee's Corner</h2>
        <p className="text-lg mb-6">Delicious Nigerian food, drinks, and fashion delivered to you!</p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Categories</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {categories.map(cat => (
            <div key={cat.id} className={`${cat.color} w-40 h-24 flex items-center justify-center rounded-xl text-white font-bold cursor-pointer hover:scale-105 transform transition-transform`}>
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Products</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden w-64 hover:shadow-xl transition-shadow">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-lg font-bold text-green-600 mb-4">{product.price}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-700">
          &copy; 2025 Ajee's Corner. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

