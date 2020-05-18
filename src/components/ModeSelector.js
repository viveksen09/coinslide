import React from 'react';

class ModeSelector extends React.Component {

    state = { mode: 'dark', checked: '' }

    componentWillReceiveProps(props) {
        if (this.state.mode !== props.mode) {
            if (props.mode === 'light') {
                this.setState({ mode: props.mode, checked: 'checked' });
            } else {
                this.setState({ mode: props.mode, checked: '' });
            }
        }
    }

    onModeSelected = (event, mode) => {
        if (mode === 'dark') {
            this.setState({ mode: 'light', checked: 'checked' });
            this.props.onModeChanged('light');
            return;
        }
        this.setState({ mode: 'dark', checked: '' });
        this.props.onModeChanged('dark');
    }

    render() {
        return (
            <div>
                <div className="ui checkbox">
                    <input type="checkbox" checked={this.state.checked} name="public" onChange={(e) => this.onModeSelected(e, this.state.mode)}/>
                    <label style={{ color: '#fab50a'}}>Lights ON</label>
                </div>
            </div>
        );
    }

}

export default ModeSelector;