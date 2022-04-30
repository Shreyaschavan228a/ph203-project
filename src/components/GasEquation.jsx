import React from "react";
import { calculateGasEquation } from "../lib/calcHelper";
import { useRef, useState } from "react";
const GasEquation = () => {
    const [throughput, setThroughput] = useState('N/A');
    const [pumpingSpeed, setPumpingSpeed] = useState('N/A');
    const mol = useRef(null);
    const pressure = useRef(null);
    const temp = useRef(null);
    const time = useRef(null);
    

    const calculate = () => {
        const values = calculateGasEquation(
            mol.current.value,
            pressure.current.value,
            temp.current.value,
            time.current.value
        );
        if (isNaN(values[0]) || isNaN(values[1])) {
            alert("Please input correct values");
        } else {
            setThroughput(values[0]);
            setPumpingSpeed(values[1]);
        }
    };

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
        <div className="form-container" id="gas-equation">
            <h2 className="form-heading">Calculation using Gas Equation: </h2>
            <div className="input-container">
                <div>
                    <label htmlFor="mol">Quantity of gas 'n' (in mol): </label>
                    <input type="text" id="mol" ref={mol} onChange={()=>checkInput(mol)}/>
                </div>
                <div>
                    <label htmlFor="pressure">Pressure of gas 'P' (in Pa): </label>
                    <input type="text" id="pressure" ref={pressure} onChange={()=>checkInput(pressure)}/>
                </div>
                <div>
                    <label htmlFor="temp">Temparature of gas 'T' (in K): </label>
                    <input type="text" id="temp" ref={temp} onChange={()=>checkInput(temp)}/>
                </div>
                <div>
                    <label htmlFor="time">Time 't' (in sec): </label>
                    <input type="text" id="time" ref={time} onChange={()=>checkInput(time)}/>
                </div>
            </div>
            <button onClick={() => calculate()}>Calculate</button>
            <div>
                <p>Throughput = {throughput ?? "N/A"} J/s</p>
                <p>Pumping Speed = {pumpingSpeed ?? "N/A"} m<sup>3</sup>/s</p>
            </div>
        </div>
    );
};

export default GasEquation;
