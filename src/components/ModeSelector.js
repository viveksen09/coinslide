import React from 'react';

class ModeSelector extends React.Component {

    render() {
        return(
            <div className="ui slider checkbox mode-button" >
                <input type="checkbox" name="newsletter" />
                <label style={{ color: 'white' }}>Day</label>
            </div>
        );
    }

}

export default ModeSelector;