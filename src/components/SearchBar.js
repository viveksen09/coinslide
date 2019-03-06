import './SearchBar.css';
import React from 'react';


class SearchBar extends React.Component {

    state = {term: ''}

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <form className="search-form" onSubmit={this.onFormSubmit}>
                    <div className="ui icon input">
                        <input type="text" value={this.state.term} placeholder="Search..." onChange={this.onInputChange}/>
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;