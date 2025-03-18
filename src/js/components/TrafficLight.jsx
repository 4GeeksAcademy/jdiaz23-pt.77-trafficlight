import React, from "react";
import { useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    // const [hidden, setSelected] = useState("red")
   
const cycleLight = () => {
    if (color == "red") {
       setColor("yellow")
    }
    else if (color == "yellow") {
        setColor("green")
    }
    else {
        setColor("red")
    }
}

    return (
        <div>
            <div className="trafficPole container"></div>
            <div className="lightGroup container">
                <div onClick={() => setColor("red")} className={"red " + (color === "red" ? "activeRed" : "")}></div>
                <div onClick={() => setColor("yellow")} className={"yellow " + (color === "yellow" ? "activeYellow" : "")}></div>
                <div onClick={() => setColor("green")} className={"green " + (color === "green" ? "activeGreen" : "")}></div>
            </div>

        <div className="buttonBox">
            <button onClick={cycleLight} className="btn btn-danger btn-lg" id="btnStart">Cycle Me</button>
           {/* <button onClick={() =>setHidden(!hidden)} className="btn btn-danger btn-lg" id="btnDont">Don't click</button> 
            <div className={hidden == true ? : "" : "hidden"} onClick = {() => setSelected("red")}></div>
            */}
        </div>
        </div>
    );
};

export default TrafficLight;


