export default function LoginForm() {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <form className="bg-white w-[350px] rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Login
        </h2>

        {/* Email Input */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition duration-300"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition duration-300"
          />
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit Button (Static UI) */}
        <button
          type="button"
          className="w-full py-2 rounded-lg text-white font-semibold bg-blue-700 
                     hover:bg-blue-800 transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
