export default function BlogPost() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl mb-8">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
          alt="Jollof Rice and Suya Platter"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title and Metadata */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
          The Taste of Naija: Exploring the Flavors of Nigerian Street Food
        </h1>
        <div className="text-gray-600 text-sm md:text-base flex justify-center space-x-4">
          <span>By <strong>Adesoji Ajijolaoluwa</strong></span>
          <span>•</span>
          <span>Nov 12, 2025</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6 text-gray-800 leading-relaxed">
          <p>
            Nigerian cuisine is a vibrant reflection of its people — colorful, flavorful, and rich in tradition. 
            From the smoky aroma of *Suya* to the spicy comfort of *Jollof Rice*, each dish carries a story of culture and community.
          </p>
          <p>
            At the heart of this culinary diversity lies the spirit of togetherness. Food in Nigeria is more than just sustenance — 
            it’s a unifying experience that brings families, friends, and even strangers to the same table.
          </p>
          <p>
            Whether enjoyed at a bustling street corner or a high-end restaurant, dishes like *Puff Puff*, *Moi Moi*, and *Palm Wine* 
            connect people to their roots while embracing the creativity of modern culinary expressions.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mt-6">A Modern Twist on Tradition</h2>
          <p>
            With the rise of food startups and cultural festivals, Nigerian cuisine is taking its rightful place on the global stage. 
            Local chefs are redefining traditional recipes, blending indigenous ingredients with contemporary techniques to create unforgettable experiences.
          </p>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-green-800">
            “Food is the heartbeat of Nigerian culture — it tells stories no words can express.”
          </blockquote>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <h3 className="text-xl font-bold text-green-800 border-b-2 border-green-700 pb-2">
            Related Posts
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=400"
                alt="Suya on Grill"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                  Suya: Nigeria’s Favorite Street Food
                </h4>
                <p className="text-sm text-gray-500">5 min read</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400"
                alt="Palm Wine"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                  Palm Wine: The Drink of the Ancestors
                </h4>
                <p className="text-sm text-gray-500">4 min read</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=400"
                alt="Puff Puff"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                  Puff Puff & Chin Chin: Sweet Bites of Joy
                </h4>
                <p className="text-sm text-gray-500">3 min read</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
