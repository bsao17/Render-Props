import React, {useState} from "react";
import styled from "styled-components";

const PositionX = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-shadow: white 1px 1px 2px;
`

const PositionY = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-shadow: white 1px 1px 2px;
`


export default function Mouse() {
    const [posMouse, setPosMouse] = useState({x: 0, y: 0})
    //mouse tracking function
    function handleMouseTracking(event) {
        setPosMouse({x: event.clientX, y: event.clientY})
    }
    return (
        <div className="App" style={{width: "100%", height: "100vh"}} onMouseMove={handleMouseTracking}>
            la position de la souris est actuellement (X: {posMouse.x} et Y: {posMouse.y})
        </div>
    );
}

// Tracker component
export function MouseTracker({posMouse}) {
    return (
        <div style={{width: "100%"}}>
            <div
                className={
                    "card card-body text-light " +
                    "d-flex flex-column justify-content-center align-items-center " +
                    "m-5 pt-5 pb-5 bg-success bg-opacity-50 bg-gradient"
                }
            >
                <PositionY>
                    <Mouse/>
                </PositionY>
            </div>
        </div>
    )
}
