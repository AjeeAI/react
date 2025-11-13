

export default function Animations (){
    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
                </div>
                <span>
                    Loading
                </span>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse">
                </div>
                <span>Pulsing</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full animate-bounce">
                
                </div>
                <span>Bouncing</span>
            </div>
        </div>
    )
}