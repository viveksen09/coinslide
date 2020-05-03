import React from 'react';

class Accordion extends React.Component {

    state = { selection: '' };

    onAccordionClick = (event) => {
        if (this.state.selection === '') {
            this.setState({ selection: 'active' });
        } else {
            this.setState({ selection: '' });
        }
        
    };

    render() {
        return(
            <div>
                <div className="ui inverted segment">
                    <div className="ui inverted accordion">
                        <div className={`${this.state.selection} title`} onClick={(e) => {this.onAccordionClick(e)}} >
                            <i className="dropdown icon"></i>
                            Settings
                        </div>
                        <div className={`${this.state.selection} content`}>
                            All the settings go here!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;