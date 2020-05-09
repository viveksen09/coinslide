import './Accordion.css';
import React from 'react';
import CurrencySelector from './CurrenySelector';
import ModeSelector from './ModeSelector';

class Accordion extends React.Component {

    state = { selection: '' , currencies: [], mode: this.props.mode };

    onModeChanged = (mode) => {
        console.log("Current mode : " + mode);
        this.setState({ mode });
        this.props.onModeChange(mode);
    }

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
                {/* <div className="ui inverted segment"> */}
                    <div className="ui inverted accordion">
                        <div className={`${this.state.selection} title`} onClick={(e) => {this.onAccordionClick(e)}} >
                            <i className="cogs icon"></i>
                            <i className="dropdown icon"></i>
                        </div>
                        <div className={`${this.state.selection} content`}>
                            <div className="ui six column grid">
                                <div className="row">
                                    <div className="column blank"></div>
                                    <div className="column blank"></div>
                                    <div className="column blank"></div>
                                    <div className="column blank"></div>
                                    <div className="column mode">
                                        <ModeSelector mode={this.state.mode} onModeChanged={this.onModeChanged} />
                                    </div>
                                    <div className="column">
                                        <CurrencySelector currencies={this.state.currencies} onCurrencySelected={this.onCurrencySelected} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Accordion;