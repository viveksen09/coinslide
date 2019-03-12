import './SearchBar.css';
import React from 'react';

import Logo from './Logo';


class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        this.props.onSearch(event.target.value );
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div>
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="search-bar">
                    <form className="search-form" onSubmit={this.onFormSubmit}>
                        <div className="ui icon input">
                            <input type="text" value={this.state.term} placeholder="Search..." onChange={this.onInputChange} />
                            <i className="search icon"></i>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default SearchBar;