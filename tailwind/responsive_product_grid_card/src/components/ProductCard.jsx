import jollofImg from "../assets/NIGERIAN JOLLOF RICE.jpg";
import ankaraImg from "../assets/ankara_fabric.jpg";

import suyaImg from "../assets/suya.jpg";
import asoebiImg from "../assets/aso_ebi.jpg";
import palmwineImg from "../assets/palm_wine.jpg"
import puffImg from "../assets/puff_puff.jpg"
import chinImg from "../assets/chin_chin.jpg"
import agbadaImg from "../assets/agbada.jpg"
function ResponsiveProductGrid() {
  const products = [
    { id: 1, name: "Jollof Rice", price: "₦1,500", imageUrl: jollofImg },
    { id: 2, name: "Ankara Fabric", price: "₦5,000", imageUrl: ankaraImg },
    { id: 3, name: "Suya", price: "₦1,000", imageUrl: suyaImg },
    { id: 4, name: "Aso-Ebi", price: "₦15,000", imageUrl: asoebiImg },
    { id: 5, name: "Palm Wine", price: "₦1,200", imageUrl: palmwineImg },
    { id: 6, name: "Agbada", price: "₦25,000", imageUrl:  agbadaImg},
    { id: 7, name: "Chin Chin", price: "₦500", imageUrl:  chinImg},
    { id: 8, name: "Puff Puff", price: "₦300", imageUrl: puffImg },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-green-600 mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsiveProductGrid;
