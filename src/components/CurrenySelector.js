import React from 'react';

class CurrencySelector extends React.Component {

    state = { currencies: [], optionList: [] , selectedCurrency: 'usd'}

    onCurrecySelect= (event) => {
        this.props.onCurrencySelected(event.target.value);
    };

    componentWillReceiveProps(props) {
        if (props.currencies.length !== 0 && this.state.currencies.length === 0) {
            var currencies = []
            var currencyList = []
            for (var key in props.currencies) {
                currencies.push(key.toUpperCase());
                currencyList.push(<option key={key} value={key}>{key.toUpperCase()}</option>)
            }
            this.setState({ currencies, currencyList });
        }
    }

    render() {
        return (
            <div>
                <label>Select Currency:  </label>
                <select className="ui dropdown" onChange={(e) => this.onCurrecySelect(e)}>
                    <option value="usd">USD</option>
                    {this.state.currencyList}
                </select>
            </div>
        );
    }
}

export default CurrencySelector;
