import './SearchBar.css';
import React from 'react';


class SearchBar extends React.Component {

    render() {
        return (
            <div className="search-bar">
                <form className="search-form">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;