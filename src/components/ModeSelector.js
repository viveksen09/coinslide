import React from 'react';

class ModeSelector extends React.Component {

    state = { mode: this.props.mode }

    onModeSelected = (event, mode) => {
        if (mode === 'dark') {
            this.setState({ mode: 'light'});
            this.props.onModeChanged('light');
            return;
        }
        this.setState({ mode: 'dark'});
        this.props.onModeChanged('dark');
    }

    render() {
        return(
            <div className="ui slider checkbox mode-button" >
                <input type="checkbox" name="newsletter" onChange={(e) => this.onModeSelected(e, this.state.mode)} />
                <label style={{ color: 'white' }}>Day</label>
            </div>
        );
    }

}

export default ModeSelector;