import React, {useState} from "react";
import styled from "styled-components";

const PositionX = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-shadow: white 1px 1px 2px;
`

const PositionY= styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-shadow: white 1px 1px 2px;
`

export default function App() {
    const[posX, setPosX] = useState(0)
    const[posY, setPosY] = useState(0)

    //mouse tracking function
    function mouseTracking(event){
        setPosX(event.clientX)
        setPosY(event.clientY)
    }
  return (
    <div className="App" onMouseMove={mouseTracking}>
        <MouseTracker posX={posX} posY={posY}/>
    </div>
  );
}

// Tracker component
function MouseTracker({posX, posY}) {
    return (
        <div  style={{width: "100%"}}>
            <div className={"card card-body text-light d-flex flex-column justify-content-center align-items-center m-5 pt-5 pb-5 bg-success bg-opacity-50 bg-gradient"} >
                <h5>Position mouse X is : </h5>
                <PositionX>{posX}</PositionX>
                <h5>Position mouse Y is : </h5>
                <PositionY>{posY}</PositionY>
            </div>
        </div>
    )
}


