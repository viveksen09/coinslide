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
            <div>
                <div class="ui toggle checkbox">
                    <input type="checkbox" name="public" onChange={(e) => this.onModeSelected(e, this.state.mode)}/>
                    <label style={{ color: 'gold'}}>Day</label>
                </div>
                
            </div>
        );
    }

}

export default ModeSelector;