import React from 'react';

class CurrencySelector extends React.Component {

    state = { currencies: [], optionList: [] }

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
                <select className="ui dropdown">
                    <option value="">USD</option>
                    {this.state.currencyList}
                </select>
            </div>
        );
    }
}

export default CurrencySelector;
