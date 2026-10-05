import "../assets/style/app.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import currencyTab from "../data/currencies.js";
import Currency from "../components/Currency.jsx";

const ConvertAppV1 = () => {

    const [euro, setEuro] = useState("1");
    const [currencies,setCurrencies] = useState([]);

    useEffect(() => {
        setCurrencies(currencyTab);
    }, []);

    const inputRef = useRef();

    const handleClick = () => {
        const value = inputRef.current.value; 
        setEuro(value);
    };

    return (
        <div className="app">
            <input type="text" ref={inputRef} />

            <button onClick={handleClick}>
                OK
            </button>
            {currencies.map(elem => (
            <Currency
                eur={parseFloat(euro)}
                money={elem}
            />
            ))}
            
        </div>
    );

}
export default ConvertAppV1;