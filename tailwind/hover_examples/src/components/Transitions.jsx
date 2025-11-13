

export default function Transitions (){
    return (
        <div className="p-8 space-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 hover:scale-110 text-white px-6 py-3 rounded-lg transition-all duration-300">
                Transition All (300ms)
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-500">
                Transition Colors (500ms)
            </button>
        </div>
    )
}