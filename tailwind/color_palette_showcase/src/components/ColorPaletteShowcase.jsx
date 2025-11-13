// ColorPaletteShowcase.jsx
import React from "react";

const nigerianFlagColors = [
  { name: "Green", hex: "#008751" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Green", hex: "#008751" },
];

// Example Naija green shades (50-950)
const naijaGreenShades = [
  { name: "Naija 50", hex: "#E6F7E6" },
  { name: "Naija 100", hex: "#CCEFCC" },
  { name: "Naija 200", hex: "#99DF99" },
  { name: "Naija 300", hex: "#66CF66" },
  { name: "Naija 400", hex: "#33BF33" },
  { name: "Naija 500", hex: "#00AF00" },
  { name: "Naija 600", hex: "#009F00" },
  { name: "Naija 700", hex: "#008F00" },
  { name: "Naija 800", hex: "#007F00" },
  { name: "Naija 900", hex: "#006F00" },
  { name: "Naija 950", hex: "#005F00" },
];

function ColorCard({color}){
    return (
        <div className="flex flex-col items-center gap-2">
    <div
      className="w-20 h-20 rounded shadow-md"
      style={{ backgroundColor: color.hex }}
    />
    <p className="text-sm font-medium text-gray-900">
      {color.name}
    </p>
    <p className="text-xs text-gray-700">{color.hex}</p>
  </div>
    )
}

export default function (){
    return (
         <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Nigerian Flag Colors</h2>
    <div className="grid grid-cols-3 gap-4 mb-8">
      {nigerianFlagColors.map((color, index) => (
        <ColorCard key={index} color={color} />
      ))}
    </div>

    <h2 className="text-xl font-bold mb-4">Naija Green Shades</h2>
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {naijaGreenShades.map((color, idx) => (
        <ColorCard key={idx} color={color} />
      ))}
    </div>
  </div>
    )
}


