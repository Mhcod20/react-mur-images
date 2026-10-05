import "../assets/style/app.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import currencyTab from "../data/currencies.js";
import Currency from "../components/Currency.jsx";
import CurrencyWithInput from "../components/CurrencyWithInput.jsx";

const ConvertAppV3 = () => {

    const [euro, setEuro] = useState("1");
    const [currencies,setCurrencies] = useState([]);

    useEffect(() => {
        setCurrencies(currencyTab);
    }, []);


    return (
        <div className="app">
            
            {currencies.map(elem => (
                <CurrencyWithInput
                    key={elem.code}
                    money={elem}
                    euro={parseFloat(euro)}
                    setEuro={setEuro}
                />
            ))}
            
        </div>
    );

}
export default ConvertAppV3;