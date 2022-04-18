import React from "react";
import MouseTracker from "./MouseTracker";

const buttonStyle = {
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
            <div style={buttonStyle}>
                <button className={"btn btn-warning d-flex justify-content-center border border-3 border-secondary mb-3"} >Enter dans l'enfer de Dante</button>
                <button className={"btn btn-warning d-flex justify-content-center border border-3 border-secondary"} >Enter dans l'enfer de Samael</button>
            </div>
        </div>
    );
}



