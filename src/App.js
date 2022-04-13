import React from "react";
import Header from "./components/Header.jsx";
import './global.css';
import GasEquation from "./components/GasEquation.jsx";
import SuctionChamber from "./components/SuctionChamber.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <h1 id="heading">Calculation of Throughput and Pumping Speed: </h1>
            <GasEquation />
            <SuctionChamber />
            <Footer />
        </div>
    );
}

export default App;
