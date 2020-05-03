import './Footer.css';
import React from 'react';

const modeButtonConfig = {
    light :{
        mode: "light",
        text: "Night"
    },
    dark: {
        mode: "dark",
        text: "Day"
    }
}

class Footer extends React.Component {

    state = { modeButtonText: modeButtonConfig.dark.text, mode: this.props.mode }

    onButtonClick = (event, currentMode) => {
        if (currentMode === 'dark') {
            this.setState(
                { 
                    modeButtonText: modeButtonConfig.light.text,
                    mode: modeButtonConfig.light.mode
                }
            );
            this.props.onModeChange(modeButtonConfig.light.mode);
            return;
        }
        this.setState(
            { 
                modeButtonText: modeButtonConfig.dark.text,
                mode: modeButtonConfig.dark.mode
            }
        );
        this.props.onModeChange(modeButtonConfig.dark.mode);
    };

    render() {
        return (
            <div className={`footer-${this.state.mode}`}>
                Powered by
                <a href="https://www.coingecko.com"> coingecko </a>
                apis
                <div className="ui slider checkbox mode-button" >
                    <input type="checkbox" name="newsletter" onChange={(e) => this.onButtonClick(e, this.state.mode)}  />
                    <label style={{ color: 'white' }}>{this.state.modeButtonText}</label>
                </div>
            </div>
        );
    }
}

export default Footer;