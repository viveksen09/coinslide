import './Footer.css';
import React from 'react';

const modeButtonConfig = {
    light :{
        mode: "light",
        text: "Lights off"
    },
    dark: {
        mode: "dark",
        text: "Lights on"
    }
}

class Footer extends React.Component {

    state = { modeButtonText: modeButtonConfig.dark.text, mode: this.props.mode }

    onButtonClick = () => {
        if (this.state.modeButtonText === modeButtonConfig.dark.text) {
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
            <div className="footer" style={{ backgroundColor: 'black', paddingBottom: '10px' }}>
                Powered by
                <a href="https://www.coingecko.com"> coingecko </a>
                apis
                <button
                    className={`mode-button ${this.state.mode}`}
                    onClick={this.onButtonClick}
                >
                    {this.state.modeButtonText}
                </button>
            </div>
        );
    }
}

export default Footer;