export default function ProductCard() {
  return (
    <div className="bg-blue-100 w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg  w-[300px] h-[400px] flex flex-col items-center transition-transform duration-500 hover:scale-105">
        {/* Product Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="/src/assets/agbada.jpg"
            alt="Agbada"
            className="w-[300px] h-64 object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Product Name */}
        <p className="mt-4 text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-700">
          Agbada
        </p>

        {/* Product Price */}
        <p className="text-lg font-medium text-gray-600">₦35,000</p>

        {/* Add to Cart Button */}
        <button
          className="mt-4 bg-blue-700 text-white w-32 h-10 rounded-lg font-medium
                     transition-all duration-300 hover:bg-blue-800 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
