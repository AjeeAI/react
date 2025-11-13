

export default function GroupHover(){
    return (
        <div className="p-8 space-y-4">
            <h2>
                Group Hover Example
            </h2>

            <div className="group bg-white p-6 rounded-lg shadow hover: shadow-xl transition-shadow cursor-pointer"> 
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    Product Title
                </h3>

               <p className="text-gray-600 mt-2 group-hover:text-gray-800">
                Hover on the card to see effects
               </p>
               <button className="mt-4 bg-gray-200 group-hover:bg-green-600 group-hover: text-white px-4 py-2 rounded transition-all">
                    View Details
               </button>
            </div>
        </div>
    )
}