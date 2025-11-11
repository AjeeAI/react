import news from "../assets/news.jpg"

export default function NewsCard() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 justify-center mx-auto my-15 w-full ">
      
      {/* Featured Image */}
      <img
        src={news}
        alt="Featured news"
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-5">
        
        {/* Category Badge */}
        <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Politics
        </span>

        {/* Headline */}
        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-700 transition">
          Nigeria's Electoral Reform Gains Global Attention
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          The recent electoral reforms in Nigeria have sparked widespread
          discussions both locally and internationally, highlighting the nation’s
          efforts toward transparency and democratic development.
        </p>

        {/* Author & Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div>
            <span className="font-semibold text-gray-700">By Amina Yusuf</span>
            <span className="ml-2">• Nov 11, 2025</span>
          </div>
          <div>
            <span>5 min read</span>
          </div>
        </div>

        {/* Read More Link */}
        <a
          href="#"
          className="inline-block mt-4 text-green-700 font-semibold text-sm hover:text-green-800 transition"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
