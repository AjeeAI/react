

export default function Navbar(){
    return (
        <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                {/*Logo*/}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        N
                    </div>
                    <span className="text-xl font-bold text-gray-800">
                        NaijaStore
                    </span>
                </div>
            </div>
        </div>
    </nav>
    )
}