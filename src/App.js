import React from "react";
import MouseTracker from "./MouseTracker";

// style with css in js
const containerButtonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    padding: "2%",
    border: "orange inset 15px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "rgba(255, 0, 0, 0.9)",
}

const AppStyle = {
    overflow: "hidden"
}

export default function App() {
    return (
        <div className="App" style={AppStyle}>
            <MouseTracker/>
            <div style={containerButtonStyle}>
                <a href={"https://youtu.be/hS75ZyD6mcI"} className={"btn btn-warning d-flex justify-content-center border border-3 border-secondary mb-3 mt-3"} >L'Enfer de Dante</a>
                <a href={"https://youtu.be/zqcR0z-BTs8"} className={"btn btn-warning d-flex justify-content-center border border-3 border-secondary mb-3"} >Samael le porteur de lumière, l'étoile du matin</a>
                <a href={"https://youtu.be/UoIPB55I5jI"} className={"btn btn-warning d-flex justify-content-center border border-3 border-secondary mb-3"} >Lilith, la première femme d'Adam</a>
                <a href={"https://youtu.be/FCS3bXa1l4o"} className={"btn btn-warning d-flex justify-content-center border border-3 border-secondary mb-3"} >Charon, le passeur des enfers</a>
            </div>
        </div>
    );
}



