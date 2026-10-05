import "../assets/style/app.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import currencyTab from "../data/currencies.js";
import Currency from "../components/Currency.jsx";

const ConvertAppV2 = () => {

    const [euro, setEuro] = useState("1");
    const [currencies,setCurrencies] = useState([]);

    useEffect(() => {
        setCurrencies(currencyTab);
    }, []);

    const handleClick = (event) => {
        setEuro(event.target.value);
    };

    return (
        <div className="app">
            <input type="text"
            value = {euro}
            onChange={ (event) => setEuro(event.target.value)}
            /> {"€"}
            {currencies.map(elem => (
            <Currency
                eur={parseFloat(euro)}
                money={elem}
            />
            ))}
            
        </div>
    );

}
export default ConvertAppV2;