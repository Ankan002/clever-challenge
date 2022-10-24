import React, {useState} from 'react';
import "./ConversionCard.css";
import moment from "moment";
import {BsSun} from "react-icons/bs"

const ConversionCard = () => {

    const [fahrenheit, setFahrenheit] = useState("");
    const [lastConvertedF, setLastConvertedF] = useState(0);
    const [celsius, setCelsius] = useState("0");

    const convertTemperature = () => {
        const cel = (parseFloat(fahrenheit) - 32) * (5/9);
        setCelsius(cel.toFixed(2).toString());
        setLastConvertedF(parseFloat(fahrenheit))
    }

    return (
        <div className="card">
            {/*Header*/}
            <div className="card-header">
                <h4 className="day">
                    {
                        `${moment().format("dddd")}`
                    }
                </h4>
                <h4>
                    {
                        `${moment().format("hh:mm a").toUpperCase()}`
                    }
                </h4>
            </div>
            {/*Body*/}
            <div className="temp-display" style={{
                color: lastConvertedF >  70 ? "#FF6464" : "#379237"
            }}>
                <h2 className="cel-text">
                    {
                        `${celsius}°C`
                    }
                </h2>

                <BsSun size={40} style={{
                    fontWeight: "900",
                    marginLeft: "20px"
                }} />
            </div>
            <input className="f-input" placeholder="Enter Fahrenheit value to convert to Celsius" type={"number"} value={fahrenheit} onChange={e => setFahrenheit(e.target.value)} />
            <button className="convert-btn" onClick={convertTemperature}>
                Convert
            </button>
        </div>
    );
};

export default ConversionCard ;
