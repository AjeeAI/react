import "./StateCard.css"
function StateCard({state, capital, region, population, children}){
    return (
        <div className="state-card" style={{backgroundColor: region === "North"? "#8B4513": region === "South"? "#008751": region === "East"? "#FFD700": "#4169E1"}}>
            
            <div className="group">
                <h2>{state}</h2>
                <p className="capital">{capital}</p>
            
            </div>
            <p>{region}</p>
            <p>{population}</p>
            <p> Famous landmark: {children}</p>
        </div>
    );
}

export default StateCard;