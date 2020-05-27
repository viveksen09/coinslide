import './Footer.css';
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                Powered by
                <a style={{color: '#fab50a' }} href="https://www.coingecko.com"> CoinGecko </a>
            </div>
        );
    }
}

export default Footer;