import React, {useState} from "react";
import styled from "styled-components";
import styles from "./mouseTracker.module.scss"

// style with styled-component
const PositionMouse = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-shadow: white 1px 1px 2px;
`

function Cat({mouse}) {
    return (
        <PositionMouse>
            <img src={"./skull.jpg"} style={
                {
                    position: 'absolute',
                    left: mouse.x,
                    top: mouse.y,
                    borderRadius: "50%",
                    boxShadow: "10px 10px 20px #d90012,-10px -10px 20px #ff0018",
                    padding: "20px",
                    zIndex: "10"
                }
            }/>
            <h1 className={styles.title} >Dive in Hell ...</h1>
        </PositionMouse>
    );
}

function Mouse({render}) {
    const [mouse, setMouse] = useState({x: 0, y: 0})

    function whenMouseMove(event) {
        setMouse({
            x: event.clientX,
            y: event.clientY
        });
    }
    return (
        <div style={{height: '100vh'}} onMouseMove={whenMouseMove}>
            {render(mouse)}
        </div>
    );
}

function MouseTracker() {
    return (
        <div className={"card card-body"} style={{backgroundColor: "#FF0015"}}>
            <Mouse render={mouse => (
                <Cat mouse={mouse}/>
            )}/>
        </div>
    );
}

export default MouseTracker