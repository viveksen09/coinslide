import './Footer.css';
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                Powered by
                <a href="https://www.coingecko.com"> coingecko </a>
                apis
            </div>
        );
    }
}

export default Footer;