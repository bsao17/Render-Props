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

function Cat({mouse}) {
    return (
        <img src={"./skull.jpg"} style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
    );

}

function Mouse({render}) {
    const [mouse, setMouse] = useState({x: 0, y: 0})

    function handleMouseMove(event) {
        setMouse({
            x: event.clientX,
            y: event.clientY
        });
    }

    return (
        <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>
            {render(mouse)}
        </div>
    );

}

function MouseTracker() {
    return (
        <div className={"card card-body bg-success bg-gradient"}>
            <h1>Déplacez votre souris sur l’écran !</h1>
            <Mouse render={mouse => (
                <Cat mouse={mouse}/>
            )}/>
        </div>
    );
}

export default MouseTracker