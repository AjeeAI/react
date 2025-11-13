export default function HoverExamples(){
    return (
        <div className="p-8 space-y-4" >
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Hover me
            </button>
            <div className="bg-screen-500 p-8 hover:scale-105 transition-transform cursor-pointer">
                Hover to scale
            </div>

            <button className="bg-green-600 hover:bg-green-700 hover:shadow-lg hoverL-translate-all text-white px-8 py-4 rounded-lg font-semibold">
                Hover for multiple effects
            </button>
        </div>
    )
}