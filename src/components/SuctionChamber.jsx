import React from "react";
import { useState, useRef } from "react";
import { suctionChamber } from "../lib/calcHelper";

const SuctionChamber = () => {
    const [throughput, setThroughput] = useState(null);
    const [pumpingSpeed, setPumpingSpeed] = useState(null);
    const input = useRef(null);
    const output = useRef(null);
    const suction_volume = useRef(null);
    const dead_space = useRef(null);
    const speed = useRef(null);

    const calculate = () => {
        const values = suctionChamber(
            speed.current.value, 
            input.current.value, 
            output.current.value, 
            dead_space.current.value, 
            suction_volume.current.value
        );
        console.log(values);
        if(values === null){
            alert("Please input correct values");
        }
        else{
            setThroughput(values[0]);
            setPumpingSpeed(values[1]);
        }
    }
    const checkInput = (ref) => {
        let val = ref.current.value;
        if(isNaN(Number(val))){
            ref.current.classList.add('wrong-type');
        }
        else{
            ref.current.classList.remove('wrong-type');
        }
    }

    return (
        <div className="form-container" id="suction-chamber">
            <h2 className="form-heading">Calculation for a suction chamber connected to a diaphragm pump: </h2>
            <div className="input-container">
                <div>
                    <label htmlFor="input">Input Pressure (P<sub>in</sub>): </label>
                    <input type="text" id="input" ref={input} onChange={()=>checkInput(input)}/>
                </div>
                <div>
                    <label htmlFor="output">Output Pressure (P<sub>out</sub>): </label>
                    <input type="text" id="output" ref={output} onChange={()=>checkInput(output)}/>
                </div>
                <div>
                    <label htmlFor="suction-volume">Suction Chamber Volume (V<sub>s</sub>): </label>
                    <input type="text" id="suction-volume" ref={suction_volume} onChange={()=>checkInput(suction_volume)}/>
                </div>
                <div>
                    <label htmlFor="dead-space">Dead Space Volume (V<sub>D.S.</sub>): </label>
                    <input type="text" id="dead-space" ref={dead_space} onChange={()=>checkInput(dead_space)}/>
                </div>
                <div>
                    <label htmlFor="speed">Rotational Speed (n): </label>
                    <input type="text" id="speed" ref={speed} onChange={()=>checkInput(speed)}/>
                </div>
            </div>
            <button onClick={()=>calculate()}>Calculate</button>
            <div>
                <p>Throughput = {throughput ?? 'N/A'}</p>
                <p>Pumping Speed = {pumpingSpeed ?? 'N/A'}</p>
            </div>
        </div>
    );
}

export default SuctionChamber;