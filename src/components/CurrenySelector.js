import React from 'react';

class CurrencySelector extends React.Component {

    state = { currencies: [], optionList: [] , selectedCurrency: this.props.currency, showMenu: ''}

    onCurrencySelect = (e, symbol) => {
        this.props.onCurrencySelected(symbol);
        this.setState({ showMenu: '', selectedCurrency: symbol });
    };

    onDropDownClick = (e) => {
        if (this.state.showMenu === 'show') {
            this.setState({showMenu: ''});
        } else {
            this.setState({showMenu: 'show'});
        }
    }

    componentWillReceiveProps(props) {
        if (props.currency !== this.state.selectedCurrency) {
            this.setState({ selectedCurrency: props.currency});
        }
    }

    render() {
        var transition = 'transition hidden';
        var buttonState = '';
        var blockStyle = {}
        if (this.state.showMenu === 'show') {
            transition = "transition visible";
            buttonState = "active visible";
            blockStyle = {display: 'block !important'}
        }
        return (            
            <div className="ui yellow buttons">
                <div className="ui button"> Price in {this.state.selectedCurrency.toUpperCase()} </div>
                <div className={`ui floating dropdown icon button ${buttonState}`} onClick={(e) => this.onDropDownClick(e)}>
                    <i className="dropdown icon"></i>
                    <div className={`menu ${transition}`} style={blockStyle}>
                        <div className="item" value="btc" onClick={(e) => this.onCurrencySelect(e, "btc")}>BTC - Bitcoin</div>
                        <div className="item" value="cad" onClick={(e) => this.onCurrencySelect(e, "cad")}>CAD - Canadian Dollar</div>
                        <div className="item" value="cny" onClick={(e) => this.onCurrencySelect(e, "cny")}>CNY - Chinese Yuan</div>
                        <div className="item" value="eth" onClick={(e) => this.onCurrencySelect(e, "eth")}>ETH - Etherium</div>
                        <div className="item" value="eur" onClick={(e) => this.onCurrencySelect(e, "eur")}>EUR - Euro</div>
                        <div className="item" value="gbp" onClick={(e) => this.onCurrencySelect(e, "gbp")}>GBP - Pound Sterling</div>
                        <div className="item" value="ltc" onClick={(e) => this.onCurrencySelect(e, "ltc")}>LTC - Litecoin</div>
                        <div className="item" value="inr" onClick={(e) => this.onCurrencySelect(e, "inr")}>INR - Indian Rupee</div>
                        <div className="item" value="jpy" onClick={(e) => this.onCurrencySelect(e, "jpy")}>JPY - Japanese Yen</div>
                        <div className="item" value="usd" onClick={(e) => this.onCurrencySelect(e, "usd")}>USD - US Dollar</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrencySelector;
