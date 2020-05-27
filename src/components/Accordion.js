import './Accordion.css';
import React from 'react';
import CurrencySelector from './CurrenySelector';
import ModeSelector from './ModeSelector';

class Accordion extends React.Component {

    state = { selection: '' , mode: this.props.mode, currency: this.props.currency };

    onModeChanged = (mode) => {
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
        this.setState({ mode: props.mode, currency: props.currency });
    }

    render() {
        return(
            <div>
                <div className="ui inverted accordion">
                    <div className={`${this.state.selection} title`} onClick={(e) => { this.onAccordionClick(e) }} >
                        <i className="cogs icon"></i>
                        <i className="dropdown icon"></i>
                    </div>
                    <div className={`${this.state.selection} content`}>
                        <div className="ui two column grid">
                            <div className="row">
                                <div className="column mode">
                                    <ModeSelector mode={this.state.mode} onModeChanged={this.onModeChanged} />
                                </div>
                                <div className="column" style={{paddingRight: '40px'}}>
                                    <CurrencySelector currency={this.state.currency} onCurrencySelected={this.onCurrencySelected} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;