import "../assets/style/currency.css"
import { useState } from 'react';
import { useEffect } from "react";

const CurrencyWithInput = props => {

    const code = props.money.code;
    const rate = props.money.rate;
    const symbol = props.money.symbol;

    const [value, setValue] = useState((props.euro * rate));

    useEffect(() => {
        setValue((props.euro * rate));
    }, [props.euro]);

    const handleChange = (e) => {
        setValue(e.target.value);
        props.setEuro((parseFloat(e.target.value) / rate));
    };

    return (
        <div className="currency">
            <input type="number" 
            value = {value}
            onChange={handleChange}
            
            />
            {value} {symbol}
        </div>
    );
}
export default CurrencyWithInput;