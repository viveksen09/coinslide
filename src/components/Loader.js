import './Loader.css';
import React from 'react';

class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { message: props.message };
    }

    render() {
        return (
            <div className="ui segment loading-spinner">
                <div className="ui active dimmer">
                    <div className="ui text loader">{this.props.message}</div>
                </div>
                <p></p>
            </div>
        );
    }
}

export default Loader;