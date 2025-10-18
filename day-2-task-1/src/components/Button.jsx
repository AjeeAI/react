function Button ({text = "Click me", color = "blue"}){
    return <button style = {{backgroundColor: color}}>{text}</button>;
}
export default Button;