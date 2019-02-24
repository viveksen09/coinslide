import './PageLayout.css';
import React from 'react';
import SearchBar from './SearchBar';

class PageLayout extends React.Component {

    state = {term: ''};

    onCommencingSearch = (term) => {
        this.setState({term: term});
    }

    render() {
        return (
            <div className="page-layout">
                <div className="search-layout"> 
                    Search Term: {this.state.term}
                    <SearchBar onSearch={this.onCommencingSearch}/>
                </div>
            </div>
        );
    };
}

export default PageLayout;