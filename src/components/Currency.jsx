import "../assets/style/currency.css"


const Currency = props => {

    const code = props.money.code;
    const rate = props.money.rate;
    const symbol = props.money.symbol;

    const euro = props.eur;

    const value = euro * rate;

    return (
        <div className="currency">
            {value} {symbol}
        </div>
    );
}
export default Currency;