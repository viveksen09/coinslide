import React from 'react';
import CurrencySelector from './CurrenySelector';

class Accordion extends React.Component {

    state = { selection: '' , currencies: [] };

    onCurrencySelected = (currency) => {
        this.props.onCurrencySelect(currency);
    }

    onAccordionClick = (event) => {
        if (this.state.selection === '') {
            this.setState({ selection: 'active' });
        } else {
            this.setState({ selection: '' });
        }
    };

    componentWillReceiveProps(props) {
        if (this.state.currencies.length === 0 && props.response != null ) {
            this.setState({ currencies: props.response.data[0].market_data.current_price });
        }
    }

    render() {
        return(
            <div>
                <div className="ui inverted segment">
                    <div className="ui inverted accordion">
                        <div className={`${this.state.selection} title`} onClick={(e) => {this.onAccordionClick(e)}} >
                            <i className="cogs icon"></i>
                            <i className="dropdown icon"></i>
                        </div>
                        <div className={`${this.state.selection} content`}>
                            <CurrencySelector currencies={this.state.currencies} onCurrencySelected={this.onCurrencySelected} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;