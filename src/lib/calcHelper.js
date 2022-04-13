export function calculateGasEquation(mol, pressure, temp, time){
    console.log(arguments);
    Array.from(arguments).forEach(element => {
        if(isNaN(Number(element)) || element === ''){
            return null;
        }
    });
    const throughput = ((mol*8.314*temp)/time).toFixed(3);
    const pumpingSpeed = (throughput/pressure).toFixed(3);
    
    return [throughput, pumpingSpeed];
}

export function suctionChamber(speed, input, output, dead_space, suction_volume){
    console.log(arguments);
    Array.from(arguments).forEach(element => {
        if(isNaN(Number(element)) || element === ''){
            console.log("a");
            return null;
        }
    });
    const throughput = (speed*(suction_volume*input - dead_space*output)).toFixed(3);
    const pumpingSpeed = (throughput/input).toFixed(3);


    return [throughput, pumpingSpeed];
}



