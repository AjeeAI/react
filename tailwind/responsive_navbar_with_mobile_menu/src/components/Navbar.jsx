export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">NaijaMarket</div>

        {/* Center Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Shop</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Deals</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
        </div>

        {/* Right Section: Cart + Login */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45 translate-y-[1px]" />
            </div>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-800 text-xs font-bold rounded-full px-1.5">2</span>
          </div>

          {/* Login Button */}
          <button className="bg-yellow-400 text-green-900 px-4 py-1.5 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Login
          </button>

          {/* Hamburger Button (Mobile Only) */}
          <div className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer group">
            <span className="block w-full h-0.5 bg-white group-hover:bg-yellow-300"></span>
            <span className="block w-full h-0.5 bg-white group-hover:bg-yellow-300"></span>
            <span className="block w-full h-0.5 bg-white group-hover:bg-yellow-300"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 space-y-3 bg-green-800 p-4 rounded-lg">
        <a href="#" className="block text-white hover:text-yellow-300">Home</a>
        <a href="#" className="block text-white hover:text-yellow-300">Shop</a>
        <a href="#" className="block text-white hover:text-yellow-300">Deals</a>
        <a href="#" className="block text-white hover:text-yellow-300">Contact</a>
      </div>
    </nav>
  );
}
