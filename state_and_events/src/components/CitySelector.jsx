import { useState } from "react";

function Parent (){
    const [selectedCity, setSelectedCity] = useState("Lagos");

    return (
        <div>
            <CitySelector 
            selectedCity = {selectedCity}
            onSelectCity = {setSelectedCity}
            />
            <CityDisplay 
            city = {selectedCity}
            />
        </div>
    );
 }

 function CitySelector ({selectedCity, onSelectCity}){
    return (
        <div>
            <button onClick={()=> onSelectCity("Lagos")}>
                Lagos
            </button>
            <button onClick={()=>onSelectCity("Abuja")}>
                Abuja
            </button>
            <button onClick={()=>onSelectCity("Port-Harcourt")}>Port-Harcourt</button>
        </div>
    );
 }

 function CityDisplay({city}){
    return <h2>
        {city}
    </h2>
 }

export {Parent, CitySelector, CityDisplay};
